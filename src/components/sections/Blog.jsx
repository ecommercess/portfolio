import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';
import blogPosts from '../../data/blogPosts';
import '../../styles/components/blog.css';

const Blog = ({ limit = 3, showMore = true }) => {
  const [displayCount, setDisplayCount] = useState(limit);
  
  const handleShowMore = () => {
    setDisplayCount(prevCount => prevCount + 3);
  };
  
  // Display limited number of posts on home page
  const displayedPosts = blogPosts.slice(0, displayCount);
  
  return (
    <AnimatedSection id="blog" className="blog-section">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        
        <div className="blog-grid">
          {displayedPosts.map(post => (
            <Card
              key={post.id}
              title={post.title}
              subtitle={post.subtitle}
              image={post.coverImage}
              imageAlt={`${post.title} cover image`}
              content={post.excerpt}
              tags={post.tags}
              links={[
                {
                  text: 'Read More',
                  url: `/blog/${post.id}`,
                  external: false,
                  primary: true
                }
              ]}
              className="blog-card"
              onClick={() => window.location.href = `/blog/${post.id}`}
            />
          ))}
        </div>
        
        {showMore && displayCount < blogPosts.length && (
          <div className="blog-more">
            <button className="btn" onClick={handleShowMore}>
              Load More Posts
            </button>
          </div>
        )}
        
        <div className="blog-all">
          <Link to="/blog" className="btn btn-outline">
            View All Posts
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Blog;