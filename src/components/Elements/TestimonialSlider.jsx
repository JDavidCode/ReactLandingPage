import React from "react";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
        <TestimonialBox
          text="Arnica has transformed the way we approach technology. The platform's user-driven ideas inspire us every day."
          author="Alice Thompson"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
        <TestimonialBox
          text="Being part of the Arnica community means my ideas are valued. It’s refreshing to see a tech project that prioritizes user input."
          author="Michael Rodriguez"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
        <TestimonialBox
          text="The innovation at Arnica is driven by real user experiences. It feels great to contribute to something that genuinely listens."
          author="Sofia Chen"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
        <TestimonialBox
          text="Arnica's commitment to adopting user ideas has created a thriving ecosystem. I love being part of this journey!"
          author="James Smith"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
        <TestimonialBox
          text="With Arnica, I feel like my voice matters. It’s empowering to see how our suggestions shape the platform."
          author="Emma Johnson"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
        <TestimonialBox
          text="The collaboration within the Arnica community has been incredible. Together, we are redefining the future of technology."
          author="Liam Brown"
        />
      </div>
    </div>
  );
}
