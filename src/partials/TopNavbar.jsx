import React, { useEffect, useState } from "react";
// Components
import Sidebar from "./Sidebar";
import Backdrop from "../components/Elements/Backdrop";
// Assets
import LogoIcon from "../assets/svg/Logo.svg";
import BurgerIcon from "../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <nav className={`flex items-center justify-center w-full fixed top-0 left-0 z-50 ${y > 100 ? "h-16" : "h-20"} bg-white`}>
        <div className="container flex items-center justify-between h-full">
          <div className="flex items-center">
            <a href="#home" className="flex items-center cursor-pointer">
            <img src={LogoIcon} alt="Logo" className="h-[6rem] w-[6rem]"/>
            </a>
          </div>
          <button className="outline-none border-0 bg-transparent h-full px-4 md:hidden" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </button>
          <ul className="hidden md:flex space-x-4">
            <li className="font-semibold text-base cursor-pointer">
              <a href="#home" className="py-2 px-4 hover:bg-gray-200 rounded">Home</a>
            </li>
            <li className="font-semibold text-base cursor-pointer">
              <a href="#services" className="py-2 px-4 hover:bg-gray-200 rounded">Services</a>
            </li>
            <li className="font-semibold text-base cursor-pointer">
              <a href="#projects" className="py-2 px-4 hover:bg-gray-200 rounded">Projects</a>
            </li>
            <li className="font-semibold text-base cursor-pointer">
              <a href="#blog" className="py-2 px-4 hover:bg-gray-200 rounded">Blog</a>
            </li>
            <li className="font-semibold text-base cursor-pointer">
              <a href="#pricing" className="py-2 px-4 hover:bg-gray-200 rounded">Pricing</a>
            </li>
            <li className="font-semibold text-base cursor-pointer">
              <a href="#contact" className="py-2 px-4 hover:bg-gray-200 rounded">Contact</a>
            </li>
          </ul>
          <ul className="hidden md:flex items-center space-x-4">
            <li className="font-semibold text-base cursor-pointer">
              <a href="/login" className="py-2 pr-8">Log in</a>
            </li>
            <li className="font-semibold text-base cursor-pointer">
              <a href="/signup" className="bg-light rounded-lg py-2 px-4">Get Started</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
