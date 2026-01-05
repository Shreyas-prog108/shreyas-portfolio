'use client'

// Optimized icon imports - tree-shakeable
import { FaHome, FaGithub, FaLinkedin, FaFileAlt, FaExternalLinkAlt } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { FaXTwitter } from 'react-icons/fa6'
import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function Whoami() {
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
    { icon: <FaFileAlt />, link: "https://drive.google.com/file/d/124OM9Rbu67MV4u147mrO8E0dwUjap1mJ/view?usp=sharing" },
    { icon: <FaGithub />, link: "https://github.com/Shreyas-prog108" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shreyaspandeyy/" },
    { icon: <FaXTwitter />, link: "https://x.com/Shreyas_Pandeyy" },
    { icon: <SiGmail />, link: "mailto:shreyaspandey.kvs@email.com" },
  ]

  const skills = [
    "AWS", "GCP", "CI/CD", "DevOps", "Linux", "Docker", "Kubernetes", "GraphQL", "RestAPI",
    "Node.js", "Prisma", "React", "Next.js", "Vue.js", "Flask", "FastAPI", "Tailwind CSS", "Shadcn", "Bootstrap", "Javascript", "Typescript", "C/C++", "Python",
    "Langchain", "Langgraph","RAG", "ML", "Pytorch", "Scikit-learn",
    "MongoDB", "MySQL", "PostgreSQL", "SQLite", "DuckDB", "Celery", "Redis",
    "Git", "GitHub", "GitLab", "PineconeDB" ,"Hugging Face"
  ]

  // Featured blog posts (top 3)
  const featuredBlogs = [
    {
      id: 1,
      title: "Getting Started with Next.js 15",
      excerpt: "A comprehensive guide to building modern web applications with Next.js 15 and the App Router.",
      date: "2025-01-05",
      readTime: "5 min read",
      tags: ["Next.js", "React", "Web Development"]
    },
    {
      id: 2,
      title: "Building AI-Powered Applications",
      excerpt: "Exploring the integration of AI models into web applications using modern frameworks.",
      date: "2025-01-04",
      readTime: "8 min read",
      tags: ["AI", "Machine Learning", "Web Development"]
    },
    {
      id: 3,
      title: "The Future of Full-Stack Development",
      excerpt: "Discussing emerging trends and technologies shaping the future of full-stack development.",
      date: "2025-01-03",
      readTime: "6 min read",
      tags: ["Full-Stack", "Technology", "Future"]
    }
  ]

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

  const scrollToBlogs = () => {
    const blogsSection = document.getElementById('blogs-section')
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: 'smooth' })
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
              <p className="output">Full-Stack Developer | AI&ML Developer | Student</p>
              <p className="command-prompt" onClick={scrollToSkills} style={{ cursor: 'pointer' }}><span className="prompt">welcome@whoami:~$</span> cat skills.txt</p>
              <p className="command-prompt" onClick={scrollToExperience} style={{ cursor: 'pointer' }}><span className="prompt">welcome@whoami:~$</span> ls Experiences</p>              
              <p className="command-prompt" onClick={scrollToProjects} style={{ cursor: 'pointer' }}><span className="prompt">welcome@whoami:~$</span> ls projects</p>
              <p className="command-prompt" onClick={scrollToBlogs} style={{ cursor: 'pointer' }}><span className="prompt">welcome@whoami:~$</span> ls blogs</p>
              <p><span className="prompt">welcome@whoami:~$</span> cat contact.txt</p><p className="output">
              <a href="mailto:shreyaspandey.ethical@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></p>
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
              <p>I&apos;m a passionate front-end developer and student with a focus on creating responsive and user-friendly web applications. My journey in web development started with HTML and CSS, and I&apos;ve since expanded my skills to include JavaScript, React, and various other technologies.</p>
              <p>When I&apos;m not coding, you can find me exploring new technologies, reading tech blogs, or contributing to open-source projects.</p>
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
                  <h3>Fills AI</h3>
                  <h4>AI Engineer Intern</h4>
                  <span className='location'>Remote</span>
                </div>
                <div className='duration'>November 2025 - Present</div>
              </div>
              <div className='experience-details'>
                <ul>
                  <li>Engineered collaborative document editor using LangChain + Gemini + Tiptap with AI-powered terminology correction and consistency validation, processing 500+ biological research manuscripts with 92% accuracy</li>
                  <li>Built voice agent for hands-free scientific writing using Web Speech API for transcription, reducing manuscript drafting time by 40% for 50+ researchers</li>
                  <li>Implemented semantic search with vector embeddings (Sentence Transformers) and RAG-based validation querying PubMed&apos;s 30M+ paper corpus, achieving 92% citation accuracy</li>
                  <li>Deployed statically-hosted lab notes platform with real-time collaboration, automated version control, and cloud synchronization serving 10+ research laboratories</li>
                </ul>
              </div>
            </div>
            <div className='experience-item'>
              <div className='experience-header'>
                <div className='company-role'>
                  <h3>21 Spheres</h3>
                  <h4>Python Developer</h4>
                  <span className='location'>Remote</span>
                </div>
                <div className='duration'>April 2025 - September 2025</div>
              </div>
              <div className='experience-details'>
                <ul>
                  <li>Developed and deployed multiple Python-based AI solutions including intelligent automation systems for real-world applications</li>
                  <li>Led end-to-end development of AI agent frameworks, implementing multi-step reasoning and tool integration capabilities</li>
                  <li>Managed cross-functional team of 3 developers in designing and implementing agentic AI systems, ensuring successful delivery of scalable AI solutions</li>
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
                <h3>Citecrawler</h3>
              </div>
              <p>AI Powered Comprehensive Research Paper Searching Platform</p>
              <div className="tech-stack">
                <span>RAG System</span>
                <span>Next.js</span>
                <span>FastAPI</span>
                <span>PineconeDB</span>
                <span>Shadcn</span>
                <span>MongoDB</span>
                <span>Beautiful Soup</span>
                <span>Github Auth</span>
              </div>
              <div className="project-links">
                <a href="https://citecrawler.vercel.app/" className="button" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/Shreyas-prog108/citecrawler" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div className="project-card featured-project">
              <div className="project-header">
                <h3>Envilo</h3>
              </div>
              <p>Secure Environment Variables and Secrets Management Platform</p>
              <div className="tech-stack">
                <span>Next.js</span>
                <span>MongoDB</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shreyas-prog108/envilo" className="button" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/Shreyas-prog108/envilo" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div className="project-card featured-project">
              <div className="project-header">
                <h3>Parkpro</h3>
              </div>
              <p>A Parking management Application</p>
              <div className="tech-stack">
                <span>Flask</span>
                <span>Jinja</span>
                <span>Bootstrap CSS</span>
                <span>PostgreSQL</span>
              </div>
              <div className="project-links">
                <a href="https://parkpro-backend.onrender.com/" className="button" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/Shreyas-prog108/parkpro" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          <div className="view-all-projects">
            <a href="/projects" className="view-all-button">
              View All Projects →
            </a>
          </div>
        </section>

        <section id="blogs-section" className="blogs">
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
        </section>

          <section className="achievements">
            <h2>Achievements</h2>
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
          </section>

          <section className="achievements">
            <h2>Education</h2>
            <div className="achievement-item">
              <div className="achievement-header">
                <div className="achievement-info">
                  <h3>Indian Institute of Technology, Madras</h3>
                  <div className='duration'>September 2023 - July 2027</div>
                </div>
                <span> B.S. - Data Science and Applications</span>
                
              </div>
                  <br></br>
              <div className="achievement-header">
                <div className="achievement-info">
                  <h3>KIET Group of Institutions, Ghaziabad</h3>
                  <div className='duration'>September 2023 - June 2027</div>
                </div>
                <span> B.Tech - Computer Science</span>
                
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
          <a href="/projects" className="social-link">Projects</a>
          <a href="/blogs" className="social-link">Blog</a>
          <a href="https://x.com/Shreyas_Pandeyy" className="social-link" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.linkedin.com/in/shreyaspandeyy/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Shreyas-prog108" className="social-link" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://drive.google.com/file/d/124OM9Rbu67MV4u147mrO8E0dwUjap1mJ/view?usp=sharing" className="social-link" target="_blank" rel="noopener noreferrer">Resume</a>
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
