import React from "react";

export default function ProjectBox({ img, title, text, action }) {
  return (
    <div className="w-full mt-8 relative">
      <button
        className="relative w-full p-0 m-0 bg-transparent border-0 outline-none hover:opacity-75"
        onClick={action ? () => action() : null}
      >
        <img className="rounded-lg" src={img} alt="project" />
        <h3 className="absolute inset-0 flex items-center justify-center text-lg font-extrabold text-white bg-black bg-opacity-50 rounded-lg">
          {title}
        </h3>
      </button>
      <p className="text-sm mt-2">{text}</p>
    </div>
  );
}
