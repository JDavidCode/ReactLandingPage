import React from "react";
import FullButton from "./buttons/FullButton";
import { CheckIcon } from "@icons";
import GemIcon from "../assets/svg/GemTiers";

interface Offer {
  name: string;
  checked: boolean;
}

interface PricingTableProps {
  price: string;
  title: string;
  text: string;
  offers: Offer[];
  action: () => void;
}

const PricingTable: React.FC<PricingTableProps> = ({
  price,
  title,
  text,
  offers,
  action,
}) => {
  return (
    <div className="group rounded-lg shadow p-5 mt-7 text-left min-h-[500px] flex flex-col justify-between bg-slate-950 hover:bg-slate-950/80 mx-2">
      <div className="">
        <div className="flex flex-row items-center text-slate-300 group-hover:text-slate-100">
          <p className="text-3xl font-extrabold">{price}</p>
        </div>
        <div className="my-8 flex items-center relative text-slate-200 group-hover:text-slate-50">
          <div className="w-10 h-10">
            <GemIcon tier={title} />
          </div>
          <div className="ml-2">
            <h4 className="text-3xl font-extrabold">{title}</h4>
            <p className="text-sm text-gray-600">{text}</p>
          </div>
        </div>

        <div>
          {offers &&
            offers.map((item, index) => (
              <div className="flex items-center my-4" key={index}>
                <div
                  className="relative top-[-1px] mr-2 text-sky-800 group-hover:text-emerald-500"
                  style={{ minWidth: "20px" }}
                >
                  {item.checked ? <CheckIcon /> : <div />}
                </div>
                <p className="text-sm font-bold text-slate-300 group-hover:text-slate-100">
                  {item.name}
                </p>
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
};

export default PricingTable;
