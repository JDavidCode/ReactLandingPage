export default function TierBanner() {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="rounded-xl bg-gray-100 px-6 py-12 sm:px-12 sm:py-16 md:py-20">
          {/* Contents*/}
          <div className="mx-auto grid h-auto w-full gap-4 rounded-md px-0 py-12 lg:grid-cols-2">
            {/* Content */}
            <div className="grid grid-cols-1 gap-4 rounded-md border border-gray-300 bg-gray-300 px-10 py-14 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                  alt=""
                  className="mr-2 w-5"
                />
                <p className="text-sm sm:text-base">Premium Designs</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                  alt=""
                  className="mr-2 w-5"
                />
                <p className="text-sm sm:text-base">Regular updates</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                  alt=""
                  className="mr-2 w-5"
                />
                <p className="text-sm sm:text-base">Copy &amp; Paste</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                  alt=""
                  className="mr-2 w-5"
                />
                <p className="text-sm sm:text-base">Lifetime Access</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                  alt=""
                  className="mr-2 w-5"
                />
                <p className="text-sm sm:text-base">Early bird price</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                  alt=""
                  className="mr-2 w-5"
                />
                <p className="text-sm sm:text-base">Premium Support</p>
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-col rounded-md bg-black px-10 py-12 text-white">
              <div className="flex w-full flex-col items-center justify-between sm:flex-row sm:items-center">
                <h2 className="text-3xl font-bold md:text-5xl">
                  $149
                  <span className="text-sm font-light sm:text-sm">/month</span>
                </h2>
                <a
                  href="#"
                  className="mt-4 rounded-md bg-white px-6 py-3 text-center font-semibold text-black md:mt-0"
                >
                  Get started
                </a>
              </div>
              <div className="mb-6 mt-6 border border-gray-100"></div>
              <p className="text-white text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam,purus sit amet luctus magna fringilla urna
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
