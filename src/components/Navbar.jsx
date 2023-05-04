import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import logo from '../assets/HasanLogo.png';
import {Link} from 'react-router-dom';
import {Link as LinkRoll} from 'react-scroll'


const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  function handleClick() {
    setNavigation(!navigation);
  }
  return (
    <div className="navbar">
      <div className='fixed w-full h-[80p] flex justify-between items-center px-4 font-bold text-2xl text-[#FFBD59]'>
          <div>
            <Link to ="/Home"><img src ={logo} alt='Logo Image' style={{width: '100px'}} /></Link>
          </div>

          {/* Menu */}
          <ul className='hidden md:flex'>
          <li className="hover:text-[#D45550]">
          <Link to='Home'smooth={true} duration={500}>
            Home
          </Link>
          </li>
         
          <li className="hover:text-[#D45550]">
          <Link to='/Projects' smooth={true} duration={500}>
            Projects 
          </Link>
          </li>
          <li style={{ display: "inline-block" }}>
            <a
              className="hover:text-[#D45550] "
              href="https://www.linkedin.com/in/hasan3773/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", width: 50, height: 50,  padding: 0 }}
            >
              {" "}
              <FaLinkedin size={30} />
            </a>
          <li style={{ display: "inline-block" }}>
            <a
              className="hover:text-[#D45550] "
              href="https://github.com/Hasan3773"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", position: "relative",   height: 50,  padding: 0 }}
            >
              {" "}
              <FaGithub size={30} />
            </a>
          </li>
          </li>
          </ul>

        {/* Hamburger */} 
        <div onClick={handleClick} className="md:hidden z-30 pr-[5px]">
          {!navigation ? <FaBars /> : <FaTimes />}
        </div>

          {/* Mobile Menu */}
          <ul
          className={
            !navigation
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#011627] flex flex-col justify-center items-center z-20"
          }
        >
          <div></div>
          <li className="hover:text-[#D45550] text-4xl p-[15px]"><Link to="Home" onClick={handleClick} >Home</Link></li>
          <li className="hover:text-[#D45550] text-4xl p-[15px]"><Link to="About" onClick={handleClick} >About</Link></li>
          <li className="hover:text-[#D45550] text-4xl p-[15px]"><Link to="Projects" onClick={handleClick} >Projects</Link></li>
          <li className="hover:text-[#D45550] text-4xl p-[15px] pb-[50px]">
          </li>
          <div className="flex">
            <li>
              <a
                className="hover:text-[#D45550] flex justify-between items-center w-full"
                href="https://www.linkedin.com/in/hasan3773/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaLinkedin size={40} />
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#D45550] flex justify-between items-center w-full"
                href="https://github.com/Hasan3773"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaGithub size={40} />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;