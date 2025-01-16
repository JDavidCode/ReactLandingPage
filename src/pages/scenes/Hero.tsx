import Typewrite from "@components/texts/Typewriting";
import BounceCard from "@components/cards/BounceCard";
import BubbleText from "@components/texts/Bubble";



export default function Hero() {
  return (
    <section
      className="w-screen -top-12 relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url('https://wallpapersmug.com/download/3840x2160/97c4d0/blue-cityscape-minimalist.jpg')`,
      }}
    >
      <div className="flex flex-1 justify-center text-center items-center">
        <div className="w-full text-xl font-bold tracking-normal text-white/80 flex flex-col"></div>
        <div className="flex flex-col items-center justify-center h-5/6 relative w-full max-w-xl space-y-6 font-bold tracking-normal text-white/80 mt-10">
          <div className="w-full text-xl flex gap-2 items-center justify-center mt-12">
            <p className="text-5xl leading-relaxed">
              <BubbleText text={"We are "} />
            </p>
            <span className="relative whitespace-nowrap text-sky-600 flex self-center items-center justify-center ">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-sky-300"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>{" "}
              </svg>

              <span className="relative text-5xl">
                <BubbleText text={"Arnica"} />
              </span>
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="max-w-lg text-xl leading-relaxed flex gap-1">
              <BubbleText text={"Not just Fast, But "} />
              </div>
            <div className="hover:text-sky-600 cursor-none">
              <Typewrite
                examples={[
                  "Smart",
                  "Secure",
                  "Private",
                  "For everyone",
                  "Optimized",
                ]}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative group">
              <a
                href="#services"
                className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
              >
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                  <div className="relative z-10 flex items-center space-x-3">
                    <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                      Know Arnica
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                    >
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                    </svg>
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <section className="mx-auto max-w-7xl px-4 text-slate-800 grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-4">
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-800 to-indigo-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] cursor-pointer">
              <span className="block text-center font-semibold text-indigo-50">
                FEATURE DEMO HERE
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-4">
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-600 to-orange-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] cursor-pointer">
              <span className="block text-center font-semibold text-orange-50">
                FEATURE DEMO HERE
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-4">
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-600 to-emerald-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] cursor-pointer">
              <span className="block text-center font-semibold text-emerald-50">
                FEATURE DEMO HERE
              </span>
            </div>
          </BounceCard>
        </section>
      </div>
    </section>
  );
}
