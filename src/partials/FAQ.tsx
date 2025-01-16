import { PlusIcon } from "@icons";
import React, { useState } from "react";

const items = [
  {
    panel: "panel1",
    question:
      "How do I contact customer support if I have a question or issue?",
    answer:
      "You can reach our customer support team by emailing support@email.com or calling our toll-free number. We're here to assist you promptly.",
  },
  {
    panel: "panel2",
    question: "Can I return the product if it doesn't meet my expectations?",
    answer:
      "Absolutely! We offer a hassle-free return policy. If you're not completely satisfied, you can return the product within 30 days for a full refund or exchange.",
  },
  {
    panel: "panel3",
    question: "What makes your product stand out from others in the market?",
    answer:
      "Our product distinguishes itself through its adaptability, durability, and innovative features. We prioritize user satisfaction and continually strive to exceed expectations in every aspect.",
  },
  {
    panel: "panel4",
    question: "Is there a warranty on the product, and what does it cover?",
    answer:
      "Yes, our product comes with a 1-year warranty. It covers defects in materials and workmanship. If you encounter any issues covered by the warranty, please contact our customer support for assistance.",
  },
  {
    panel: "panel5",
    question: "How long does it take to ship my order?",
    answer:
      "Orders are typically processed and shipped within 2-3 business days. Delivery times vary depending on your location and shipping method selected.",
  },
  {
    panel: "panel6",
    question: "Are there any ongoing promotions or discounts?",
    answer:
      "Yes, we frequently offer promotions and discounts. You can check our website or sign up for our newsletter to stay updated on the latest deals and offers.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => {
    setExpanded(expanded === panel ? false : panel);
  };

  return (
    <section
      id="faq"
      className="py-4 px-6 sm:py-8 bg-slate-950 flex flex-col items-center gap-6"
    >
      <div className="relative isolate overflow-hidden bg-custom">
        <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-4 te">
          <div className="flex flex-col text-left basis-1/2">
            <div className="inline-flex items-center gap-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-sm">
                F.A.Q
              </span>
            </div>
            <h1 className="pb-4 text-5xl font-extrabold text-white/90">
             Have questions?
            </h1>
          </div>
          <ul className="basis-1/2">
            {items.map((item, index) => (
              <li key={index} className="group">
                <button
                  className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t border-base-content/10"
                  aria-expanded="false"
                >
                  <span className="flex-1 text-base-content text-md">
                    {item.question}
                  </span>
                  <PlusIcon className="w-4 h-4 text-white" />
                </button>
                <div
                  className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden"
                  style={{ transition: "max-height 0.3s ease-in-out 0s" }}
                >
                  <div className="pb-5 leading-relaxed">
                    <p className="space-y-2 leading-relaxed text-sm">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="w-full my-8 border-gray-300" />
    </section>
  );
};

export default FAQ;
