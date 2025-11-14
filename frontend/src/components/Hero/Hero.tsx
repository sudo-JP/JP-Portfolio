import { useState, useEffect } from 'react';
import portrait from '../../assets/jason-hero.jpg';
import archlinux from '../../assets/arch-hero.png';
import robotics from '../../assets/UTMRobotics.jpg';
import gym from '../../assets/gym-hero.png';
import '../../index.css';

function Hero() {
  const [showFloating, setShowFloating] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Only show floating images if screen width >= 1024px
      setShowFloating(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (

    <section id="jp" className="relative min-h-screen flex justify-center items-center bg-[#faf4ed]">
      {/* Main Portrait */}
      <div className="flex flex-col items-center mt-20 md:mt-32 lg:mt-22 px-4 md:px-8 lg:px-16">
        <img
          src={portrait}
          alt="Jason Phan"
          className="
            h-[350px] md:h-[550px] lg:h-[700px]
            w-[220px] md:w-[320px] lg:w-[370px]
            max-w-[370px]
            mx-auto
            object-cover rounded-lg shadow-xl z-10
          "
        />

      <h1 className="mt-3 text-[2rem] md:text-[4rem] font-bold text-center">
        Hey there, I’m <span className="text-[#eb6f92]">Jason Phan</span>
      </h1>
        <p className="mt-2 mb-12 text-lg md:text-xl font-semibold text-[#575279] text-center">
          I'm a CS student at University of Toronto Mississauga. Check out my projects and what I’m building!
        </p>

      </div>

      {showFloating && (
        <>
          {/* Floating Image 1 (Arch Linux) */}

          <div className="absolute top-[18rem] left-[80rem] w-[400px] md:w-[450px] lg:w-[550px] aspect-[16/9]">
            <img
              src={archlinux}
              alt="Arch Linux"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />

            <p className="absolute bottom-[-2rem] left-0 w-full text-sm md:text-base text-gray-700 font-medium text-center">
              Fun Fact: I got 750+ upvotes on Reddit and 25+ stars on GitHub 
            </p>
          </div>

          {/* Floating Image 2 (Robotics) */}
          <div className="
            absolute top-[10rem] left-[5rem]
            w-[300px] md:w-[350px] lg:w-[400px]
            aspect-[16/9]
            rounded-lg shadow-lg
            transform hover:scale-105 transition-transform duration-300
          ">
            <img
              src={robotics}
              alt="Robotics"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Floating Image 3 (Gym) */}
          <div className="
            absolute top-[34rem] left-[15rem]
            w-[150px] md:w-[180px] lg:w-[200px]
            aspect-[3/4]
            rounded-lg shadow-lg
            transform hover:scale-105 transition-transform duration-300
          ">
            <img
              src={gym}
              alt="Gym"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </>
      )}
    </section>
  );
}

export default Hero;
