import React from "react";
// Assets
import CloudIcon from "../../assets/svg/cloud.svg"; // Changed to CloudIcon
import LockIcon from "../../assets/svg/lock.svg"; // Changed to LockIcon
import ReportIcon from "../../assets/svg/report.svg"; // Changed to ReportIcon
import ApplicationIcon from "../../assets/svg/application.svg"; // Changed to ApplicationIcon
import ControlIcon from "../../assets/svg/adjust.svg"; // Changed to ApplicationIcon

export default function ServiceBox({ icon, title, subtitle }) {
  let iconSrc;

  switch (icon) {
    case "cloud":
      iconSrc = CloudIcon;
      break;
    case "lock":
      iconSrc = LockIcon;
      break;
    case "report":
      iconSrc = ReportIcon;
      break;
    case "application":
      iconSrc = ApplicationIcon;
      break;
    case "control":
      iconSrc = ControlIcon;
      break;
    default:
      iconSrc = CloudIcon;
      break;
  }

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto">
      <div className="flex justify-center mb-4">
        {" "}
        {/* Added margin-bottom for spacing */}
        <img src={iconSrc} alt={title} className="w-16 h-16" />{" "}
        {/* Load SVG using img */}
      </div>
      <h2 className="text-2xl font-extrabold text-center py-4 md:py-2 text-black">
        {title}
      </h2>
      <p className="text-base text-center text-gray-600">{subtitle}</p>
    </div>
  );
}
