import Title from './components/Title';
import './App.css';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';

function App() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="App">
      <div id="section-1">
     <Title scrollToSection = {scrollToSection}/>
     </div>
     <div id="section-2">
      <Skills scrollToSection = {scrollToSection}/>
     </div>
     <div id="section-3">
      <AboutMe scrollToSection = {scrollToSection}/>
     </div>
    </div>
  );
}

export default App;
