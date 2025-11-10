import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'; 


function App() {
  return (

    <div className="bg-[#fffaf3] min-h-screen text-[#575279]">
      <Header />
      <Hero />
      <main>
        {/* other sections */}
      </main>
    </div>
  );
}

export default App;

