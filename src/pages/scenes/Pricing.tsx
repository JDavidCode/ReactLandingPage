import React from "react";

const Tiers = [
  {
    title: "Bronze",
    price: "0",
    buttonText: "Become Bronze",
    buttonVariant: "outlined",
    features: {
      "Agents Requests": "50",
      "Image generations": "30",
      Storage: "20GB",
      "Additional services": "-",
      Shared: "-",
      Support: "Basic",
    },
  },
  {
    title: "Silver",
    price: "30",
    buttonText: "Become Silver",
    buttonVariant: "outlined",
    features: {
      "Agents Requests": "100",
      "Image generations": "60",
      Storage: "200GB",
      "Additional services": "+1",
      Shared: "1 user",
      Support: "Priority",
    },
  },
  {
    title: "Gold",
    price: "50",
    buttonText: "Become Gold",
    buttonVariant: "contained",
    features: {
      "Agents Requests": "160",
      "Image generations": "120",
      Storage: "500GB",
      "Additional services": "+2",
      Shared: "3 users",
      Support: "Priority",
    },
  },
  {
    title: "Emerald",
    price: "100",
    buttonText: "Become Emerald",
    buttonVariant: "outlined",
    features: {
      "Agents Requests": "Unlimited",
      "Image generations": "350",
      Storage: "1TB",
      "Additional services": "+3",
      Shared: "4 users",
      Support: "Priority and chat",
    },
  },
  {
    title: "Diamond",
    price: "125",
    buttonText: "Become Diamond",
    buttonVariant: "outlined",
    features: {
      "Agents Requests": "Unlimited",
      "Image generations": "800",
      Storage: "3TB",
      "Additional services": "+5",
      Shared: "6 users",
      Support: "All channels",
    },
  },
];

export default function PricingTable() {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-5xl text-slate-200">Pricing & Plans</h2>
          <p className="mb-8 mt-4 text-sm text-gray-500 sm:text-base md:mb-12">
            Find the perfect plan that suits your needs.
          </p>
        </div>
        {/* Mobile/Tablets: Card Layout */}
        <div className="block md:hidden">
          {Tiers.map((tier, index) => (
            <div
              key={index}
              className="border mb-6 rounded-lg shadow p-5 text-center bg-slate-950 border-slate-600"
            >
              <h3 className="text-xl font-bold">{tier.title}</h3>
              <p className="text-3xl font-bold my-3 text-slate-100">
                {tier.price === "-" ? "Custom" : `$${tier.price}`}
              </p>
              <p className="text-sm font-semibold mb-3">Per month</p>
              <ul className="text-left text-sm space-y-2 mb-4">
                {Object.entries(tier.features).map(([feature, value]) => (
                  <li key={feature} className="flex justify-between">
                    <span>{feature}</span>
                    <span className="font-semibold">{value}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`inline-block w-full py-2 font-semibold rounded ${
                  tier.buttonVariant === "contained"
                    ? "bg-black text-white"
                    : "text-slate-200 border border-slate-300"
                }`}
              >
                {tier.buttonText}
              </a>
            </div>
          ))}
        </div>
        {/* Large screens: Table Layout */}
        <div className="hidden md:block text-center">
          {/* Header */}
          <div className="grid grid-cols-1 gap-8 border-b border-gray-300 md:grid-cols-[1.2fr_repeat(5,1fr)]">
            <div className="py-8"></div>
            {Tiers.map((tier, index) => (
              <div key={index} className="py-8">
                <div className="text-sm mb-3">{tier.title}</div>
                <div className="text-3xl font-bold mb-3 text-slate-200">
                  {tier.price === "-" ? "Custom" : `$${tier.price}`}
                </div>
                <p className="text-sm font-semibold">Per month</p>
              </div>
            ))}
          </div>
          {/* Features */}
          {Object.keys(Tiers[0].features).map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-8 border-b border-gray-300 md:grid-cols-[1.2fr_repeat(5,1fr)]"
            >
              <div className="flex items-center font-semibold py-8 text-slate-100 justify-center">
                {feature}
              </div>
              {Tiers.map((tier, tierIndex) => (
                <div key={tierIndex} className="py-8 text-slate-200">
                  {tier.features[feature]}
                </div>
              ))}
            </div>
          ))}
          {/* Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_repeat(5,1fr)]">
            <div></div>
            {Tiers.map((tier, index) => (
              <div key={index}>
                <a
                  href="#"
                  className={`inline-block w-full py-6 font-semibold  border border-slate-600 ${
                    tier.buttonVariant === "contained"
                      ? "bg-black text-white"
                      : "text-slate-200"
                  }`}
                >
                  {tier.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
