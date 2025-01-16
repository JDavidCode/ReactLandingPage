import React from "react";
import { motion } from "framer-motion";

const AnimatedVerticalGrid = ({ itemsLeft, itemsCenter, itemsRight }) => {
  const randomStyles = [
    "px-8 z-30 py-4 bg-sky-800 after:-z-20 after:absolute after:h-1 after:w-1 after:bg-teal-800 after:left-5 after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700",
    "bg-sky-950 border border-cyan-800 border-b-4 px-4 py-2 hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300",
    "bg-slate-900 border-2 border-teal-600 transform transition-all duration-500 hover:scale-105 hover:border-emerald-800 hover:text-emerald-300 p-3 before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-800 before:rounded-md before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-32 after:h-32 after:content[''] after:bg-teal-800 after:left-6 after:bottom-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-14 hover:before:bottom-4 hover:before:blur hover:after:right-9 hover:after:top-2 hover:after:scale-110",
    "w-60 h-60 inline-block bg-slate-950 shadow-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600",
    //"bg-gradient-to-r from-blue-800 from-10% via-sky-800 via-30% to-emerald-800 to-90% bg-[length:400%] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-800 before:from-10% before:via-sky-800 before:via-30% before:to-pink-800 before:bg-[length:400%] before:-z-10 before:rounded-md before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-indigo-700 focus:ring-violet-700",
  ];
  const getRandomClass = () =>
    randomStyles[Math.floor(Math.random() * randomStyles.length)];

  const scrollAnimation = (direction, duration, startAt) => ({
    animate: {
      y: direction === "up" ? [startAt, "-100%"] : [startAt, "100%"],
    },
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
    },
  });

  const renderAnimatedItems = (items, direction, duration, startAt) => (
    <motion.div
      className="flex flex-col gap-4"
      {...scrollAnimation(direction, duration, startAt)}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`rounded-xl font-bold text-lg text-slate-100 w-60 h-60 flex items-center justify-center ${getRandomClass()}`}
        >
          {item}
        </div>
      ))}
    </motion.div>
  );

  const columnData = [
    { items: itemsLeft, direction: "down", startAt: "12%" },
    { items: itemsCenter, direction: "up", startAt: "4%" },
    { items: itemsRight, direction: "down", startAt: "-8%" },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-950">
      {columnData.map(({ items, direction, startAt }, index) => (
        <div key={index} className="flex flex-col items-center justify-center w-full flex-grow bg-slate-900">
          {renderAnimatedItems(items, direction, 120, startAt)}
        </div>
      ))}
    </div>
  );
};

export default AnimatedVerticalGrid;
