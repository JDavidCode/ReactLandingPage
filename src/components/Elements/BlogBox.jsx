import React from "react";

export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <button
      className="animate pointer w-full bg-transparent border-0 outline-none hover:opacity-50"
      onClick={action ? () => action() : null}
    >
      <div className="rounded-lg shadow-md p-5 mt-7 min-h-[300px] max-h-[300px] flex flex-col">
        <div className="flex-grow">
          <h3 className="text-lg font-extrabold text-black">{title}</h3>
          {/* Contenedor de texto con desvanecimiento al desbordar */}
          <div className="relative overflow-hidden max-h-[200px]">
            <p className="text-sm my-7 line-clamp-4">{text}</p>
            {/* Gradiente para el efecto de desvanecimiento */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white"></div>
          </div>
        </div>
        {/* Contenedor para pegar el autor y el tag a la parte inferior */}
        <div className="mt-auto">
          <p className="text-sm font-extrabold text-black text-left">{author}</p>
          <div className="flex justify-start mt-3">
            <p className="tag text-black rounded-lg bg-cyan-200 p-1 text-sm font-extrabold">{tag}</p>
          </div>
        </div>
      </div>
    </button>
  );
}
