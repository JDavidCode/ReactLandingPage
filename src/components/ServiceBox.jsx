import React from "react";

import CloudIcon from "../assets/svg/cloud.svg";
import LockIcon from "../assets/svg/lock.svg";
import ReportIcon from "../assets/svg/report.svg";
import ApplicationIcon from "../assets/svg/application.svg";
import ControlIcon from "../assets/svg/adjust.svg";

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
    <div className="flex-shrink-0 relative rounded-lg max-w-xs shadow-lg shadow-teal-200/5 bg-gray-800 flex items-center flex-col justify-center self-center mx-auto">
      <div class="rounded-xl p-6 text-center shadow-xl">
        <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full">
          <img className="relative w-40" src={iconSrc} alt={title} />
        </div>
        <h1 class="text-darken mb-3 text-xl font-medium text-white/90">
          {title}
        </h1>
        <p class="px-4 text-gray-500 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
