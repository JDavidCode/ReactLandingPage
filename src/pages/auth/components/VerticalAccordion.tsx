import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./UseWindowSize";
import { useState, useEffect } from "react";
import { PlusIcon } from "@icons";
import { CloudIcon } from "@icons";
import { BurgerIcon } from "@icons";
import { GhostIcon } from "@icons";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen((prevOpen) => {
        const nextIndex = items.findIndex(item => item.id === prevOpen) + 1;
        if (nextIndex >= items.length) {
          return items[0].id;
        }
        return items[nextIndex].id;
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-full w-full max-w-6xl mx-auto shadow overflow-hidden">
      {items.map((item) => {
        return (
          <Panel
            key={item.id}
            open={open}
            setOpen={setOpen}
            id={item.id}
            Icon={item.Icon}
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-slate-900 hover:bg-slate-950 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-800 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180 text-white"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-indigo-600 text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-slate-700 group-hover:bg-slate-500 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-800 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Tech Power",
    Icon: PlusIcon,
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1666901328554-29162d8b58ed?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "By registering, you gain access to advanced tools that will drive your business or personal project forward, using the latest technology in AI and apps.",
  },
  {
    id: 2,
    title: "Innovation Hub",
    Icon: CloudIcon,
    imgSrc:
      "https://images.unsplash.com/photo-1535376472810-5d229c65da09?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Access personalized technological solutions that will transform your digital experience, boosting productivity while cutting costs.",
  },
  {
    id: 3,
    title: "Digital Strategy",
    Icon: BurgerIcon,
    imgSrc:
      "https://images.unsplash.com/photo-1541356665065-22676f35dd40?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "With our AI-powered tools, you’ll optimize your processes and make more informed decisions to achieve your goals.",
  },
  {
    id: 4,
    title: "Growth Platform",
    Icon: GhostIcon,
    imgSrc:
      "https://images.unsplash.com/photo-1549317336-206569e8475c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "By registering, you’ll become part of a community with exclusive access to resources that will help accelerate the growth of your business or project.",
  },
];
