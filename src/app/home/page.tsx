'use client'

// Optimized icon imports - tree-shakeable
import { FaHome, FaGithub, FaLinkedin, FaFileAlt, FaExternalLinkAlt } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function Whoami() {
  const router = useRouter()
  const form = useRef<HTMLFormElement>(null)
  const [formStatus, setFormStatus] = useState('')
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
  }, [])

  const validateForm = (formData: FormData) => {
    const errors: {[key: string]: string} = {}
    const name = formData.get('user_name') as string
    const email = formData.get('user_email') as string
    const message = formData.get('message') as string

    if (!name || name.trim().length < 2) {
      errors.user_name = 'Name must be at least 2 characters long'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      errors.user_email = 'Please enter a valid email address'
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long'
    }

    return errors
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!form.current) return

    const formData = new FormData(form.current)
    const errors = validateForm(formData)
    
    setFormErrors(errors)
    
    if (Object.keys(errors).length > 0) {
      return
    }

    setIsSubmitting(true)
    setFormStatus('sending')

    const templateParams = {
      user_name: formData.get('user_name') as string,
      user_email: formData.get('user_email') as string,
      message: formData.get('message') as string,
    }

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      console.log('SUCCESS!', result.text)
      setFormStatus('success')
      setFormErrors({})
      form.current?.reset()
    } catch (error) {
      console.error('FAILED...', error)
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const icons = [
    { icon: <FaHome />, link: "#whoami" },
    { icon: <FaFileAlt />, link: "https://drive.google.com/file/d/1_hUCEYXOh4jejzUZFMyV8OKBXP6-KwCE/view?usp=drivesdk" },
    { icon: <FaGithub />, link: "https://github.com/Shreyas-prog108" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shreyaspandeyy/" },
    { icon: <FaXTwitter />, link: "https://x.com/Shreyas_Pandeyy" },
    { icon: <SiGmail />, link: "mailto:shreyaspandey.kvs@gmail.com" },
  ]

  const skills = [
    "Python", "JavaScript", "TypeScript", "C/C++", "SQL",
    "LangChain", "LangGraph", "PyTorch", "Scikit-learn", "Transformers", "LoRA/QLoRA", "LlamaIndex", "OpenCV",
    "Multi-agent Systems", "ReAct", "MCP Servers", "RAG Pipelines", "Hybrid Vector Search", "RAPTOR", "DPO",
    "React", "Next.js", "FastAPI", "Flask", "Node.js", "PostgreSQL", "PGVector", "Redis",
    "Docker", "AWS", "GCP", "GitHub Actions", "CI/CD", "Linux"
  ]

  // // Featured blog posts (top 3)
  // const featuredBlogs = [
  //   {
  //     id: 1,
  //     title: "Getting Started with Next.js 15",
  //     excerpt: "A comprehensive guide to building modern web applications with Next.js 15 and the App Router.",
  //     date: "2025-01-05",
  //     readTime: "5 min read",
  //     tags: ["Next.js", "React", "Web Development"]
  //   },
  //   {
  //     id: 2,
  //     title: "Building AI-Powered Applications",
  //     excerpt: "Exploring the integration of AI models into web applications using modern frameworks.",
  //     date: "2025-01-04",
  //     readTime: "8 min read",
  //     tags: ["AI", "Machine Learning", "Web Development"]
  //   },
  //   {
  //     id: 3,
  //     title: "The Future of Full-Stack Development",
  //     excerpt: "Discussing emerging trends and technologies shaping the future of full-stack development.",
  //     date: "2025-01-03",
  //     readTime: "6 min read",
  //     tags: ["Full-Stack", "Technology", "Future"]
  //   }
  // ]

  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills-section')
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToExperience = () => {
    const skillsSection = document.getElementById('experience-section')
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToHighlights = () => {
    const section = document.getElementById('highlights-section')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div id="whoami" className="portfolio">
      <header>
        <div className="terminal-nav">
          <div className="terminal-buttons">
            <span className="terminal-button green"></span>
          </div>
          <div className="terminal-title">whoami.sh</div>
        </div>
      </header>
      
      <main id="main-content">
        <section className="hero">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-title">welcome@whoami:~$</div>
            </div>
            <div className="terminal-content">
              <p><span className="prompt">welcome@whoami:~$</span> whoami<span className="cursor1"></span></p>
              <p className="output">Shreyas Pandey</p>
              <p className="output">AIML Engineer</p>
              <p className="command-prompt" onClick={scrollToSkills} style={{ cursor: 'pointer' }}><span className="prompt">welcome@whoami:~$</span> cat skills.txt</p>
              <p className="command-prompt" onClick={scrollToExperience} style={{ cursor: 'pointer' }}><span className="prompt">welcome@whoami:~$</span> ls Experiences</p>              
              <p className="command-prompt" onClick={scrollToProjects} style={{ cursor: 'pointer' }}><span className="prompt">welcome@whoami:~$</span> ls projects</p>
              <p className="command-prompt" onClick={scrollToHighlights} style={{ cursor: 'pointer' }}><span className="prompt">welcome@whoami:~$</span> cat shreyas-skills.md</p>
              <p className="output"><a href="https://github.com/Shreyas-prog108/shreyas-skills" target="_blank" rel="noopener noreferrer">github.com/Shreyas-prog108/shreyas-skills</a></p>
              <p className="command-prompt" onClick={() => router.push('/blogs')} style={{ cursor: 'pointer' }}><span className="prompt">welcome@whoami:~$</span> ls blogs</p>
              {/* <p className="output"><Link href="/blogs">/blogs</Link></p> */}
              <p><span className="prompt">welcome@whoami:~$</span> cat contact.txt</p><p className="output">
              <a href="mailto:shreyaspandey.kvs@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></p>
              <p className="output"> <a href="https://www.github.com/Shreyas-prog108/" target="_blank" rel="noopener noreferrer">GitHub</a></p>
              <p className="output"><a href="https://www.linkedin.com/in/shreyaspandeyy/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>

              <p><span className="prompt">welcome@whoami:~$</span><span className="cursor">_</span></p>
            </div>
          </div>
        </section>
        <section className="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I&apos;m an AIML Engineer focused on agentic systems, RAG pipelines, and production AI infrastructure. I work with LangChain, LangGraph, MCP servers, multi-agent frameworks, and full-stack tooling to ship scalable AI products.</p>
              <p>I also maintain <a href="https://github.com/Shreyas-prog108/shreyas-skills" target="_blank" rel="noopener noreferrer">shreyas-skills</a> — an open-source engineering framework (Karpathy-inspired) that gives Cursor, Claude Code, Codex CLI, Windsurf, and Copilot a shared standard for building agentic AI systems.</p>
              <p>When I&apos;m not building, you&apos;ll find me contributing to open source or writing on AI engineering.</p>
            </div>
          </div>
        </section>

        <section id="highlights-section" className="about">
          <h2>Highlights</h2>
          <div className="project-grid">
            <div className="project-card featured-project">
              <div className="project-header">
                <h3>shreyas-skills</h3>
                <span className="featured-badge">Open Source</span>
              </div>
              <p>
                Personal engineering skill framework for agentic AI development — inspired by Karpathy&apos;s four LLM coding principles.
                One canonical standard for planning, building, and shipping agents across Cursor, Claude Code, Codex CLI, Windsurf, and GitHub Copilot. MIT licensed — fork and adapt.
              </p>
              <div className="tech-stack">
                <span>Karpathy Principles</span>
                <span>Agentic AI</span>
                <span>Cursor</span>
                <span>Claude Code</span>
                <span>MCP</span>
                <span>LangGraph</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shreyas-prog108/shreyas-skills" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <div className="project-card featured-project">
              <div className="project-header">
                <h3>REPPL</h3>
                <span className="featured-badge">Building</span>
              </div>
              <p>
                Before the noise, see the signal. A dark, calm market read for founders who need to feel the shift before it feels obvious.
              </p>
              <div className="project-links">
                <a href="https://www.reppl.org/" className="button" target="_blank" rel="noopener noreferrer">reppl.org</a>
              </div>
            </div>

            <div className="project-card featured-project">
              <div className="project-header">
                <h3>Lumicode</h3>
                <span className="featured-badge">MCP Server</span>
              </div>
              <p>
                Custom MCP server for document extraction and LLM coding context — simplifies pulling structured context into agentic coding workflows.
              </p>
              <div className="tech-stack">
                <span>MCP</span>
                <span>LangChain</span>
                <span>Document Extraction</span>
                <span>Agent Tools</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shreyas-prog108/lumicode" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills-section" className="skills bg-zinc-900 py-10 px-6 rounded-lg">
          <h2 className="text-white text-3xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-x-3 gap-y-3">
            {skills.map((skill) => (
              <button
                key={skill}
                className="skill-button border border-white text-white rounded-full px-4 py-1.5 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
                type="button"
              >
                {skill}
               </button>
            ))}
          </div>
          <section id="experience-section" className='experience'>
            <h2>Experience</h2>
            <div className='experience-item'>
              <div className='experience-header'>
                <div className='company-role'>
                  <h3>Cellyn</h3>
                  <h4>AI Engineer Intern</h4>
                  <span className='location'>Remote</span>
                </div>
                <div className='duration'>February 2026 - April 2026</div>
              </div>
              <div className='experience-details'>
                <ul>
                  <li>Developed an enterprise-grade Excel add-in with agentic tool-calling infrastructure for real-time financial data modeling, enabling LLM-driven workflows to interact with structured financial datasets and analytical tools.</li>
                  <li>Architected a private, encrypted data warehouse with access controls and secure data pipelines for sensitive financial information processing.</li>
                  <li>Built an end-to-end enterprise Data Room platform from scratch in 20 days, featuring multi-tenant isolation, room-based access control, real-time notifications, audit logging, and Q&amp;A capabilities.</li>
                  <li>Engineered AI-powered features including context-aware memory management for chat generation, automated PPT generation, sandboxed code execution, web search integration, and multi-database connectivity.</li>
                  <li>Managed full cloud infrastructure on Scaleway, owning CI/CD pipelines, deployment workflows, automated testing, and production releases across environments.</li>
                </ul>
              </div>
            </div>
            <div className='experience-item'>
              <div className='experience-header'>
                <div className='company-role'>
                  <h3>Fills AI</h3>
                  <h4>AI Engineer Intern</h4>
                  <span className='location'>Remote</span>
                </div>
                <div className='duration'>November 2025 - February 2026</div>
              </div>
              <div className='experience-details'>
                <ul>
                  <li>Engineered real time collaborative scientific editor (LangChain + Gemini + Tiptap + Y.js) with automated version control and cloud sync, processing 500+ biology manuscripts with 92% terminology consistency, reducing peer-review cycles by 40% for 50+ researchers.</li>
                  <li>Built semantic RAG system over PubMed&apos;s 30M+ paper corpus (Sentence Transformers + vector embeddings) achieving 92% citation accuracy; added hands-free voice agent via Web Speech API, cutting drafting time by 40%.</li>
                  <li>Integrated a live AI chatbot with real-time context extraction from dashboards and MCP server integrations, enabling agentic search across multiple platforms.</li>
                  <li>Architected and deployed a custom MCP server for the company&apos;s internal agent, bridging separately hosted services with their platform for seamless agentic tool orchestration.</li>
                  <li>Built a Biomni agent on Stanford&apos;s Biomni data lake, deployed on AWS EC2 with EFS-backed persistent storage for scalable biomedical data retrieval and analysis.</li>
                </ul>
              </div>
            </div>
            <div className='experience-item'>
              <div className='experience-header'>
                <div className='company-role'>
                  <h3>Stealth AI Startup</h3>
                  <h4>AI Engineer Intern</h4>
                  <span className='location'>Remote</span>
                </div>
                <div className='duration'>September 2025 - November 2025</div>
              </div>
              <div className='experience-details'>
                <ul>
                  <li>Engineered a real-time customer support voice pipeline using STT–TTS models, enabling low-latency conversational AI interactions for automated customer care services.</li>
                  <li>Optimized end-to-end speech inference and streaming architecture, reducing system latency to ~36 ms through pipeline optimization, asynchronous processing, and efficient audio buffering.</li>
                  <li>Designed and deployed the complete DevOps and inference infrastructure, orchestrating model services, real-time audio streaming, and scalable deployment on Scaleway cloud infrastructure.</li>
                </ul>
              </div>
            </div>
            <div className='experience-item'>
              <div className='experience-header'>
                <div className='company-role'>
                  <h3>21 Spheres</h3>
                  <h4>Python Developer Intern</h4>
                  <span className='location'>Remote</span>
                </div>
                <div className='duration'>April 2025 - September 2025</div>
              </div>
              <div className='experience-details'>
                <ul>
                  <li>Developed 5+ LangChain AI agents handling 1,000+ daily queries with 88% autonomous resolution rate across 5 client deployments.</li>
                  <li>Architected multi-agent ReAct framework achieving 85% autonomous task completion and 60% reduction in client processing time and led 3-person engineering team end-to-end.</li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section id="projects-section" className="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <div className="project-card featured-project">
              <div className="project-header">
                <h3>Autonomous Data Analysis Agent</h3>
              </div>
              <p>AI-driven analytical reasoning system with ReAct framework, natural language to code pipeline, and self-correcting multi-step analysis workflows.</p>
              <div className="tech-stack">
                <span>LangChain</span>
                <span>Gemini</span>
                <span>ReAct</span>
                <span>Pandas</span>
                <span>DuckDB</span>
                <span>FastAPI</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shreyas-prog108/data-analysis-agent" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div className="project-card featured-project">
              <div className="project-header">
                <h3>Fin Alpha</h3>
              </div>
              <p>Deep agent stock market intelligence system with live news triggers, sentiment analysis, and event-driven multi-agent workflows.</p>
              <div className="tech-stack">
                <span>LangChain</span>
                <span>LangGraph</span>
                <span>Alpha Vantage API</span>
                <span>News API</span>
                <span>asyncio</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shreyas-prog108/fin-alpha" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div className="project-card featured-project">
              <div className="project-header">
                <h3>BlockSuite RAG Pipeline</h3>
              </div>
              <p>Production-grade RAG with hybrid search, semantic deduplication, query rewriting, and PGVector retrieval across 1K+ documents.</p>
              <div className="tech-stack">
                <span>RAG</span>
                <span>Hybrid Search</span>
                <span>PGVector</span>
                <span>PostgreSQL</span>
                <span>LangChain</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shreyas-prog108/BlockSuite-RAG-Pipeline" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          <div className="view-all-projects">
            <a href="/projects" className="view-all-button">
              View All Projects →
            </a>
          </div>
        </section>

        {/* <section id="blogs-section" className="blogs">
          <h2>Latest Blog Posts</h2>
          <div className="blog-grid">
            {featuredBlogs.map((post) => (
              <article key={post.id} className="blog-card featured-blog">
                <div className="blog-header">
                  <div className="project-header">
                    <h3>{post.title}</h3>
                  </div>
                  <div className="blog-meta">
                    <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <div className="blog-actions">
                  <a href={`/blogs#blog-${post.id}`} className="button">
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="view-all-projects">
            <a href="/blogs" className="view-all-button">
              View All Blog Posts →
            </a>
          </div>
        </section> */}

          <section className="achievements">
            <h2>Achievements & Leadership</h2>
            <div className="achievement-item">
              <div className="achievement-header">
                <div className="achievement-info">
                  <h3>AWS Certified Cloud Practitioner</h3>
                  <div className='duration'>September 2025</div>
                </div>
                <a
                  href="https://www.credly.com/badges/b7f2d72f-cd35-47c0-9520-a382ff5dca55/public_url"
                  className="external-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View credential on Credly"
                  title="View credential on Credly"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-header">
                <div className="achievement-info">
                  <h3>YC Startup School 2026 — Top 1000 Builders in India</h3>
                  <div className='duration'>2026 · Bangalore</div>
                </div>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-header">
                <div className="achievement-info">
                  <h3>shreyas-skills — Open Source Engineering Framework</h3>
                  <div className='duration'>Karpathy-inspired · MIT License</div>
                </div>
                <a
                  href="https://github.com/Shreyas-prog108/shreyas-skills"
                  className="external-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View shreyas-skills on GitHub"
                  title="View on GitHub"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p>Shared engineering standard for agentic AI — works with Cursor, Claude Code, Codex CLI, Windsurf, and GitHub Copilot.</p>
            </div>
            <div className="achievement-item">
              <div className="achievement-header">
                <div className="achievement-info">
                  <h3>Open Source Contributor</h3>
                  <div className='duration'>Hacktoberfest, IWoC & more</div>
                </div>
              </div>
              <p>Active contributor across 10+ repositories in Hacktoberfest, IWoC, and other OSS programs.</p>
            </div>
          </section>

          <section className="achievements">
            <h2>Education</h2>
            <div className="achievement-item">
              <div className="achievement-header">
                <div className="achievement-info">
                  <h3>Indian Institute of Technology, Madras (Online)</h3>
                </div>
                <span> B.S. - Data Science and Applications</span>
                
              </div>
                  <br></br>
              <div className="achievement-header">
                <div className="achievement-info">
                  <h3>KIET Group of Institutions, Ghaziabad</h3>
                </div>
                <span> B.Tech - Computer Science and Engineering (AKTU)</span>
                
              </div>
            </div>
          </section>

        <section className="contact">
          <h2>Contact</h2>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name" 
                  placeholder="Your name" 
                  required 
                  className={formErrors.user_name ? 'error' : ''}
                  aria-describedby={formErrors.user_name ? 'name-error' : undefined}
                />
                {formErrors.user_name && (
                  <span id="name-error" className="field-error">{formErrors.user_name}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email" 
                  placeholder="Your email" 
                  required 
                  className={formErrors.user_email ? 'error' : ''}
                  aria-describedby={formErrors.user_email ? 'email-error' : undefined}
                />
                {formErrors.user_email && (
                  <span id="email-error" className="field-error">{formErrors.user_email}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your message" 
                  required
                  className={formErrors.message ? 'error' : ''}
                  aria-describedby={formErrors.message ? 'message-error' : undefined}
                ></textarea>
                {formErrors.message && (
                  <span id="message-error" className="field-error">{formErrors.message}</span>
                )}
              </div>
              <button 
                type="submit" 
                className="submit-button" 
                disabled={isSubmitting}
                aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              {formStatus === 'success' && (
                <p className="success-message" role="status" aria-live="polite">
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="error-message" role="alert" aria-live="assertive">
                  ❌ Failed to send message. Please try again or contact me directly.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
      
      <footer>
        <p>© {new Date().getFullYear()} Shreyas Pandey | Built with Love</p>
        <div className="social-links">
          <Link href="/projects" className="social-link">Projects</Link>
          <Link href="/blogs" className="social-link">Blog</Link>
          <a href="https://x.com/Shreyas_Pandeyy" className="social-link" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.linkedin.com/in/shreyaspandeyy/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Shreyas-prog108" className="social-link" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://drive.google.com/file/d/1_hUCEYXOh4jejzUZFMyV8OKBXP6-KwCE/view?usp=drivesdk" className="social-link" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </footer>
      <div className="fixed-icons">
        {icons.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
