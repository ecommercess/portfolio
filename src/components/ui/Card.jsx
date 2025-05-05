import { useState } from 'react';
import '../../styles/components/card.css';

const Card = ({
  title,
  subtitle,
  image,
  imageAlt,
  content,
  links = [],
  tags = [],
  className = '',
  onClick,
  hoverEffect = true,
  featured = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    if (hoverEffect) setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    if (hoverEffect) setIsHovered(false);
  };
  
  return (
    <div 
      className={`card ${isHovered ? 'card-hovered' : ''} ${featured ? 'card-featured' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {featured && (
        <div className="card-badge">
          <span>Featured</span>
        </div>
      )}
      
      {image && (
        <div className="card-image">
          <img src={image} alt={imageAlt || title} />
          {hoverEffect && (
            <div className="card-overlay">
              <div className="card-overlay-content">
                {links.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    className={`btn ${link.primary ? '' : 'btn-outline'} btn-sm`}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : ''}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (link.onClick) link.onClick(e);
                    }}
                  >
                    {link.text}
                    {link.external && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="card-body">
        {tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="card-tag">{tag}</span>
            ))}
          </div>
        )}
        
        <h3 className="card-title">{title}</h3>
        
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        
        {content && <div className="card-content">{content}</div>}
        
        {!hoverEffect && links.length > 0 && (
          <div className="card-links">
            {links.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                className={`card-link ${link.primary ? 'card-link-primary' : ''}`}
                target={link.external ? '_blank' : '_self'}
                rel={link.external ? 'noopener noreferrer' : ''}
                onClick={(e) => {
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick(e);
                  }
                }}
              >
                <span>{link.text}</span>
                {link.external ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;