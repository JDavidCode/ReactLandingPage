import React from "react";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <nav
      className={`fixed top-0 h-full bg-darkBg p-7 z-50 transition-all duration-300 ${
        sidebarOpen ? "right-0" : "-right-full"
      } w-full md:w-1/3 bg-slate-800 block lg:hidden`}
    >
      <ul className="flex flex-col items-center py-10">
        {["home", "services", "projects", "blog", "pricing", "contact"].map(
          (section) => (
            <li
              className="font-semibold text-sm cursor-pointer mb-5"
              key={section}
            >
              <a
                onClick={() => toggleSidebar(!sidebarOpen)}
                className="text-white px-4 py-2"
                href={`#${section}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ),
        )}
      </ul>

      <ul className="flex justify-center items-center py-5">
        <li className="font-semibold text-sm cursor-pointer mr-8">
          <a href="/login" className="text-white px-3">
            Log in
          </a>
        </li>
        <li className="font-semibold text-sm cursor-pointer">
          <a href="/signup" className="bg-lightBg rounded-lg px-4 py-2">
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );
}
