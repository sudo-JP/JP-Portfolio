import './index.css';
import Navbar from './components/Navbar/Navbar.tsx';
import Hero from './components/Hero/Hero.tsx'; 
import AboutMe from './components/AboutMe/AboutMe.tsx';
import Experiences from './components/Experiences/Experiences.tsx';
import Projects from './components/Projects/Projects.tsx';
import Footer from './components/Footer/Footer.tsx';


function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-cream text-ink transition-colors duration-200">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Experiences />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
