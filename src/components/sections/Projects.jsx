import { useState, useEffect } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';
import projects from '../../data/projects';
import '../../styles/components/projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Get unique tags from all projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  // Filter projects based on selected tag
  useEffect(() => {
    setIsAnimating(true);
    
    // Short delay before filtering to allow animation
    const timer = setTimeout(() => {
      const filtered = filter === 'all' 
        ? projects 
        : projects.filter(project => project.tags.includes(filter));
      
      setFilteredProjects(filtered);
      setIsAnimating(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [filter]);
  
  const handleFilterClick = (tag) => {
    if (tag !== filter) {
      setFilter(tag);
    }
  };
  
  return (
    <AnimatedSection id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Explore some of my recent work and personal projects
        </p>
        
        <div className="projects-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button 
              key={tag}
              className={`filter-btn ${filter === tag ? 'active' : ''}`}
              onClick={() => handleFilterClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className={`projects-grid ${isAnimating ? 'is-animating' : ''}`}>
          {filteredProjects.map(project => (
            <Card
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              imageAlt={`${project.title} project thumbnail`}
              content={project.description}
              tags={project.tags}
              links={project.links}
              className="project-card"
              featured={project.featured}
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && !isAnimating && (
          <div className="no-projects">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p>No projects found with the selected filter.</p>
            <button 
              className="btn btn-outline btn-sm"
              onClick={() => setFilter('all')}
            >
              Show All Projects
            </button>
          </div>
        )}
        
        <div className="projects-cta">
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-icon"
          >
            <span>View More on GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;