import Head from '../components/Head';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Head
        title="Princess Allanah Ginon | System Analyst & Software Engineer"
        description="Portfolio website of Princess Allanah Ginon, a System Analyst and Software Engineer specializing in web development, system design, and digital solutions."
        canonical="https://yourportfolio.com" 
      />
      
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;