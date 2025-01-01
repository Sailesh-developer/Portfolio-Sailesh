import Title from './components/Title';
import './App.css';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";




const PageWrapper = ({ children }) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}      // Start invisible
  animate={{ opacity: 1 }}      // Fade in
  exit={{ opacity: 1 }}         // Fade out
  transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<PageWrapper><Title /></PageWrapper>}
        />
        <Route
          path="/Skills"
          element={<PageWrapper><Skills /></PageWrapper>}
        />
        <Route
          path="/Aboutme"
          element={<PageWrapper><AboutMe /></PageWrapper>}
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {

  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };


  return (
    // <div className="App">
    //   <div id="section-1">
    //  <Title/>
    //  </div>
    //  <div id="section-2">
    //   <Skills/>
    //  </div>
    //  <div id="section-3">
    //   <AboutMe/>
    //  </div>
    // </div>


    <Router> 
    <AnimatedRoutes />
  </Router>

  );
}

export default App;
