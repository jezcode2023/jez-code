import React from 'react';

const About = () => {
  return (
    <div 
      name="about" 
      className="w-full h-screen bg-gray"
    >
      <div 
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
      >
        <div className="mt-20 pb-8"> 
          <h1 className="text-center text-5xl font-bold border-b-0 border-gray-500 inline-block">
            About
          </h1>
          <p className="text-gray-900 text-2xl mt-8"> {/* Adjusted margin-top */}
          Hi! I'm Jezreel Ortiz, a freelance Frontend Web Developer passionate about creating clean, responsive, and user-friendly web applications. With experience in modern web technologies, I specialize in building seamless digital experiences that blend functionality with great design.

I constantly explore new tools and frameworks to enhance my skills and stay updated with the latest industry trends. Whether it's developing intuitive UI components or optimizing website performance, I enjoy turning ideas into reality through code.


          </p>
          <br />
          <p className="text-2xl mt-8"> {/* Adjusted margin-top */}
          Check below for the tools I am proficient with!</p>
          <br />
          
        </div>      
      </div>
    </div>
  );
};

export default About;

