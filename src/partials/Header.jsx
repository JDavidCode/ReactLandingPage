import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Backdrop from "../components/Backdrop";
import LogoIcon from "../assets/svg/Logo.svg";
import BurgerIcon from "../assets/svg/BurgerIcon";

const sectionStyles = {
  home: "border-sky-500",      // Borde rojo
  services: "border-purple-500", // Borde verde
  projects: "border-blue-500",  // Borde azul
  blog: "border-yellow-500",     // Borde amarillo
  pricing: "border-green-500",  // Borde púrpura
  contact: "border-orange-500",   // Borde naranja
};

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY);
      updateActiveSection();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const updateActiveSection = () => {
    const sections = ["home", "services", "projects", "blog", "pricing", "contact","faq","footer"];

    sections.forEach((section) => {
      const sectionElement = document.querySelector(`#${section}`);
      if (sectionElement) {
        const { top, bottom } = sectionElement.getBoundingClientRect();
        if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
          setActiveSection(`#${section}`);
        }
      }
    });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    const rect = targetElement.getBoundingClientRect();
    const offset = window.scrollY + rect.top;

    const adjustedOffset = y > offset ? offset - 20 : offset + 20;

    window.scrollTo({
      top: adjustedOffset,
      behavior: "smooth",
    });
  };

  return (
    <>
    <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
    <nav className={`flex items-center justify-center shadow-sm w-full fixed top-0 left-0 z-50 ${y > 80 ? "h-12" : "h-16"} bg-slate-800  font-mono transition-all ease-out`}>
      <div className="container flex items-center justify-between h-full">
        <div className="flex items-center">
          <a href="#home" className="flex items-center cursor-pointer">
            <img src={LogoIcon} alt="Logo" className="h-16 w-16" />
          </a>
        </div>
        <button className="outline-none border-0 bg-transparent h-full px-4 md:hidden" onClick={() => toggleSidebar(!sidebarOpen)}>
          <BurgerIcon />
        </button>
        <ul className="hidden md:flex space-x-2">
          {["home", "services", "projects", "blog", "pricing", "contact"].map((section) => (
            <li key={section} className="relative font-semibold text-base cursor-pointer h-full">
              <a
                href={`#${section}`}
                className={`px-4 ${y > 80 ? "py-3" : "py-5"} block ${activeSection === `#${section}` && !["faq", "footer"].includes(section) ? `border-b-2 ${sectionStyles[section]}` : 'border-b-2 border-transparent'} rounded transition-all duration-200`}
                onClick={(e) => handleNavClick(e, `#${section}`)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
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
