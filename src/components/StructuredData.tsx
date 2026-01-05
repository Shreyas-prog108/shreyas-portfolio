export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shreyas Pandey",
    "jobTitle": ["Full-Stack Developer", "AI Engineer"],
    "description": "Experienced Full-Stack Developer and AI Engineer specializing in Next.js, React, Python, and AI/ML solutions.",
    "url": "https://shreyaspandey.dev",
    "sameAs": [
      "https://github.com/Shreyas-prog108",
      "https://www.linkedin.com/in/shreyaspandeyy/",
      "https://x.com/Shreyas_Pandeyy"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Fills AI",
        "description": "AI Engineer Intern"
      },
      {
        "@type": "Organization", 
        "name": "21 Spheres",
        "description": "Python Developer"
      }
    ],
    "knowsAbout": [
      "Full-Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Next.js",
      "React",
      "Python",
      "TypeScript",
      "Node.js",
      "AWS",
      "GCP"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Indian Institute of Technology, Madras",
        "description": "B.S. - Data Science and Applications"
      },
      {
        "@type": "EducationalOrganization",
        "name": "KIET Group of Institutions, Ghaziabad", 
        "description": "B.Tech - Computer Science"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
