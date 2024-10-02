import React from "react";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { motion } from "framer-motion";
import TypingEffect from '../Elements/TypingEffect'
export default function Header() {
  return (
    <section
      id="home"
      className="flex md:flex-nowrap w-9/11 justify-between bg-white w-full py-20 h-full"
    >
    <div className="w-1/2 flex flex-col justify-center ml-16 items-start">
      <div className="space-y-6 mb-12 text-center md:text-left">
        <h1 className="flex flex-col md:flex-row text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-sky-800">
          <TypingEffect text="Prepare for the" speed={150} />
        </h1>
        <span className="text-2xl sm:text-4xl lg:text-[3.5rem] text-primary dark:text-primary-light text-sky-600">
          <TypingEffect text="Future." speed={500} />
        </span>
        <p className="text-secondary sm:w-full md:w-4/5">
          Prepare for <span className="text-amber-400">Arnica.</span>
        </p>
      </div>
      <div className="w-full md:w-auto">
        <FullButton title="Get Started" href="#services" />
      </div>
    </div>

      <div className="w-1/2 relative flex justify-center items-end mr-20 mt-10">
        <div className="relative z-10">
          <img className="rounded-lg" src={HeaderImage} alt="office" />
          <div className="absolute left-[-160px] bottom-[80px] bg-gray-800 z-20 p-6 rounded-lg text-white flex items-start max-w-[300px]">
            <div className="absolute left-1 top-[-10px]">
              <QuotesIcon />
            </div>
            <div>
              <p className="text-[15px]">
                <em>
                  Friends, such as we desire, are dreams and fables. Friendship
                  demands the ability to do without it.
                </em>
              </p>
              <p className="text-[13px] text-orange-500 text-right mt-2">
                Ralph Waldo Emerson
              </p>
            </div>
          </div>
          <div className="absolute right-[-80px] bottom-[50px] hidden md:block z-[-1] ">
            <Dots />
          </div>
        </div>
      </div>
    </section>
  );
}
