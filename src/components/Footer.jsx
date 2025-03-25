import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Side: Brand Name */}
        <div className="text-lg font-bold">Jez.Code</div>

        {/* Center: Navigation Links (Scroll to Sections) */}
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <ScrollLink to="home" smooth duration={700} spy={true} offset={-70} className="cursor-pointer hover:text-gray-400 transition">
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth duration={700} spy={true} offset={-70} className="cursor-pointer hover:text-gray-400 transition">
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="portfolio" smooth duration={700} spy={true} offset={-70} className="cursor-pointer hover:text-gray-400 transition">
              Portfolio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth duration={700} spy={true} offset={-70} className="cursor-pointer hover:text-gray-400 transition">
              Contact
            </ScrollLink>
          </li>
        </ul>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/jezreel-ortiz/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="http://facebook.com/jzrlortz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/jzrl.ortz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaInstagram size={24} />
          </a>
          <a href="http://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="text-center text-sm text-gray-400 mt-4">
        © {new Date().getFullYear()} Jez.Code. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
