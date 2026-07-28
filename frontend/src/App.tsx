import './index.css';
import Navbar from './components/Navbar/Navbar.tsx';
import Hero from './components/Hero/Hero.tsx'; 
import AboutMe from './components/AboutMe/AboutMe.tsx';
import Experiences from './components/Experiences/Experiences.tsx';
import Projects from './components/Projects/Projects.tsx';


function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Experiences />
        <Projects />
      </main>
    </div>
  );
}

export default App;
