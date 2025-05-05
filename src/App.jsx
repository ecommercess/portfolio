import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import Head from './components/Head';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="preloader">
        <Head
          title="Loading..."
          description="Portfolio website of Princess Allanah Ginon"
        />
        <div className="preloader-content">
          <div className="preloader-spinner"></div>
          <h2>Princess Allanah</h2>
        </div>
      </div>
    );
  }

  return (
      <Router>
        <Head
          title="Princess Allanah Ginon | System Analyst & Software Engineer"
          description="Portfolio website of Princess Allanah Ginon, a System Analyst and Software Engineer specializing in web development, system design, and digital solutions."
        />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
  );
};

export default App;
