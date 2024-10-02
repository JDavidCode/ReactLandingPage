import React from "react";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import CheckMark from "../../assets/svg/Checkmark";

export default function PricingTable({ icon, price, title, text, offers, action }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <div className="bg-white rounded-lg shadow p-5 mt-7 text-left min-h-[550px]">
      <div className="flex flex-row items-center">
        <div className="mr-4">{getIcon}</div>
        <p className="text-3xl font-extrabold text-black">{price}</p>
      </div>
      <div className="my-8 justify-center">
        <h4 className="text-3xl font-extrabold text-black">{title}</h4>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
      <div>
        {offers && offers.map((item, index) => (
          <div className="flex items-center my-4" key={index}>
            <div className="relative top-[-1px] mr-4" style={{ minWidth: "20px" }}>
              {item.checked ? <CheckMark /> : <div />}
            </div>
            <p className="text-xl font-extrabold text-black">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="max-w-[120px] mx-auto mt-8">
        <FullButton title="Buy" action={action} />
      </div>
    </div>
  );
}
