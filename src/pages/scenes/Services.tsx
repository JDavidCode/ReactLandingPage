import { MagicStickIcon } from "@icons";
import { IntegrationsIcon } from "@icons";
import { DatabaseIcon } from "@icons";
import { ShieldIcon } from "@icons";
import { useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  const items = [
    {
      id: 1,
      icon: <ShieldIcon className="w-12 h-12" />,
      label: "AI",
    },
    {
      id: 2,
      icon: <DatabaseIcon className="w-12 h-12" />,
      label: "Cloud",
    },
    {
      id: 3,
      icon: <MagicStickIcon className="w-12 h-12" />,
      label: "Games",
    },
    {
      id: 4,
      icon: <IntegrationsIcon className="w-12 h-12" />,
      label: "Finance",
    },
  ];

  return (
    <section className="w-full">
      <div className="text-center w-10/12 mx-auto pb-4">
        <div className="inline-flex items-center gap-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
          <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-sm">
            Discover the Difference
          </span>
        </div>
        <h1 className="pb-4 text-5xl font-extrabold text-white/90">
          Our Four Pillars of Service
        </h1>
        <p className="text-md text-indigo-200/65 max-w-2xl mx-auto">
          At Arnica, we proudly offer four distinct services, each crafted to
          meet the highest standards of excellence and professionalism.
        </p>
      </div>

      <div>
        <div className="relative bg-slate-900 p-6 shadow-xl mx-auto max-w-6xl rounded-2xl border-dashed border-2 border-gray-800 w-auto">
          <div className="mx-auto flex w-full flex-row justify-around ">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex flex-col hover:cursor-pointer items-center justify-between gap-2 w-44 bg-slate-800 hover:bg-slate-700 p-3 rounded-md group transition-all duration-150 ${
                  activeTab === item.id
                    ? "bg-slate-700 text-gray-50"
                    : "text-gray-300"
                }`}
              >
                <div
                  className={`text-gray-200 group-hover:text-gray-50 transition-all duration-150 ${
                    activeTab === item.id ? "text-gray-50" : "text-gray-200"
                  }`}
                >
                  {item.icon}
                </div>
                <span
                  className={`group-hover:text-gray-100 transition-all duration-150 ${
                    activeTab === item.id ? "text-gray-50" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          {items.map((item) =>
            activeTab === item.id ? (
              <div className="w-full max-w-5xl mx-auto mt-8">
                <div className="w-full h-11 rounded-t-lg bg-slate-900 flex justify-start items-center space-x-1.5 px-3">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
                <div className=" flex items-center justify-center bg-slate-800 border-t-0 w-full h-96 rounded-b-md">
                  {item.label}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
