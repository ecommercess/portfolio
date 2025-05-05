import { useState, useEffect } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import experiences from '../../data/experiences';
import '../../styles/components/experience.css';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleExperienceClick = (id) => {
    if (id !== activeExperience) {
      setIsAnimating(true);
      setActiveExperience(id);
      
      // Reset animation state after animation completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  };
  
  // Find the active experience
  const selectedExperience = experiences.find(exp => exp.id === activeExperience);
  
  return (
    <AnimatedSection id="experience" className="experience-section">
      <div className="experience-background">
        <div className="experience-shape experience-shape-1"></div>
        <div className="experience-shape experience-shape-2"></div>
      </div>
      
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        <p className="section-subtitle">
          Professional journey and notable career milestones
        </p>
        
        <div className="experience-container">
          <div className="experience-tabs">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                className={`experience-tab ${exp.id === activeExperience ? 'active' : ''}`}
                onClick={() => handleExperienceClick(exp.id)}
              >
                <span className="experience-company">{exp.company}</span>
                <span className="experience-role">{exp.title}</span>
                <span className="experience-duration">{exp.startDate} — {exp.endDate}</span>
              </button>
            ))}
          </div>
          
          <div className="experience-content">
            {selectedExperience && (
              <div className={`experience-details ${isAnimating ? 'is-animating' : ''}`}>
                <div className="experience-header">
                  <div className="experience-title-container">
                    <h3 className="experience-title">
                      {selectedExperience.title}
                    </h3>
                    <span className="experience-company-inline">
                      @ {selectedExperience.company}
                    </span>
                  </div>
                  
                  <div className="experience-meta">
                    <span className="experience-date">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {selectedExperience.startDate} — {selectedExperience.endDate}
                    </span>
                    <span className="experience-location">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {selectedExperience.location}
                    </span>
                  </div>
                </div>
                
                <p className="experience-description">{selectedExperience.description}</p>
                
                <div className="experience-responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {selectedExperience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="responsibility-item">
                        <span className="bullet"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="experience-tech-list">
                    {selectedExperience.technologies.map((tech, index) => (
                      <span key={index} className="experience-tech">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="experience-cta">
          <a 
            href="/assets/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-icon"
          >
            <span>View Full Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;