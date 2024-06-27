import React, { useState } from "react";
import "./App.css";
import useParticles from "./hooks/useParticles";
import useScrollAndSectionObserver from "./hooks/useScrollAndSectionObserver";
import Header from "./components/header/Header";
import MainContent from "./components/maincontent/MainContent";
import Footer from "./components/footer/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const isScrolled = useScrollAndSectionObserver(setActiveSection);

  useParticles();
  return (
    <div className="App">
      <Header isScrolled={isScrolled} activeSection={activeSection} />
      <MainContent />
      <Footer/>
    </div>
  );
}

export default App;
