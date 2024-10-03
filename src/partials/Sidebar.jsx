import React from "react";

import CloseIcon from "../assets/svg/CloseIcon";
import LogoIcon from "../assets/svg/Logo.svg";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <nav
      className={`fixed top-0 h-full bg-darkBg p-7 z-50 transition-all duration-300 ${
        sidebarOpen ? "right-0" : "-right-full"
      } w-96 md:w-full`}
    >
      <div className="flex justify-between items-center py-5">
        <div className="flex items-center">
        <img src={LogoIcon} alt="Logo" className=" h-10 w-10" />
        </div>
        <button
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="transition-all duration-300 cursor-pointer p-2"
        >
          <CloseIcon />
        </button>
      </div>

      <ul className="flex flex-col items-center py-10">
        {["home", "services", "projects", "blog", "pricing", "contact"].map((section) => (
          <li className="font-semibold text-sm cursor-pointer mb-5" key={section}>
            <a
              onClick={() => toggleSidebar(!sidebarOpen)}
              className="text-white px-4 py-2"
              href={`#${section}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex justify-center items-center py-5">
        <li className="font-semibold text-sm cursor-pointer mr-8">
          <a href="/" className="text-white px-3">
            Log in
          </a>
        </li>
        <li className="font-semibold text-sm cursor-pointer">
          <a href="/" className="bg-lightBg rounded-lg px-4 py-2">
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );
}
