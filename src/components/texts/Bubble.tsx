const BubbleText = ({ text }) => {
    return (
      <h2 className="text-center text-inherit font-thin text-slate-300 cursor-none">
        {text.split("").map((child, idx) => (
          <span
            key={idx}
            className="group hover:text-sky-500 transition-all duration-350 text-inherit"
          >
            {child}
          </span>
        ))}
      </h2>
    );
  };

  export default BubbleText;