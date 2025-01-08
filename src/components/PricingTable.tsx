import React from "react";

import FullButton from "./Buttons/FullButton";

import { CheckIcon } from "@icons";
import GemIcon from "../assets/svg/GemTiers";

export default function PricingTable({
  price,
  title,
  text,
  offers,
  action,
}) {
  return (
    <div className="rounded-lg shadow p-5 mt-7 text-left min-h-[500px] flex flex-col justify-between bg-slate-900 mx-2">
      <div>
        <div className="flex flex-row items-center">
          <p className="text-3xl font-extrabold ">{price}</p>
        </div>
        <div className="my-8 flex items-center relative">
          <div className="w-10 h-10">
            <GemIcon tier={title} />
          </div>
          <div className="ml-2">
            <h4 className="text-3xl font-extrabold ">{title}</h4>
            <p className="text-sm text-gray-600">{text}</p>
          </div>
        </div>

        <div>
          {offers &&
            offers.map((item, index) => (
              <div className="flex items-center my-4" key={index}>
                <div
                  className="relative top-[-1px] mr-4"
                  style={{ minWidth: "20px" }}
                >
                  {item.checked ? <CheckIcon /> : <div />}
                </div>
                <p className="text-sm font-extrabold ">{item.name}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Botón adherido a la parte inferior */}
      <div className="mt-auto max-w-[180px] min-w-[120px] mx-auto">
        <FullButton title="Buy" action={action} />
      </div>
    </div>
  );
}
