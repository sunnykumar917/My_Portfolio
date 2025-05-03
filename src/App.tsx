import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import AboutDetailed from './Pages/About'; // Full About page
import Home from './Pages/Home'; // Landing page with all sections
import ProjectPage from './Pages/ProjectPage';
import  SkillsPage from './Pages/SkillsPage'; // Skills page
import Contact from './Pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Landing page with all sections */}
        <Route path="/" element={<Home/>} />
        
        {/* Full detailed About page */}
        <Route path="/about-detailed" element={<Layout><AboutDetailed /></Layout>} />
        <Route path="/projectpage" element={<Layout><ProjectPage /></Layout>} />
        <Route path="/SkillsPage" element={<Layout><SkillsPage/></Layout>} />
        <Route path="/contact" element={<Layout><Contact/></Layout>} />


      </Routes>
    </Router>
  );
};

export default App;
