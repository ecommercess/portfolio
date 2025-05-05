import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import blogPosts from '../data/blogPosts';
import '../styles/components/blog.css';

const BlogPage = () => {
  const [filter, setFilter] = useState('all');
  
  // Get unique tags from all blog posts
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  
  // Filter blog posts based on selected tag
  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(filter));
  
  return (
    <>
      <Helmet>
        <title>Blog | Princess Allanah Ginon</title>
        <meta 
          name="description" 
          content="Read the latest articles about web development, design, and technology from Princess Allanah Ginon." 
        />
      </Helmet>
      
      <div className="page-header">
        <div className="container">
          <h1>My Blog</h1>
          <p>Thoughts, stories, and ideas about web development and technology</p>
        </div>
      </div>
      
      <AnimatedSection className="blog-section">
        <div className="container">
          <div className="blog-filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            
            {allTags.map(tag => (
              <button 
                key={tag}
                className={`filter-btn ${filter === tag ? 'active' : ''}`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          
          <div className="blog-grid">
            {filteredPosts.map(post => (
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
          
          {filteredPosts.length === 0 && (
            <p className="no-posts">No blog posts found with the selected tag.</p>
          )}
        </div>
      </AnimatedSection>
    </>
  );
};

export default BlogPage;