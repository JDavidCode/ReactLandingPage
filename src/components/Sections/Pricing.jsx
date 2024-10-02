import React from "react";
// Components
import PricingTable from "../Elements/PricingTable";
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
    title: "Platinum",
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
    price: "$$",
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
    <section className="w-full" id="pricing">
      <div className="bg-white py-16">
        <div className="container mx-auto w-10/12">
          <div className="mb-12 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-black pt-8">
              Check Our Pricing
            </h1>
            <p className="text-sm pt-4 pb-8">
              Our pricing is tailored to your unique needs, so you only pay for
              the services and features you choose.
              <br />
              If you're looking for convenience, we also offer pre-built
              packages designed to suit a range of common requirements.
            </p>
          </div>
          <div className="flex flex-wrap justify-between">
            {userTiers.map((tier, index) => (
              <div key={index} className="w-full sm:w-1/3 p-2">
                <PricingTable
                  icon="roller" // Ajusta el ícono según sea necesario
                  price={`$${tier.price}/mo`} // Formatea el precio como string
                  title={tier.title} // Título del plan
                  text={tier.description} // Une la descripción en una línea si es necesario
                  offers={tier.offers.map((offer, i) => ({
                    name: offer,
                    checked: true,
                  }))} // Marcamos todo como "checked"
                  action={() => alert(`Selected ${tier.title} Plan`)} // Acción al hacer clic en el botón
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
