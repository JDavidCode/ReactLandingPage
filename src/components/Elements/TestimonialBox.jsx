import React from "react";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";

export default function TestimonialBox({ text, author }) {
  return (
    <div className="w-full p-5 mt-8 bg-gray-800 rounded-lg flex flex-col items-center">
      <div className="relative -top-10">
        <QuoteIcon />
      </div>
      <p className="text-sm pb-8">
        {text}
      </p>
      <p className="text-orange-500 text-sm self-end">
        <em>{author}</em>
      </p>
    </div>
  );
}
