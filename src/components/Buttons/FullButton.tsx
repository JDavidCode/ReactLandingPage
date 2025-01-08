import React from "react";

export default function FullButton({ title, action, border }) {
  return (
    <button
      className={`animate pointer rounded-lg w-full p-4 outline-none 
        ${border ? 'border border-gray-700 bg-transparent text-gray-700 hover:bg-transparent hover:border-sky-700 hover:text-sky-700' : 'border border-sky-700 bg-sky-700 text-white hover:bg-sky-800'}`}
      onClick={action ? () => action() : null}
    >
      {title}
    </button>
  );
}
