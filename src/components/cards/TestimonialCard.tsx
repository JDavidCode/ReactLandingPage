import { QuotesIcon } from "@icons";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

function Card(props) {
  const [exitX, setExitX] = useState(0);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };
  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 30, opacity: 0.5 },
  };

  function handleDragEnd(_, info) {
    if (info.offset.x < -100) {
      setExitX(-250);
      props.setIndex(props.index + 1);
    }
    if (info.offset.x > 100) {
      setExitX(250);
      props.setIndex(props.index + 1);
    }
  }

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        x,
        rotate,
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
      // Dragging
      drag={props.drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      // Animation
      variants={props.frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        props.frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.div
        className="w-96 rounded-md bg-slate-800 p-4 relative flex flex-col gap-3"
        style={{
          scale,
        }}
      >
        <div className="absolute -top-6 right-4">
          <QuotesIcon className="w-10 h-10" />
        </div>
        <p className="text-md italic">
          "Arnica completely revolutionized the way we manage our projects. From
          daily tasks to programming, everything became faster and more
          efficient. A must-have tool for any team!"
        </p>
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Samantha Ruiz"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="font-bold">Samantha Ruiz</p>
            <p className="text-gray-400 text-xs">
              Chief Operating Officer | ConstructIt Inc.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Card;
