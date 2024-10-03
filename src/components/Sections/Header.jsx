import React from "react";

import FullButton from "../Buttons/FullButton";

import HeaderImage from "../../assets/svg/launch_rocket.svg";
import TypingEffect from "../Elements/TypingEffect";

export default function Header() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-between w-full pt-32 pb-24 h-full"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center ml-16 mb-10 text-center md:text-left">
          <div className="space-y-6 mb-12">
            <div className="flex flex-col md:flex-row text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-sky-800 h-12">
              <TypingEffect text="Prepare for the" speed={50} />
            </div>
            <div className="text-2xl sm:text-4xl lg:text-[3.5rem] text-primary dark:text-primary-light text-sky-600 h-12">
              <TypingEffect text="Future." speed={350}/>
            </div>
            <p className="text-secondary sm:w-full md:w-4/5">
              Prepare for <span className="text-amber-400">Arnica.</span>
            </p>
          </div>
          <div className="w-32 h-12">
            <FullButton title="Get Started" href="#services" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center bottom-0">
          <img className="rounded-lg" src={HeaderImage} alt="office" />
        </div>
      </div>
    </section>
  );
}
