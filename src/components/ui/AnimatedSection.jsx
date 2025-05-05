import { useRef, useEffect, useState } from 'react';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-in-section', 
  threshold = 0.1,
  delay = 0,
  id = ''
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const currentRef = sectionRef.current;
    
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section comes into view
        if (entry.isIntersecting && !isVisible) {
          // Add a small delay if specified
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            setIsVisible(true);
          }
        }
      },
      {
        root: null, // Use the viewport
        rootMargin: '0px',
        threshold: threshold // Trigger when 10% of the element is visible
      }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay, isVisible]);
  
  return (
    <section 
      ref={sectionRef} 
      className={`${animation} ${isVisible ? 'is-visible' : ''} ${className}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;