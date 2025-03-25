import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGoogledrive, SiFigma } from "react-icons/si";

const Portfolio = () => {
  const links = [
    { id: 1, icon: <FaLinkedin />, title: "LinkedIn", url: "https://www.linkedin.com/in/jezreel-ortiz/" },
    { id: 2, icon: <SiGoogledrive />, title: "Google Drive", url: "https://drive.google.com/drive/folders/yourdrive" },
    { id: 3, icon: <FaGithub />, title: "GitHub", url: "https://github.com/yourprofile" },
    { id: 4, icon: <SiFigma />, title: "Figma", url: "https://www.figma.com/yourprofile" },
  ];

  return (
    <div name="portfolio" className="w-full h-screen bg-black text-white flex justify-center items-center px-8">
      <div className="max-w-screen-lg w-full">
        <div className="text-center mb-12">
          <p className="text-5xl font-bold border-b-4 border-gray-500 inline-block pb-4 transition-all duration-300 hover:scale-105">
            Portfolio
          </p>
          <p className="mt-8 text-2xl transition-all duration-300 hover:text-gray-300">
            You can check my portfolio here:
          </p>
        </div>

        {/* Icon Links */}
        <div className="flex justify-center items-center gap-12 mt-12">
          {links.map(({ id, icon, title, url }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-6xl hover:text-blue-400 hover:scale-110 transition-all duration-300"
              title={title}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
