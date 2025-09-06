import '../App.css';
import { FaHome, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
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
    "AWS", "GCP", "CI/CD", "DevOps", "Linux", "GraphQL", "RestAPI",
    "Node.js", "Prisma", "React", "Next.js", "Vue.js", "Flask", "Tailwind CSS", "Bootstrap", "Javascript", "Typescript", "C/C++", "Python",
    "Langchain", "Langgraph","RAG", "N8n", "Vapi.ai", "Wati.io", "ML", "Pytorch", "Scikit-learn",
    "MongoDB", "MySQL", "PostgreSQL", "SQLite", "Celery", "Redis",
    "Git", "GitHub", "GitLab", "VectorDB"];
    const scrollToSkills = () => {
      const skillsSection = document.getElementById('skills-section');
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
              <p className="output">Developer | Machine Learning Enthusiast | Student</p>
              <p className="command-prompt" onClick={scrollToSkills} style={{ cursor: 'pointer' }}><span className="prompt">welcome@portfolio:~$</span> cat skills.txt</p>
              <p className="command-prompt" onClick={scrollToProjects} style={{ cursor: 'pointer' }}><span className="prompt">welcome@portfolio:~$</span> ls projects/</p>
              <div className="projects-list">
                <p className="output">Envilo - Secure Environment Variables and Secrets Management Platform</p>
                <p className="output">Citecrawler - AI Powered Comprehensive Research Paper Searching Platform</p>
                <p className="output">Parkpro - A Parking management Application</p>
                <p className="output">Doxtract - PDF, DOCX, TXT to JSON Converter</p>
                <p className="output">Cetaphil Parody - UI Practice project</p>
                <p className="output">Data Analyst Agent - AI Powered Data Analysis Agent</p>
                <p className="output">Coffee Roasting Neural Network Algorithm</p>
              </div>
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
</section>
        <section id="projects-section" className="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Citecrawler</h3>
              <p>AI Powered Comprehensive Research Paper Searching Platform</p>
              <div className="tech-stack">
                <span>Next.js</span>
                <span>FastAPI</span>
                <span>VectorDB</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shreyas-prog108/citecrawler" className="button">Live Demo</a>
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
                <a href="https://github.com/Shreyas-prog108/envilo" className="button">Live Demo</a>
                <a href="https://github.com/Shreyas-prog108/envilo" className="button">GitHub</a>
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
                <a href="https://parkpro-backend.onrender.com/" className="button">Live Demo</a>
                <a href="https://github.com/Shreyas-prog108/parkpro" className="button">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <h3>Doxtract</h3>
              <p>PDF, DOCX, TXT to JSON Converter</p>
              <div className="tech-stack">
                <span>FastAPI</span>
                <span>Javascript</span>
              </div>
              <div className="project-links">
                <a href="https://doxtract.vercel.app/" className="button">Live Demo</a>
                <a href="https://github.com/Shreyas-prog108/doxtract" className="button">GitHub</a>
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
                <a href="https://cetaphilparody.vercel.app/" className="button">Live Demo</a>
                <a href="https://github.com/Shreyas-prog108/cetaphil-parody" className="button">GitHub</a>
              </div>
              </div>
            <div className="project-card">
              <h3>Data Analyst Agent</h3>
              <p>AI Powered Data Analysis Agent</p>
              <div className="tech-stack">
                <span>FastAPI</span>
                <span>MongoDB</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="https://tds-data-analyst.up.railway.app/" className="button">Live Demo</a>
                <a href="https://github.com/Shreyas-prog108/data-analysis-agent" className="button">GitHub</a>
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
                <h4>Publicly available soon</h4>
                {/* <a href="https://tds-data-analyst.up.railway.app/" className="button">Live Demo</a>
                <a href="https://github.com/23f3001837/tds-data-analyst" className="button">GitHub</a> */}
              </div>
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
