import React from "react";
import { 
  SiHtml5, SiCss3, SiTailwindcss, SiReact, SiJavascript, SiFigma, 
  SiFlutter, SiNextdotjs, SiWordpress, SiTrello, SiAsana, SiMiro, 
  SiElementor, SiWebflow, SiFramer, SiBootstrap 
} from "react-icons/si";

const Experience = () => {
  const techs = [
    { id: 1, icon: <SiHtml5 />, title: "HTML" },
    { id: 2, icon: <SiCss3 />, title: "CSS" },
    { id: 3, icon: <SiTailwindcss />, title: "Tailwind" },
    { id: 4, icon: <SiReact />, title: "React" },
    { id: 5, icon: <SiJavascript />, title: "JavaScript" },
    { id: 6, icon: <SiFigma />, title: "Figma" },
    { id: 7, icon: <SiFlutter />, title: "Flutter" },
    { id: 8, icon: <SiNextdotjs />, title: "Next.js" },
    { id: 9, icon: <SiWordpress />, title: "WordPress" },
    { id: 10, icon: <SiTrello />, title: "Trello" },
    { id: 11, icon: <SiAsana />, title: "Asana" },
    { id: 12, icon: <SiMiro />, title: "Miro" },
    { id: 13, icon: <SiElementor />, title: "Elementor" },
    { id: 14, icon: <SiWebflow />, title: "Webflow" },
    { id: 15, icon: <SiFramer />, title: "Framer" },
    { id: 16, icon: <SiBootstrap />, title: "Bootstrap" },
  ];

  return (
    <div name="experience" className="w-full bg-gray text-black py-10 overflow-hidden">
      <div className="text-center">
        <p className="text-3xl font-bold border-b-2 border-gray-500 inline-block">Experience</p>
        <p className="mt-5 text-xl">These are the toolkits I've worked with:</p>
      </div>

      {/* Marquee Effect */}
      <div className="relative w-full overflow-hidden mt-10">
        <div className="flex space-x-10 animate-marquee">
          {[...techs, ...techs].map(({ id, icon, title }, index) => (
            <div key={index} className="flex-shrink-0 w-40 text-center">
              <div className="text-6xl text-black mx-auto">{icon}</div>
              <p className="mt-2 text-lg font-bold text-black">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
