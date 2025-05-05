import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AnimatedSection from '../components/ui/AnimatedSection';
import blogPosts from '../data/blogPosts';

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(() => {
    // Find the current post
    const postId = parseInt(id);
    const currentPost = blogPosts.find(post => post.id === postId);
    
    if (!currentPost) {
      // If post doesn't exist, redirect to blog page
      navigate('/blog');
      return;
    }
    
    // Set the current post
    setPost(currentPost);
    
    // Find related posts (posts with at least one tag in common)
    if (currentPost) {
      const related = blogPosts
        .filter(p => p.id !== postId && p.tags.some(tag => currentPost.tags.includes(tag)))
        .slice(0, 3);
      setRelatedPosts(related);
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [id, navigate]);
  
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigatePrevNext = (direction) => {
    const currentIndex = blogPosts.findIndex(p => p.id === post.id);
    let newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    
    // If we're at the first or last post, wrap around
    if (newIndex < 0) {
      newIndex = blogPosts.length - 1;
    } else if (newIndex >= blogPosts.length) {
      newIndex = 0;
    }
    
    navigate(`/blog/${blogPosts[newIndex].id}`);
  };
  
  if (!post) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  
  // Find next and previous posts
  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : blogPosts[blogPosts.length - 1];
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : blogPosts[0];
  
  return (
    <>
      <Helmet>
        <title>{post.title} | Princess Allanah Ginon</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <div className="page-header">
        <div className="container">
          <Link to="/blog" className="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
      
      <AnimatedSection className="blog-section">
        <div className="container">
          <article className="blog-detail">
            <header className="blog-header">
              <h1>{post.title}</h1>
              <h2>{post.subtitle}</h2>
              
              <div className="blog-meta">
                <div className="blog-date">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{post.date}</span>
                </div>
                
                <div className="blog-author">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>{post.author}</span>
                </div>
              </div>
              
              <div className="blog-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">{tag}</span>
                ))}
              </div>
            </header>
            
            <img className="blog-cover" src={post.coverImage} alt={post.title} />
            
            <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            
            {post.images && post.images.length > 0 && (
              <div className="blog-gallery">
                {post.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="blog-gallery-item" 
                    onClick={() => openModal(image)}
                  >
                    <img className="blog-gallery-image" src={image.src} alt={image.alt} />
                    <div className="blog-gallery-caption">{image.caption}</div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="blog-navigation">
              <div className="blog-nav-link blog-nav-prev">
                <div className="blog-nav-direction">Previous Post</div>
                <Link to={`/blog/${prevPost.id}`}>{prevPost.title}</Link>
              </div>
              
              <div className="blog-nav-link blog-nav-next">
                <div className="blog-nav-direction">Next Post</div>
                <Link to={`/blog/${nextPost.id}`}>{nextPost.title}</Link>
              </div>
            </div>
          </article>
          
          {relatedPosts.length > 0 && (
            <div className="related-posts">
              <h3>Related Posts</h3>
              <div className="blog-grid">
                {relatedPosts.map(relatedPost => (
                  <div key={relatedPost.id} className="related-post-card">
                    <Link to={`/blog/${relatedPost.id}`} className="related-post-link">
                      <div className="related-post-image">
                        <img src={relatedPost.coverImage} alt={relatedPost.title} />
                      </div>
                      <div className="related-post-content">
                        <h4>{relatedPost.title}</h4>
                        <p>{relatedPost.excerpt.substring(0, 100)}...</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </AnimatedSection>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-caption">{selectedImage.caption}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPostPage;