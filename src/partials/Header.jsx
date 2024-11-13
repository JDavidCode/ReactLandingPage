import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Backdrop from "../components/Backdrop";
import LogoIcon from "../assets/svg/Logo.svg";
import BurgerIcon from "../assets/svg/BurgerIcon";

const sectionStyles = {
  home: "border-sky-500", // Borde rojo
  services: "border-purple-500", // Borde verde
  projects: "border-blue-500", // Borde azul
  blog: "border-yellow-500", // Borde amarillo
  pricing: "border-green-500", // Borde púrpura
  contact: "border-orange-500", // Borde naranja
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
    const sections = [
      "home",
      "services",
      "projects",
      "blog",
      "pricing",
      "contact",
      "faq",
      "footer",
    ];

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

    const adjustedOffset = y > offset ? offset : offset;

    window.scrollTo({
      top: adjustedOffset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <nav
        className={`flex items-center justify-center shadow-sm w-screen fixed top-0 left-0 z-50 ${
          y > 80 ? "h-11" : "h-14"
        } bg-slate-900 font-sans font-medium text-sm transition-all ease-out`}
      >
        <div className="container flex items-center justify-between h-full">
          <div className="flex items-center">
            <a href="#home" className="flex items-center cursor-pointer">
              <img src={LogoIcon} alt="Logo" className="h-16 w-16" />
            </a>
          </div>
          <button
            className="outline-none border-0 bg-transparent h-full px-4 lg:hidden text-slate-200 "
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <div className="block w-3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  sidebarOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  sidebarOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  sidebarOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>

          <ul className="hidden lg:flex space-x-2">
            {["home", "services", "projects", "blog", "pricing", "contact"].map(
              (section) => (
                <li key={section} className="relative cursor-pointer h-full">
                  <a
                    href={`#${section}`}
                    className={`px-4 ${y > 80 ? "py-2.5" : "py-4"} block ${
                      activeSection === `#${section}` &&
                      !["faq", "footer"].includes(section)
                        ? `border-b-2 ${sectionStyles[section]}`
                        : "border-b-2 border-transparent"
                    } rounded transition-all duration-200`}
                    onClick={(e) => handleNavClick(e, `#${section}`)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
          <ul className="hidden lg:flex items-center space-x-4 font-mono">
            <li className="cursor-pointer">
              <a href="/login" className="py-2 pr-8">
                Log in
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/signup" className="bg-light rounded-lg py-2 px-4">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
