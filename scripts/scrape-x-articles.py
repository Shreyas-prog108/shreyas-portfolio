#!/usr/bin/env python3
"""Fetch full X article content via FxTwitter API and save as HTML."""

import json
import os
import re
import time
import urllib.request

STATUS_IDS = [
    ("the-last-30-days-of-ai-multiverse", "2067615097477083408"),
    ("the-60-question-are-cursors-ai-tokens-actually-subsidized", "2064371342892560416"),
    ("minimaxs-m2-series-the-clearest-public-blueprints-for-agent-native-llms", "2060012257724264797"),
    ("the-ai-engineering-roadmap", "2056101948420759650"),
    ("ai-engineering-roadmap-for-software-engineers", "2056101751632416853"),
    (
        "i-made-claude-opus-46-max-and-gpt-55-analyze-the-x-algorithm-then-i-made-them-judge-each-other",
        "2056044969916596702",
    ),
]

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "src", "content", "articles")
COVERS_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "blog-covers")

STAT_LINE = re.compile(
    r"^(Cache read|Cache write|Input|Output|Total tokens|Naive cost|Cache-adjusted cost|Total across):",
    re.I,
)
MODEL_USAGE = re.compile(r"^.+ — \d+\.?\d*% of usage$")
MODEL_NAME = re.compile(r"^(Composer|GPT|Claude)\b")


def is_real_url(text: str) -> bool:
    if text.startswith("http"):
        return True
    if re.search(r"[a-z]\.[A-Z]", text):
        return False
    return bool(re.match(r"^[\w.-]+\.(com|org|net|io|ai|me|dev|co|app)(/|$)", text, re.I))


def apply_inline(text: str, inline_style_ranges: list) -> str:
    for style in sorted(inline_style_ranges, key=lambda x: x["offset"], reverse=True):
        start, end = style["offset"], style["offset"] + style["length"]
        chunk = text[start:end]
        kind = style.get("style", "")
        if kind == "BOLD":
            chunk = f"<strong>{chunk}</strong>"
        elif kind == "ITALIC":
            chunk = f"<em>{chunk}</em>"
        elif kind == "CODE":
            chunk = f"<code>{chunk}</code>"
        text = text[:start] + chunk + text[end:]
    return text


def apply_entities(text: str, data: dict) -> str:
    if not data:
        return text
    replacements = []
    for key in ("urls", "mentions", "hashtags"):
        for item in data.get(key, []):
            replacements.append((item["fromIndex"], item["toIndex"], item.get("text", ""), key))
    replacements.sort(key=lambda x: x[0], reverse=True)
    for start, end, label, kind in replacements:
        chunk = text[start:end]
        if kind == "urls":
            if not is_real_url(label):
                continue
            url = label if label.startswith("http") else f"https://{label}"
            chunk = f'<a href="{url}" target="_blank" rel="noopener noreferrer">{chunk}</a>'
        elif kind == "mentions":
            handle = label.lstrip("@")
            chunk = f'<a href="https://x.com/{handle}" target="_blank" rel="noopener noreferrer">{chunk}</a>'
        elif kind == "hashtags":
            tag = label.lstrip("#")
            chunk = f'<a href="https://x.com/hashtag/{tag}" target="_blank" rel="noopener noreferrer">{chunk}</a>'
        text = text[:start] + chunk + text[end:]
    return text


def normalize_multiline_text(text: str) -> str:
    text = re.sub(r"(investigation\.)(The Raw Data)", r"\1\n\n\2", text)
    text = re.sub(r"(tokens\.)(The Naive Calculation)", r"\1\n\n\2", text)
    text = re.sub(r"(calculation\.)(The Cache Correction)", r"\1\n\n\2", text)
    text = re.sub(r"(calculation\.)(The Gap That Remains)", r"\1\n\n\2", text)
    text = re.sub(r"(month\.)(So Are The Tokens)", r"\1\n\n\2", text)
    text = re.sub(r"(service\.)(What The Numbers)", r"\1\n\n\2", text)
    text = re.sub(r"(\$60 I )(paid\.)(Here are)", r"\1paid.\n\nHere are", text)
    text = re.sub(r"(original )(question\.)(Here is)", r"\1question.\n\nHere is", text)
    text = re.sub(r"(\d{4}\.)(Composer|GPT|Claude)", r"\1\n\n\2", text)
    text = re.sub(r"models\.(Composer 2\.5 Fast)", r"models.\n\n\1", text)
    text = re.sub(r"(\d)\n(GPT|Claude|Composer)", r"\1\n\n\2", text)
    return text


