import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Correct import for react-scroll
import jez from "../assets/ortz.jpg";
import { IoMdArrowDropright } from "react-icons/io";

function Home() {
  return (
    <div name="home" className="h-screen w-full bg-black text-white flex flex-col md:flex-row pb-10 md:pb-0">
      {/* Left Section (Image) */}
      <div className="flex-1 flex items-center justify-center w-full h-1/2 md:h-full">
        <img
          src={jez}
          alt="my profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section (Text and Button) */}
      <div className="flex-1 flex flex-col justify-center text-left p-8 md:pl-8 md:h-full">
        <h2 className="text-4xl md:text-5xl mb-4">Hi! I'm Jez</h2>
        <h1 className="text-lg md:text-7xl text-beige mb-6">
          Freelance Frontend Web Developer
        </h1>

        <div className="flex justify-start items-center">
          <ScrollLink
            to="contact" // Section to scroll to
            smooth={true} // Smooth scroll animation
            duration={700} // Duration of scroll in ms
            spy={true} // Highlights the link when in the viewport
            offset={-70} // Offset for positioning
            className="h-16 cursor-pointer hover:scale-105 duration-500"
          >
            
          </ScrollLink>
          <ScrollLink
            to="contact" // Section to scroll to
            smooth={true} // Smooth scroll animation
            duration={700} // Duration of scroll in ms
            spy={true} // Highlights the link when in the viewport
            offset={-70} // Offset for positioning
          >
            <button className="group text-black font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-cream cursor-pointer">
              Contact
              <span className="group-hover:rotate-90 duration-300">
                <IoMdArrowDropright size={20} className="ml-3" />
              </span>
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
