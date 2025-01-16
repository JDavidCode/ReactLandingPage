import { CheckIcon } from "@icons";

export default function FreeTierBanner() {
  const features = [
    "50 requests per hour",
    "30 image generations per hour",
    "10GB of storage",
    "Basic email support",
  ];

  return (
    <div className="px-16 relative max-w-7xl mx-auto">
      <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
        <div className="flex-1 px-6 py-8 lg:p-12 bg-slate-950">
          <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
            Free lifetime access
          </h3>
          <p className="mt-6 text-base text-gray-50 sm:text-lg">
            Take your free seat on Arnica!
          </p>
          <div className="mt-8">
            <div className="flex items-center">
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <ul
              role="list"
              className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
            >
              {features.map((feature, index) => (
                <li key={index} className="flex items-center lg:col-span-1">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="ml-3 text-white">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-8 px-16 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center bg-slate-900">
          <p className="text-lg leading-6 font-medium text-white">
            Own it free forever
          </p>
          <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
            <span>$0</span>
            <span className="ml-3 text-xl font-medium text-gray-50">USD</span>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
              >
                Get it!
              </a>
            </div>
            <div className="rounded-md shadow">
              <a
                href="#pricing"
                className="flex items-center justify-center px-5 py-3 border border-slate-100 text-base font-medium rounded-md text-white bg-transparent hover:bg-slate-100 hover:text-slate-950"
              >
                I want more!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
