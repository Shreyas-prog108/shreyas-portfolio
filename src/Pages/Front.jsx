import '../App.css';
import { FaHome, FaGithub, FaLinkedin,} from "react-icons/fa";
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
    { icon: <FaHome />, link: "#" },
    //{ icon: <PiNotebookDuotone />, link: "#" },
    { icon: <FaGithub />, link: "https://github.com/Shreyas-prog108" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shreyaspandeyy/" },
    { icon: <FaXTwitter />, link: "https://x.com/Shreyas_Pandeyy" },
    { icon: <SiGmail />, link: "mailto:shreyaspandey.kvs@email.com" },
 
  ];

  const skills = [
    "AWS", "GCP", "CI/CD", "DevOps", "Docker", "Kubernetes", "Linux", "GraphQL", "RestAPI",
    "Node.js", "OAuth", "Prisma", "React", "Remix.js", "Next.js", "Vue.js","Flask", "Tailwind CSS", "Bootstrap", "Canva", "Javascript", "Typescript", "C/C++", "Python",
    "Agentic AI", "LLM RAG", "N8n", "Vapi.ai", "Wati.io", "Machine Learning", "Pytorch", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Pydantic",
    "MongoDB", "MySQL", "PostgreSQL", "SQLite", "Kafka","Redis",
    "Git", "GitHub", "GitLab"];
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

    <div className="portfolio">
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
                <p className="output">Portfolio-Website</p>
                <p className="output">Meme Generator App</p>
                <p className="output">Weather-App</p>
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
              <h3>Portfolio Website</h3>
              <p>A personal portfolio website built with React and Vite.</p>
              <div className="tech-stack">
                <span>React</span>
                <span>Vite</span>
                <span>CSS</span>
              </div>
              <div className="project-links">
                <a href="#" className="button">Live Demo</a>
                <a href="https://github.com/Shreyas-prog108/my-portfolio" className="button">GitHub</a>
              </div>
            </div>
            
            <div className="project-card">
              <h3>Meme Generator App</h3>
              <p>A customized meme generator app.</p>
              <div className="tech-stack">
                <span>React</span>
                <span>Bootstrap</span>
                <span>Imgflip API</span>
              </div>
              <div className="project-links">
                <a href="#" className="button">Live Demo</a>
                <a href="https://github.com/Shreyas-prog108/Meme-generator-app" className="button">GitHub</a>
              </div>
            </div>
            
            <div className="project-card">
              <h3>Weather App</h3>
              <p>A weather application that fetches data from a weather API.</p>
              <div className="tech-stack">
                <span>React</span>
                <span>API</span>
                <span>CSS</span>
              </div>
              <div className="project-links">
                <a href="#" className="button">Live Demo</a>
                <a href="https://github.com/Shreyas-prog108/vatavaran" className="button">GitHub</a>
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
