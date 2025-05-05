import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import { ThemeContext } from '../../context/ThemeContext';
import '../../styles/components/navbar.css';

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const { isDarkMode } = useContext(ThemeContext);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background when scrolled
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'experience', 'projects', 'blog', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        }) || 'home';
        
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);
  
  // Set active section based on hash
  useEffect(() => {
    if (location.hash) {
      setActiveSection(location.hash.substring(1));
    } else if (location.pathname === '/blog') {
      setActiveSection('blog');
    } else if (location.pathname.includes('/blog/')) {
      setActiveSection('blog');
    } else if (location.pathname === '/') {
      setActiveSection('home');
    }
  }, [location]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(sectionId);
    } else if (location.pathname === '/') {
      // If we're on the home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise, go to the home page with the hash
      window.location.href = `/#${sectionId}`;
    }
    closeMenu();
    setActiveSection(sectionId);
  };
  
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog', isLink: true, to: '/blog' },
    { id: 'contact', label: 'Contact' }
  ];
  
  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container navbar-container">
        <a href="/" className="navbar-logo">
          <span className="logo-text">Princess Allanah</span>
          <span className="logo-dot"></span>
        </a>
        
        <div 
          className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="navbar-toggle-icon"></span>
        </div>
        
        <nav className={`navbar-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.id}>
                {link.isLink ? (
                  <Link 
                    to={link.to}
                    className={activeSection === link.id ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => handleSectionClick(e, link.id)}
                    className={activeSection === link.id ? 'active' : ''}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          
          <div className="navbar-actions">

            <ThemeToggle />
          </div>
        </nav>
      </div>
      
      {/* Progress indicator for scroll */}
      <div className="navbar-progress">
        <div 
          className="navbar-progress-bar" 
          style={{ 
            width: `${Math.min(
              (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 
              100
            )}%` 
          }}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;