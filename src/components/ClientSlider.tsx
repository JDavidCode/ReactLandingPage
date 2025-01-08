import React, { useRef } from "react";

import ClientLogo01 from "../assets/img/clients/logo01.svg";
import ClientLogo02 from "../assets/img/clients/logo02.svg";
import ClientLogo03 from "../assets/img/clients/logo03.svg";
import ClientLogo04 from "../assets/img/clients/logo04.svg";
import ClientLogo05 from "../assets/img/clients/logo05.svg";
import ClientLogo06 from "../assets/img/clients/logo06.svg";

export default function ClientSlider() {
  const sliderRef = useRef(null);


  return (
    <div className="relative overflow-hidden flex justify-center ">
      <div
        ref={sliderRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {[ClientLogo01, ClientLogo02, ClientLogo03, ClientLogo04, ClientLogo05, ClientLogo06].map(
          (logo, index) => (
            <div key={index} className="flex items-center justify-center w-40 h-24 cursor-pointer">
              <img src={logo} alt={`client logo ${index}`} className="w-full h-full p-2" />
            </div>
          )
        )}
      </div>
    </div>
  );
}
