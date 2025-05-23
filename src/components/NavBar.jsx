import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import jez from "../assets/logo11.png"; 

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      
      {/* Logo Section */}
      <div>
        <ScrollLink to="home" smooth duration={700} spy={true} offset={-70}>
          <img
            src={jez}
            alt="Logo"
            className="h-10 w-auto cursor-pointer hover:scale-105 duration-500"
          />
        </ScrollLink>
      </div>

      {/* Navigation Links Centered */}
      <ul className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-100 text-2xl">
            <ScrollLink
              to={link}
              smooth
              duration={700}
              spy={true}
              activeClass="active"
              className="hover:scale-105 duration-200 inline-block pb-1 transition-all"
            >
              {link}
            </ScrollLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="hover:scale-105 duration-200 px-4 cursor-pointer capitalize py-6 text-4xl">
              <ScrollLink
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                spy={true}
                activeClass="active"
                className="inline-block pb-1 transition-all"
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
