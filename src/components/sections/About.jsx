import AnimatedSection from '../ui/AnimatedSection';
import '../../styles/components/about.css';

const About = () => {
  // Skills data
  const skills = [
    { 
      category: 'Frontend', 
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Responsive Design'] 
    },
    { 
      category: 'Backend', 
      items: ['Python', 'Django', 'RESTful APIs',  'PHP'] 
    },
    { 
      category: 'Database', 
      items: [ 'MySQL'] 
    },
    { 
      category: 'Tools & Methods', 
      items: ['Git', 'VS Code', 'Figma'] 
    }
  ];

  return (
    <AnimatedSection id="about" className="about-section">
      <div className="about-background">
        <div className="about-shape about-shape-1"></div>
        <div className="about-shape about-shape-2"></div>
      </div>
      
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know me and my professional journey
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Hello! I'm <span className="text-accent">Princess Allanah Ginon</span>, a passionate 
              System Analyst and Software Engineer with a keen eye for detail and a love for creating 
              elegant, user-friendly applications.
            </p>
            
            <p>
              With a background in both system analysis and software development, I bring a unique 
              perspective to projects that bridges the gap between business needs and technical 
              solutions. I enjoy tackling complex problems and transforming them into intuitive user 
              experiences.
            </p>
            
            <p>
              My journey in technology began with a curiosity about how systems work and evolved into a 
              career focused on building efficient, scalable applications. I'm constantly learning and 
              expanding my skillset to stay current with the latest technologies and best practices.
            </p>
            
            <div className="about-highlight">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <h3>Problem Solver</h3>
                <p>I thrive on tackling complex technical challenges and finding elegant solutions.</p>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="18" r="3"></circle>
                    <circle cx="6" cy="6" r="3"></circle>
                    <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                  </svg>
                </div>
                <h3>Strategic Thinker</h3>
                <p>I approach projects with a holistic view, considering both immediate and long-term impacts.</p>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>Team Player</h3>
                <p>I value collaboration and believe the best solutions come from diverse perspectives.</p>
              </div>
            </div>
            
            <p>
              On my free time i enjoy attending church gatherings and meetings, try new resto or diving into a good book on technology and innovation.
            </p>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img src="/about-profile.jpg" alt="Princess Allanah Ginon" />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
        
        <div className="skills-section">
          <h3 className="skills-title">My Technical Skills</h3>
          
          <div className="skills-tabs">
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-group">
                  <h4 className="skill-category">{skillGroup.category}</h4>
                  <div className="skill-list">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} className="skill-item">
                        <span className="skill-name">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="about-cta">
          <a href="/assets/resume.pdf" className="btn btn-icon" target="_blank" rel="noopener noreferrer">
            <span>Download Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;