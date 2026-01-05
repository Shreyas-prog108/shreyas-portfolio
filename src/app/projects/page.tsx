'use client'

import Link from 'next/link'

export default function Projects() {
  const allProjects = [
    {
      id: 1,
      title: "Citecrawler",
      description: "AI Powered Comprehensive Research Paper Searching Platform",
      techStack: ["RAG System", "Next.js", "FastAPI", "PineconeDB", "Shadcn", "MongoDB", "Beautiful Soup", "Github Auth"],
      liveDemo: "https://citecrawler.vercel.app/",
      github: "https://github.com/Shreyas-prog108/citecrawler",
      featured: false
    },
    {
      id: 2,
      title: "Envilo",
      description: "Secure Environment Variables and Secrets Management Platform",
      techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
      liveDemo: "https://github.com/Shreyas-prog108/envilo",
      github: "https://github.com/Shreyas-prog108/envilo",
      featured: false
    },
    {
      id: 3,
      title: "Parkpro",
      description: "A Parking management Application",
      techStack: ["Flask", "Jinja", "Bootstrap CSS", "PostgreSQL"],
      liveDemo: "https://parkpro-backend.onrender.com/",
      github: "https://github.com/Shreyas-prog108/parkpro",
      featured: false
    },
    {
      id: 4,
      title: "Doxtract",
      description: "PDF, DOCX, TXT to JSON Converter",
      techStack: ["FastAPI", "Next.js", "GCP"],
      liveDemo: "https://doxtract.vercel.app/",
      github: "https://github.com/Shreyas-prog108/doxtract",
      featured: false
    },
    {
      id: 5,
      title: "FinTerm",
      description: "A CLI based MCP Server for Stock Market Support",
      techStack: ["FastAPI"],
      liveDemo: null,
      github: "https://github.com/Shreyas-prog108/FinTerm",
      featured: false
    },
    {
      id: 6,
      title: "Data Analyst Agent",
      description: "AI Powered Data Analysis Agent",
      techStack: ["FastAPI", "Langchain", "DuckDB", "Beautiful Soup", "Gemini API"],
      liveDemo: null,
      github: "https://github.com/Shreyas-prog108/data-analysis-agent",
      featured: false
    },
    {
      id: 7,
      title: "Coffee Roasting Algorithm",
      description: "A neural network algorithm written in python",
      techStack: ["Python", "Numpy", "Neural Network"],
      liveDemo: null,
      github: "https://github.com/Shreyas-prog108/coffee-roasting",
      featured: false
    },
    {
      id: 8,
      title: "Cetaphil Parody",
      description: "UI practice project",
      techStack: ["React.js", "Tailwind CSS"],
      liveDemo: "https://cetaphilparody.vercel.app/",
      github: "https://github.com/Shreyas-prog108/cetaphil-parody",
      featured: false
    },
    {
      id: 9,
      title: "HealthEase",
      description: "Hospital Management System",
      techStack: ["Vue.js", "Flask", "PostgreSQL", "Redis", "Celery", "Bootstrap CSS"],
      liveDemo: null,
      github: null,
      featured: false
    }
  ]

  return (
    <div className="portfolio">
      <header>
        <div className="terminal-nav">
          <div className="terminal-buttons">
            <span className="terminal-button green"></span>
          </div>
          <div className="terminal-title">projects.sh</div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-title">shreyas@projects:~$</div>
            </div>
            <div className="terminal-content">
              <p>
                <span className="prompt">shreyas@projects:~$</span> 
                <span 
                  className="clickable-command" 
                  onClick={() => document.getElementById('all-projects')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ cursor: 'pointer' }}
                >
                  ls -la projects
                </span>
                <span className="cursor1"></span>
              </p>
              <p className="output">total {allProjects.length} projects</p>
              <p className="output">drwxr-xr-x  2 shreyas shreyas 4096 Jan  5 2025 .</p>
              <p className="output">drwxr-xr-x  3 shreyas shreyas 4096 Jan  5 2025 ..</p>
              {allProjects.map((project) => (
                <p key={project.id} className="output">
                  <span 
                    className="clickable-file" 
                    onClick={() => document.getElementById(`project-${project.id}`)?.scrollIntoView({ behavior: 'smooth' })}
                    style={{ cursor: 'pointer' }}
                  >
                    {project.featured ? '-rwxr-xr-x' : '-rw-r--r--'}  1 shreyas shreyas 2048 Jan  5 2025 {project.title.toLowerCase().replace(/\s+/g, '-')}/
                  </span>
                </p>
              ))}
              <p><span className="prompt">shreyas@projects:~$</span> cat README.md</p>
              <p className="output">Collection of my personal and professional projects showcasing various technologies and skills.</p>
              <p>
                <span className="prompt">shreyas@projects:~$</span> 
                <span 
                  className="clickable-command" 
                  onClick={() => window.location.href = '/home'}
                  style={{ cursor: 'pointer' }}
                >
                  cd ../home
                </span>
              </p>
              <p>
                <span className="prompt">shreyas@projects:~$</span> 
                <span 
                  className="clickable-command" 
                  onClick={() => window.location.href = '/blogs'}
                  style={{ cursor: 'pointer' }}
                >
                  cd ../blogs
                </span>
              </p>
              <p><span className="prompt">shreyas@projects:~$</span><span className="cursor">_</span></p>
            </div>
          </div>
        </section>

        <section id="all-projects" className="about">
          <h2>All Projects</h2>
          <div className="project-grid">
            {allProjects.map((project) => (
              <div key={project.id} id={`project-${project.id}`} className={`project-card ${project.featured ? 'featured-project' : ''}`}>
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveDemo && (
                    <a href={project.liveDemo} className="button" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="button" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {!project.liveDemo && !project.github && (
                    <span className="coming-soon">Publicly available soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about">
          <h2>Technologies Used</h2>
          <div className="about-content">
            <div className="about-text">
              <p>My projects span across various technologies and domains including web development, AI/ML, cloud computing, and mobile applications.</p>
              <p>I enjoy working with modern frameworks like Next.js, React, Vue.js, and backend technologies like FastAPI, Flask, and Node.js. I&apos;m also passionate about AI/ML integration and cloud deployment.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Shreyas Pandey | Built with Love</p>
        <div className="social-links">
          <Link href="/home" className="social-link">Whoami</Link>
          <Link href="/blogs" className="social-link">Blog</Link>
          <a href="https://x.com/Shreyas_Pandeyy" className="social-link" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.linkedin.com/in/shreyaspandeyy/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Shreyas-prog108" className="social-link" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </footer>
    </div>
  )
}
