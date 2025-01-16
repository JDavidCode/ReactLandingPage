import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Backdrop from "../components/Backdrop";
import LogoIcon from "@assets/svg/Logo.svg";

const sectionStyles = {
  home: "border-sky-500",
  services: "border-purple-500",
  projects: "border-blue-500",
  blog: "border-yellow-500",
  pricing: "border-green-500",
  contact: "border-orange-500",
};

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const homeBounds = homeSection.getBoundingClientRect();

      setIsScrolled(homeBounds.bottom <= 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      "features",
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
  const [isOpen, setIsOpen] = useState(false);
  const [menuOne, setMenuOne] = useState(false);
  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <nav
        className={`flex items-center justify-center shadow-sm w-screen fixed top-0 left-0 z-50 text-slate-200 ${
          y > 80 ? "md:h-10" : "h-12"
        } font-sans font-medium text-sm transition-all ease-out ${isScrolled ? "bg-slate-950" : "bg-transparent"}`}
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
            {[
              "home",
              "services",
              "features",
              "projects",
              "blog",
              "pricing",
              "contact",
            ].map((section) => (
              <li key={section} className="relative cursor-pointer h-full">
                <a
                  href={`#${section}`}
                  className={`px-4 ${y > 80 ? "py-2" : "py-3"} block ${
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
            ))}
            <li
              className={`px-4 ${y > 80 ? "py-2" : "py-3"} block`}
              onClick={(e) => handleNavClick(e, `#${section}`)}
            >
              <div className="relative flex flex-col">
                <button
                  onClick={() => setMenuOne(!menuOne)}
                  className={`flex flex-row rounded-lg ${menuOne ? "" : "text-slate-200 lg:hover:text-slate-100"}`}
                >
                  Component
                  <svg
                    className={`w-6 h-6 fill-current transition-transform duration-300 ${menuOne ? "rotate-180" : "rotate-0"}`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                  </svg>
                </button>
                {menuOne && (
                  <div className="z-50 flex w-full flex-col rounded-lg p-4 gap-4 lg:absolute lg:top-8 lg:w-96 bg-slate-900">
                    {[1, 2, 3].map((i, index) => (
                      <a
                        className="flex items-center gap-5 grow rounded-lg px-5"
                        href="#"
                      >
                        {/* ICON */}
                        <div className="relative">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="40" height="40" fill="#C4C4C4" />
                            <path
                              d="M18.4688 18.6875C18.8312 18.6875 19.125 18.3937 19.125 18.0312C19.125 17.6688 18.8312 17.375 18.4688 17.375C18.1063 17.375 17.8125 17.6688 17.8125 18.0312C17.8125 18.3937 18.1063 18.6875 18.4688 18.6875Z"
                              fill="black"
                            />
                            <path
                              d="M24.3751 14.75H15.6251C15.3931 14.7503 15.1707 14.8425 15.0066 15.0066C14.8426 15.1706 14.7503 15.393 14.7501 15.625V22.6236L14.75 22.6253L14.7501 24.375C14.7503 24.607 14.8426 24.8294 15.0066 24.9934C15.1707 25.1575 15.3931 25.2497 15.6251 25.25H24.3751C24.607 25.2497 24.8294 25.1575 24.9935 24.9934C25.1575 24.8294 25.2498 24.607 25.2501 24.375V15.625C25.2498 15.393 25.1575 15.1706 24.9935 15.0066C24.8294 14.8425 24.607 14.7503 24.3751 14.75ZM22.8063 19.125C22.642 18.9612 22.4195 18.8691 22.1875 18.8691C21.9555 18.8691 21.733 18.9612 21.5688 19.125L19.1251 21.5688L17.9938 20.4375C17.8295 20.2737 17.607 20.1817 17.375 20.1817C17.1431 20.1817 16.9205 20.2737 16.7563 20.4375L15.6251 21.5687V15.625H24.3751L24.3754 20.6941L22.8063 19.125Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                        {/* TEXT */}
                        <div>
                          <h2 className="font-inter text-md font-medium text-slate-200">
                            Analytics
                          </h2>
                          <p className="font-inter max-w-64 text-xs text-slate-300 lg:max-w-sm">
                            Get a better understanding of where your traffic is
                            coming from
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center space-x-4 font-sans">
            <li className="cursor-pointer">
              <a href="/login" className="py-2 pr-8">
                Log in
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/signup" className="bg-light rounded-lg py-2 px-4">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
