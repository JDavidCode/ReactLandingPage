import React, { useState } from 'react';

const items = [
  {
    panel: 'panel1',
    question: 'How do I contact customer support if I have a question or issue?',
    answer: 'You can reach our customer support team by emailing support@email.com or calling our toll-free number. We\'re here to assist you promptly.',
  },
  {
    panel: 'panel2',
    question: 'Can I return the product if it doesn\'t meet my expectations?',
    answer: 'Absolutely! We offer a hassle-free return policy. If you\'re not completely satisfied, you can return the product within 30 days for a full refund or exchange.',
  },
  {
    panel: 'panel3',
    question: 'What makes your product stand out from others in the market?',
    answer: 'Our product distinguishes itself through its adaptability, durability, and innovative features. We prioritize user satisfaction and continually strive to exceed expectations in every aspect.',
  },
  {
    panel: 'panel4',
    question: 'Is there a warranty on the product, and what does it cover?',
    answer: 'Yes, our product comes with a 1-year warranty. It covers defects in materials and workmanship. If you encounter any issues covered by the warranty, please contact our customer support for assistance.',
  },
  {
    panel: 'panel5',
    question: 'How long does it take to ship my order?',
    answer: 'Orders are typically processed and shipped within 2-3 business days. Delivery times vary depending on your location and shipping method selected.',
  },
  {
    panel: 'panel6',
    question: 'Are there any ongoing promotions or discounts?',
    answer: 'Yes, we frequently offer promotions and discounts. You can check our website or sign up for our newsletter to stay updated on the latest deals and offers.',
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => {
    setExpanded(expanded === panel ? false : panel);
  };

  return (
    <section id="faq" className="py-16 px-6 sm:py-12 bg-gray-800 flex flex-col items-center gap-6">
      <h2 className="text-2xl text-gray-100 text-center mb-4">Frequently Asked Questions</h2>

      <div className="w-full px-8 mx-auto container">
        {items.map((item, index) => (
          <div key={index} className="border border-gray-200/10 mb-2 rounded-md shadow-sm">
            <button
              onClick={() => handleChange(item.panel)}
              className="flex justify-between items-center w-full p-2 text-left focus:outline-none"
            >
              <h3 className="text-sm">{item.question}</h3>
              <span className="ml-4">{expanded === item.panel ? '-' : '+'}</span>
            </button>
            {expanded === item.panel && (
              <div className="p-3 bg-gray-300/20 rounded-b-md">
                <p className="text-sm">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <hr className="w-full my-8 border-gray-300" />
    </section>
  );
};

export default FAQ;
