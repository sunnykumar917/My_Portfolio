import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the individual sections
import Hero from './Sections/Hero';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Skills from './Sections/Skills';
import Contact from './Sections/Contact';

import Layout from './Components/Layout/Layout'; // Layout component wrapping the sections

const App: React.FC = () => {
  // MUI Theme customization (optional)
  const theme = createTheme({
    palette: {
      primary: {
        main: '#8e24aa',
      },
      secondary: {
        main: '#ce93d8',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Global reset */}

      <Router>
        {/* Wrap the sections inside Layout */}
        <Layout>
          <Routes>
            {/* Hero Section - Root Route */}
            <Route path="/hero" element={<Hero />} />
            
            {/* About Section */}
            <Route path="/about" element={<About />} />

            {/* Projects Section */}
            <Route path="/projects" element={<Projects />} />
            
            {/* Skills Section */}
            <Route path="/skills" element={<Skills />} />
            
            {/* Contact Section */}
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* Anchor links for smooth scrolling */}
          {/* Remove this redundant section */}
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
    </ThemeProvider>
  );
};

export default App;
