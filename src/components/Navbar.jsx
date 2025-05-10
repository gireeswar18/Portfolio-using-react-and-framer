import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "@icons-pack/react-simple-icons";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  const gotoLinkedIn = () => {
    window.open("https://www.linkedin.com/in/gireeswarcp18/", "_blank", "noopener,noreferrer");
  }
  const gotoGitHub = () => {
    window.open("https://github.com/gireeswar18", "_blank", "noopener,noreferrer");
  }
  // const gotoLeetCode = () => {
  //   window.open("https://leetcode.com/u/Gireeswar18/", "_blank", "noopener,noreferrer");
  // }

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Gireeswar
      </a>

      <ul className="hidden md:flex gap-10">
        <li>
          <a
            href="#home"
            className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#tech"
            className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300"
          >
            Tech
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300"
          >
            Contact
          </a>
        </li>
      </ul>

      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-white opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100" onClick={gotoLinkedIn} title="LinkedIn">
          <BsLinkedin />
        </li>
        <li className="cursor-pointer text-white opacity-70 transition-all duration-300 hover:text-black-500 hover:opacity-100" title="GitHub" onClick={gotoGitHub}>
          <BsGithub />
        </li>
        {/* <li className="cursor-pointer text-white opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100" onClick={gotoLeetCode}>
          <SiLeetcode size={16} />
        </li> */}
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div
          className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 md:hidden"
        >
          <ul className="flex flex-col gap-8">
            <li>
              <a
                href="#home"
                className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#tech"
                className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300"
              >
                Tech
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-white opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100" onClick={gotoLinkedIn}>
              <BsLinkedin />
            </li>
            <li className="cursor-pointer text-white opacity-70 transition-all duration-300 hover:text-black-500 hover:opacity-100" onClick={gotoGitHub}>
              <BsGithub />
            </li>
            {/* <li className="cursor-pointer text-white opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
              <SiLeetcode size={16} />
            </li> */}
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
