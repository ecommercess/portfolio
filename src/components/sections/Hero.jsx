import { useEffect, useRef } from 'react';
import '../../styles/components/hero.css';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const backgroundShapeRef = useRef(null);
  
  useEffect(() => {
    // Add animation classes after component mounts
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    const image = imageRef.current;
    const shape = backgroundShapeRef.current;
    
    if (title && subtitle && cta && image && shape) {
      setTimeout(() => {
        shape.classList.add('animate-fade-in');
      }, 100);
      
      setTimeout(() => {
        title.classList.add('animate-fade-in');
      }, 300);
      
      setTimeout(() => {
        subtitle.classList.add('animate-slide-up');
      }, 600);
      
      setTimeout(() => {
        cta.classList.add('animate-fade-in');
      }, 900);
      
      setTimeout(() => {
        image.classList.add('animate-slide-up');
      }, 800);
    }
  }, []);
  
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div 
          ref={backgroundShapeRef} 
          className="hero-shape hero-shape-1"
        ></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-greeting">Hello, I am</span>
          <h1 ref={titleRef} className="hero-title">
            <span className="text-accent hero-name">Princess Allanah Ginon</span>
          </h1>
          <p ref={subtitleRef} className="hero-subtitle">
            An Enthusiastic <span className="hero-role">System Analyst</span> & <span className="hero-role">Software Engineer</span>
          </p>
          
          <p className="hero-description">
            I create elegant, user-friendly applications and deliver innovative solutions that bridge the gap between business needs and technology.
          </p>
          
          <div ref={ctaRef} className="hero-cta">
            <a href="#about" className="btn btn-icon">
              <span>About Me</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline btn-icon">
              <span>Contact Me</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
          
          <div className="hero-socials">
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div ref={imageRef} className="hero-image">
          <div className="image-wrapper">
            <img src="/hero-profile.jpg" alt="Princess Allanah Ginon" />
            <div className="image-decoration"></div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <a href="#about" className="scroll-arrow animate-bounce">
          <span></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;