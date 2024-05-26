import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavClick = () => setNav(!nav);

  const handleLinkClick = () => setNav(false);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center text-gray-300 px-4 bg-[#146C94]">
      <div className="pl-20">
        <Link smooth to="#home" onClick={handleLinkClick}>
        <img
          src={Logo}
          alt="my logo"
          
          className="w-[60px] h-[50px] rounded-[10px]"
        />
        </Link>
      </div>

      {/* Menu */}
      <div className="hidden md:flex gap-4">
        <ul className="flex justify-center items-center text-2xl pr-20">
          <li><Link smooth to="#home" onClick={handleLinkClick}>Home</Link></li>
          <li><Link smooth to="#about" onClick={handleLinkClick}>About</Link></li>
          <li><Link smooth to="#skills" onClick={handleLinkClick}>Skills</Link></li>
          <li><Link smooth to="#work" onClick={handleLinkClick}>Work</Link></li>
          <li><Link smooth to="#contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div onClick={handleNavClick} className="text-2xl md:hidden z-10 pr-20">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl"><Link smooth to="#home" onClick={handleLinkClick}>Home</Link></li>
        <li className="py-6 text-3xl"><Link smooth to="#about" onClick={handleLinkClick}>About</Link></li>
        <li className="py-6 text-3xl"><Link smooth to="#skills" onClick={handleLinkClick}>Skills</Link></li>
        <li className="py-6 text-3xl"><Link smooth to="#work" onClick={handleLinkClick}>Work</Link></li>
        <li className="py-6 text-3xl"><Link smooth to="#contact" onClick={handleLinkClick}>Contact</Link></li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              to="https://www.linkedin.com/in/sujan-budhathoki-127aa1293/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              to="https://www.github.com/Sujan680"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <Link
              className="flex justify-between items-center w-full text-gray-800"
              to="mailto:budhasujan3@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <Link
              className="flex justify-between items-center w-full text-gray-200"
              to="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonFill size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
