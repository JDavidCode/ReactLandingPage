import React, { useEffect } from "react";
import Parallax from "parallax-js";

const ParallaxComponent = () => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  }, []);

  return (
    <div
      id="scene"
      data-relative-input="true"
      className="w-screen overflow-hidden h-screen relative"
      style={{ position: "relative" }}
    >
      <img
        draggable="false"
        id="mountain"
        src="https://www.design-fenix.com.ar/codepen/parallax/mountain.png"
        alt="Mountain"
        className="absolute top-10 left-10 text-center min-w-md w-full"
        data-depth="0.4"
      />
      <h1
        data-depth="0.2"
        className="absolute top-20 left-20 text-2xl font-bold uppercase text-[#eaeaea] shadow-md"
      >
        PARALLAX
      </h1>
      <img
        draggable="false"
        id="island"
        src="https://www.design-fenix.com.ar/codepen/parallax/island.png"
        alt="Island"
        className="absolute bottom-10 left-96 text-center min-w-md w-full"
        data-depth="0.3"
      />
      <img
        draggable="false"
        id="birds"
        src="https://www.design-fenix.com.ar/codepen/parallax/bird.png"
        alt="Birds"
        className="absolute top-64 left-96 text-center min-w-md w-full"
        data-depth="0.3"
      />
      <img
        draggable="false"
        id="boat"
        src="https://www.design-fenix.com.ar/codepen/parallax/boat.png"
        alt="Boat"
        className="absolute top-96 left-96 text-center max-w-[176px] w-full"
        data-depth="0.1"
      />
    </div>
  );
};

export default ParallaxComponent;
