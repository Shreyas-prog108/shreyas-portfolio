import '../App.css';
import { FaHome, FaGithub, FaLinkedin, FaFileAlt, FaExternalLinkAlt } from "react-icons/fa";
//import { PiNotebookDuotone } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from 'react-icons/fa6';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Front = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    emailjs.init("PWnndMr50iNRmbHmD");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const templateParams = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    emailjs.send(
      'service_4uj4x4k',
      'template_shreyas1812',
      templateParams,
      'PWnndMr50iNRmbHmD'
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setFormStatus('success');
        form.current.reset();
      })
      .catch((error) => {
        console.error('FAILED...', error.text);
        setFormStatus('error');
      });
  };

  const icons = [
    { icon: <FaHome />, link: "#portfolio" },
    { icon: <FaFileAlt />, link: "https://drive.google.com/file/d/124OM9Rbu67MV4u147mrO8E0dwUjap1mJ/view?usp=sharing" },
    { icon: <FaGithub />, link: "https://github.com/Shreyas-prog108" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shreyaspandeyy/" },
    { icon: <FaXTwitter />, link: "https://x.com/Shreyas_Pandeyy" },
    { icon: <SiGmail />, link: "mailto:shreyaspandey.kvs@email.com" },
 
  ];

  const skills = [
    "AWS", "GCP", "CI/CD", "DevOps", "Linux", "Docker", "Kubernetes", "GraphQL", "RestAPI",
    "Node.js", "Prisma", "React", "Next.js", "Vue.js", "Flask", "FastAPI", "Tailwind CSS", "Shadcn", "Bootstrap", "Javascript", "Typescript", "C/C++", "Python",
    "Langchain", "Langgraph","RAG", "ML", "Pytorch", "Scikit-learn",
    "MongoDB", "MySQL", "PostgreSQL", "SQLite", "DuckDB", "Celery", "Redis",
    "Git", "GitHub", "GitLab", "PineconeDB" ,"Hugging Face"];
    const scrollToSkills = () => {
      const skillsSection = document.getElementById('skills-section');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const scrollToExperience = () => {
      const skillsSection = document.getElementById('experience-section');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const scrollToProjects = () => {
      const projectsSection = document.getElementById('projects-section');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (

    <div id="portfolio" className="portfolio">
      <header>
        <div className="terminal-nav">
          <div className="terminal-buttons">
            <span className="terminal-button green"></span>
          </div>
          <div className="terminal-title">portfolio.sh</div>
        </div>
      </header>
      
      <main>
        <section className="hero">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-title">welcome@portfolio:~$</div>
            </div>
            <div className="terminal-content">
              <p><span className="prompt">welcome@portfolio:~$</span> whoami<span className="cursor1"></span></p>
              <p className="output">Shreyas Pandey</p>
              <p className="output">Full-Stack Developer | AI&ML Developer | Student</p>
              <p className="command-prompt" onClick={scrollToSkills} style={{ cursor: 'pointer' }}><span className="prompt">welcome@portfolio:~$</span> cat skills.txt</p>
              <p className="command-prompt" onClick={scrollToExperience} style={{ cursor: 'pointer' }}><span className="prompt">welcome@portfolio:~$</span> ls Experiences/</p>              
              <p className="command-prompt" onClick={scrollToProjects} style={{ cursor: 'pointer' }}><span className="prompt">welcome@portfolio:~$</span> ls projects/</p>
              <p><span className="prompt">welcome@portfolio:~$</span> cat contact.txt</p><p className="output">
              <a href="mailto:shreyaspandey.ethical@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></p>
              <p className="output"> <a href="https://www.github.com/Shreyas-prog108/" target="_blank" rel="noopener noreferrer">GitHub</a></p>
              <p className="output"><a href="https://www.linkedin.com/in/shreyaspandeyy/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>

              <p><span className="prompt">welcome@portfolio:~$</span><span className="cursor">_</span></p>
            </div>
          </div>
        </section>
        <section className="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a passionate front-end developer and student with a focus on creating responsive and user-friendly web applications. My journey in web development started with HTML and CSS, and I've since expanded my skills to include JavaScript, React, and various other technologies.</p>
              <p>When I'm not coding, you can find me exploring new technologies, reading tech blogs, or contributing to open-source projects.</p>
            </div>
          </div>
        </section>


        <section id="skills-section" className="skills bg-zinc-900 py-10 px-6 rounded-lg">
  <h2 className="text-white text-3xl font-bold mb-6">Skills</h2>
  <div className="flex flex-wrap gap-x-3 gap-y-3">
    {skills.map((skill) => (
      <button
        key={skill}
        className="border border-white text-white rounded-full px-4 py-1.5 text-sm font-medium hover:bg-white hover:text-black transition"
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
                <h3>21 Spheres</h3>
                <h4>Python Developer</h4>
                <span className='location'>Remote</span>
              </div>
              <div className='duration'>April 2025 - August 2025</div>
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
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Citecrawler</h3>
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
            <div className="project-card">
              <h3>Envilo</h3>
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
            
            <div className="project-card">
              <h3>Parkpro</h3>
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
            <div className="project-card">
              <h3>Doxtract</h3>
              <p>PDF, DOCX, TXT to JSON Converter</p>
              <div className="tech-stack">
                <span>FastAPI</span>
                <span>Next.js</span>
                <span>GCP</span>
              </div>
              <div className="project-links">
                <a href="https://doxtract.vercel.app/" className="button" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/Shreyas-prog108/doxtract" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          <div className="project-card">
              <h3>FinTerm</h3>
              <p>A CLI based MCP Server for Stock Market Support</p>
              <div className="tech-stack">
                <span>FastAPI</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shreyas-prog108/FinTerm" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              </div>

            <div className="project-card">
              <h3>Data Analyst Agent</h3>
              <p>AI Powered Data Analysis Agent</p>
              <div className="tech-stack">
                <span>FastAPI</span>
                <span>Langchain</span>
                <span>DuckDB</span>
                <span>Beautiful Soup</span>
                <span>Gemini API</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shreyas-prog108/data-analysis-agent" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>Coffee Roasting Algorithm</h3>
              <p>A neural network algorithm written in python</p>
              <div className="tech-stack">
                <span>Python</span>
                <span>Numpy</span>
                <span>Neural Network</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shreyas-prog108/coffee-roasting" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>Cetaphil Parody</h3>
              <p>UI practice project</p>
              <div className="tech-stack">
                <span>React.js</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="https://cetaphilparody.vercel.app/" className="button" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/Shreyas-prog108/cetaphil-parody" className="button" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              </div>
            <div className="project-card">
              <h3>HealthEase</h3>
              <p>Hospital Management System</p>
              <div className="tech-stack">
                <span>Vue.js</span>
                <span>Flask</span>
                <span>PostgreSQL</span>
                <span>Redis</span>
                <span>Celery</span>
                <span>Bootstrap CSS</span>
              </div>
              <div className="project-links">
                <span>Publicly available soon</span>
                {/* <a href="https://cetaphilparody.vercel.app/" className="button" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/Shreyas-prog108/cetaphil-parody" className="button" target="_blank" rel="noopener noreferrer">GitHub</a> */}
              </div>
              </div>
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
                <input type="text" id="name" name="user_name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="user_email" placeholder="Your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="submit-button" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'success' && (
                <p className="success-message">Message sent successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className="error-message">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </section>
      </main>
      
      <footer>
        <p>© {new Date().getFullYear()} Shreyas Pandey | Built with Love</p>
        <div className="social-links">
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
  );
};

export default Front;
