import React from 'react'
import whale2 from '../assets/Whale2.mp4';

const About = () => {
  return (
    <div className="About"> 
    <video src={whale2} autoPlay loop muted />
  
    <div className="Description2">
    <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1800px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='md:text-right pb-8 pl-4'>
                    <p className='text-7xl font-bold inline border-b-4 border-[#33689b]'>About</p>
                </div>
                </div>
                <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-6xl font-bold'>
                  <p>Hi, I'm Hasan, nice to meet you, take a look around!</p>
                </div>
                <div className='sm:text-right text-xl font-bold'>
                  <p>I am passionate about blah blah, my hobies are blah blah, and i dream to blah blah. I am passionate about blah blah, my hobies are blah blah, and i dream to blah blah. I am passionate about blah blah, my hobies are blah blah, and i dream to blah blah</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About