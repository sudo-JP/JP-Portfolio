//import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'; 
import AboutMe from './components/AboutMe/AboutMe';
import Experiences from './components/Experiences/Experiences'


function App() {
  return (

    <div className="bg-[#fffaf3] min-h-screen text-[#575279]">
      <Navbar />
      <Hero />
      <AboutMe />
      <Experiences />
      <main>
        {/* other sections */}
      </main>
    </div>
  );
}

export default App;

