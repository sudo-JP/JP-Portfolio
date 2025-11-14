//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './index.css';
import Navbar from './components/Navbar/Navbar.tsx';
import Hero from './components/Hero/Hero.tsx'; 
import AboutMe from './components/AboutMe/AboutMe.tsx';
import Experiences from './components/Experiences/Experiences.tsx';
import Projects from './components/Projects/Projects.tsx';


function App() {
console.log('[DEBUG] Rendering App');
  return (

    <div className="bg-[#fffaf3] min-h-screen text-[#575279]">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experiences />
      <Projects />

      <main>
        {/* other sections */}
      </main>
    </div>
  );
}

export default App;

