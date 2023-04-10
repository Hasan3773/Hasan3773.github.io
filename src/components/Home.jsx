import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import whale from '../assets/Whale.mp4';

const Home = () => {
  return (
    <div className="Home">
      <video src={whale} autoPlay loop muted />
      
      <div className="Description">
      <div className="pl-[20px] max-w-[1080] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl font-bold sm:text-3xl text-[#040404]">Hello :D my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#000000]">
          Hasan Tahir
        </h1>
        <h2 className="text-xl sm:text-4xl font-bold text-[#33689b]">
          <div className="h-20 z-10">
            <Typewriter
              options={{
                strings: [
                  "I'm an aspiring Mechatronics Engineer & Entreperneur",
                  "I'm interested in embedded software development",
                  "Looking to expand my skills in control system engineering",
                  "I enjoy working in the bridge between software & hardware",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </div>
        </h2>
        <p className="text-[#000000] text-sm sm:text-3xl max-w-[850px]">
          I'm a mechatronics engineering student at the University of Waterloo
          currently looking for a co-op position for Fall 2023. Please take a look 
          at some of my favourite personal projects!
        </p>
        <div className="py-4">
          <Link to='/Projects' smooth={true} duration={1000}>
            <button className="p-[10px] text-[#000000] hover:bg-[#528df9] text-2xl border-[1px] px-4 py-1 flex items-center rounded-xl">
              My projects 
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 '/>
              </span>
            </button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;