def classify_line(line: str) -> str:
    if line in {"The Raw Data", "Total across all models"}:
        return "h2"
    if re.match(r"^The .+(?:\?|: \$[\d,]+(?: Becomes \$[\d,]+)?)$", line):
        return "h2"
    if line in {"So Are The Tokens Subsidized?", "What The Numbers Actually Tell You"}:
        return "h2"
    if MODEL_USAGE.match(line):
        return "h3"
    if MODEL_NAME.match(line) and len(line) < 60:
        return "h3"
    if STAT_LINE.match(line):
        return "stat"
    return "p"


def multiline_to_html(text: str) -> str:
    text = normalize_multiline_text(text)
    lines = [line.strip() for line in text.split("\n") if line.strip()]
    parts: list[str] = []
    stat_buffer: list[str] = []

    def flush_stats():
        nonlocal stat_buffer
        if stat_buffer:
            parts.append("<pre>" + "\n".join(stat_buffer) + "</pre>")
            stat_buffer = []

    for line in lines:
        kind = classify_line(line)
        if kind == "stat":
            stat_buffer.append(line)
            continue
        flush_stats()
        if kind == "h2":
            parts.append(f"<h2>{line}</h2>")
        elif kind == "h3":
            parts.append(f"<h3>{line}</h3>")
        else:
            parts.append(f"<p>{line}</p>")

    flush_stats()
    return "\n".join(parts)


def block_to_html(block: dict, entity_map: list) -> str:
    btype = block["type"]
    text = block.get("text", "")
    text = apply_inline(text, block.get("inlineStyleRanges", []))
    text = apply_entities(text, block.get("data", {}))

    if btype == "header-one":
        return f"<h1>{text}</h1>"
    if btype == "header-two":
        return f"<h2>{text}</h2>"
    if btype == "header-three":
        return f"<h3>{text}</h3>"
    if btype == "blockquote":
        return f"<blockquote><p>{text}</p></blockquote>"
    if btype == "atomic":
        for er in block.get("entityRanges", []):
            key = er.get("key", er.get("entityKey"))
            if key is not None and int(key) < len(entity_map):
                ent = entity_map[int(key)]
                if ent.get("type") == "IMAGE":
                    src = ent.get("data", {}).get("src", "")
                    if src:
                        return f'<figure><img src="{src}" alt="" loading="lazy" /></figure>'
        return ""
    if btype == "unstyled" and "\n" in text:
        return multiline_to_html(text)
    if not text.strip():
        return ""
    return f"<p>{text}</p>"


def content_to_html(content: dict) -> str:
    blocks = content["blocks"]
    entity_map = content.get("entityMap", [])
    html_parts: list[str] = []
    in_ul = False
    in_ol = False

    def close_lists():
        nonlocal in_ul, in_ol
        if in_ul:
            html_parts.append("</ul>")
            in_ul = False
        if in_ol:
            html_parts.append("</ol>")
            in_ol = False

    for block in blocks:
        btype = block["type"]
        if btype == "unordered-list-item":
            if in_ol:
                html_parts.append("</ol>")
                in_ol = False
            if not in_ul:
                html_parts.append("<ul>")
                in_ul = True
            item = apply_entities(
                apply_inline(block.get("text", ""), block.get("inlineStyleRanges", [])),
                block.get("data", {}),
            )
            html_parts.append(f"<li>{item}</li>")
            continue
        if btype == "ordered-list-item":
            if in_ul:
                html_parts.append("</ul>")
                in_ul = False
            if not in_ol:
                html_parts.append("<ol>")
                in_ol = True
            item = apply_entities(
                apply_inline(block.get("text", ""), block.get("inlineStyleRanges", [])),
                block.get("data", {}),
            )
            html_parts.append(f"<li>{item}</li>")
            continue
        close_lists()
        part = block_to_html(block, entity_map)
        if part:
            html_parts.append(part)
    close_lists()
    return "\n".join(html_parts)


def download_cover(slug: str, url: str) -> None:
    if not url:
        return
    os.makedirs(COVERS_DIR, exist_ok=True)
    path = os.path.join(COVERS_DIR, f"{slug}.jpg")
    urllib.request.urlretrieve(url, path)


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    for slug, status_id in STATUS_IDS:
        api_url = f"https://api.fxtwitter.com/Shreyas_Pandeyy/status/{status_id}"
        with urllib.request.urlopen(api_url) as response:
            data = json.load(response)
        article = data["tweet"]["article"]
        html = content_to_html(article["content"])
        path = os.path.join(OUT_DIR, f"{slug}.html")
        with open(path, "w", encoding="utf-8") as file:
            file.write(html)

        cover = (
            article.get("cover_media", {})
            .get("media_info", {})
            .get("original_img_url", "")
        )
        if cover:
            download_cover(slug, cover)
        print(f"{slug}: {len(html)} chars, cover: {'saved' if cover else 'none'}")
        time.sleep(0.4)


if __name__ == "__main__":
    main()
