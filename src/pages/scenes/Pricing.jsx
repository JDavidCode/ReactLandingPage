import React from "react";

import PricingTable from "../../components/PricingTable";
const userTiers = [
  {
    title: "Bronze",
    price: "0",
    description: "",
    offers: [
      "50 requests per hour",
      "30 image generations per hour",
      "10GB of storage",
      "Basic email support",
    ],
    buttonText: "Choose Bronze Plan",
    buttonVariant: "outlined",
  },
  {
    title: "Silver",
    price: "30",
    description: "",
    offers: [
      "100 requests per hour",
      "60 image generations per hour",
      "100GB of storage",
      "Priority email support",
      "+1 additional service",
      "Shared with 1 people",
    ],
    buttonText: "Choose Silver Plan",
    buttonVariant: "outlined",
  },
  {
    title: "Gold",
    price: "50",
    description: "",
    offers: [
      "160 requests per hour",
      "100 image generations per hour",
      "200GB of storage",
      "Priority email support",
      "+2 additional service",
      "Shared with 3 people",
    ],
    buttonText: "Choose Silver Plan",
    buttonVariant: "contained",
  },
  {
    title: "Emerald",
    price: "100",
    description: "",
    offers: [
      "Unlimited requests per hour",
      "250 image generations per hour",
      "450GB of storage",
      "Priority email and chat support",
      "+3 additional services",
      "Shared with 4 people",
    ],
    buttonText: "Choose Platinum Plan",
    buttonVariant: "outlined",
  },
  {
    title: "Diamond",
    price: "125",
    description: "",
    offers: [
      "Unlimited requests per hour",
      "500 image generations per hour",
      "1.5TB of storage",
      "Support via email, chat, and phone",
      "+5 additional services",
      "Shared with 6 people",
    ],
    buttonText: "Choose Diamond Plan",
    buttonVariant: "outlined",
  },
  {
    title: "Enterprise",
    price: "-",
    description: "",
    offers: [
      "As needed generations per hour",
      "As needed storage",
      "Support via email, chat, phone",
      "24/7 Containers Assistance",
      "As needed additional services",
      "Shared as needed",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outlined",
  },
];
export default function Pricing() {
  return (
    <section className="py-8 mx-auto w-10/12" id="pricing">
      <div className="pb-8 text-center md:text-left">
        <h1 className="text-4xl font-extrabold pt-8">Check Our Pricing</h1>
        <p className="text-sm pt-4">
          Our pricing is tailored to your unique needs, so you only pay for the
          services and features you choose.
          <br />
          If you're looking for convenience, we also offer pre-built packages
          designed to suit a range of common requirements.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center">
        {userTiers.map((tier, index) => (
          <div key={index} className="w-full">
            <PricingTable
              price={`$${tier.price}`}
              title={tier.title}
              text={tier.description}
              offers={tier.offers.map((offer, i) => ({
                name: offer,
                checked: true,
              }))}
              action={() => alert(`Selected ${tier.title} Plan`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
