import Hero from '../Sections/Hero';
import About from '../Sections/About'; // This is the summary version
import Projects from '../Sections/Projects';
import Skills from '../Sections/Skills';
import Contact from '../Sections/Contact';

const LandingPage: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default LandingPage;
