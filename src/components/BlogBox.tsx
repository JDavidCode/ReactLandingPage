import React from "react";

export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <button
      className="animate pointer w-full bg-transparent border-0 outline-none hover:opacity-50"
      onClick={action ? () => action() : null}
    >
      <div className="rounded-lg shadow-md p-5 min-h-[300px] bg-gradient-to-t from-gray-900 max-h-[300px] flex flex-col">
        <div className="flex-grow">
          <h3 className="text-lg font-extrabold">{title}</h3>
          <div className="relative overflow-hidden max-h-[200px]">
            <p className="text-sm my-7 line-clamp-4">{text}</p>
            <div className="absolute bottom-0 left-0 right-0 h-10"></div>
          </div>
        </div>
        <div className="mt-auto">
          <p className="text-sm font-extrabold text-left">{author}</p>
          <div className="flex justify-start mt-3">
            <p className="tag rounded-lg bg-cyan-200 p-1 text-sm font-extrabold text-slate-900">{tag}</p>
          </div>
        </div>
      </div>
    </button>
  );
}
