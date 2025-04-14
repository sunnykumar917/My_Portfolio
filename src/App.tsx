import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Skills from './Sections/Skills';
import Contact from './Sections/Contact';
import Layout from './Components/Layout/Layout'; 

const App: React.FC = () => {
  
  return (
    
      <Router>
        <Layout>
          <Routes>
            
            <Route path="/hero" element={<Hero />} />     
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
           <div id="hero">
            <Hero />
          </div> 
          <div id="about">
            <About /> 
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </Layout>
      </Router>
   
  );
};

export default App;
