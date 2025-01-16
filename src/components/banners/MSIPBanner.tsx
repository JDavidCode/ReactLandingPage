import AddImage2 from "@assets/img/msip_banner.png";
import FullButton from "../buttons/FullButton";

export default function MSIPBanner() {
  return (
    <div className=" bg-slate-900">
      <div className="container mx-auto w-11/12">
        <div className="flex flex-wrap justify-between items-center py-24">
          <div className="relative w-full md:w-1/2 mb-8 md:mb-0 hidden md:block">
            <div className="absolute top-[-250px] left-0 w-full">
              <img
                className="rounded-lg w-[386px] h-[507px]"
                src={AddImage2}
                alt="add"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-sm">
                MSIP Model Launch
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-slate-100 py-2">
              Module Standardization and Integration Platform
            </h2>
            <p className="text-xs text-slate-300">
              This model allows EMMA to easily search, download, install, and
              manage modules by automating the process of module installation,
              upgrade, and removal.
            </p>
            <div className="flex justify-center md:justify-start mt-8">
              <div className="w-48 mr-4">
                <FullButton title="Know More" action={() => alert("clicked")} />
              </div>
              <div className="w-48">
                <FullButton
                  title="Documentation"
                  action={() => alert("clicked")}
                  border
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
