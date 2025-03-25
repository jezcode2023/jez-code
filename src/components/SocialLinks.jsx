import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/jezreel-ortiz/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Facebook <FaFacebook size={30} />
        </>
      ),
      href: "http://facebook.com/jzrlortz",
    },
    {
      id: 3,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/jzrl.ortz",
    },
    {
      id: 4,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "http://twitter.com",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 hover:bg-black  font-bold text-white
            bg-blue-900 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-gray"
            >
              {child}
            </a>
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default SocialLinks;