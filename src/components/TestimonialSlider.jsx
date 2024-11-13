import React from "react";

import TestimonialBox from "./TestimonialBox";

export default function TestimonialSlider({ content = [] }) {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="grid lg:grid-cols-3 grid-cols-2 space-x-2">
        {content.map((item) => (
          <TestimonialBox key={item.id} text={item.content} author={item.authorName} />
        ))}
      </div>
    </div>
  );
}
