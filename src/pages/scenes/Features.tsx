import ContentParallax from "@components/ContentParallax";

export default function Features() {
  const features = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1496504175726-c7b4523c7e81?q=80&w=1517&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Security & Privacy.",
      subheading: "Built for all of us",
      content: {
        title: "How Security Works for Everyone",
        description: `Your data deserves the highest level of protection. Arnica uses advanced encryption techniques to keep your information safe and private at all times. Whether you're sharing sensitive personal details or managing critical business data, our systems ensure that your interactions remain secure.

        For businesses, our enterprise-grade security protocols help you stay compliant with industry standards and regulations, giving you peace of mind while focusing on what matters most. Regular audits and updates ensure that your digital assets are always safeguarded against emerging threats.`,
        link: "$",
      },
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1668681919287-7367677cdc4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Quality & Customization",
      subheading: "Never compromise.",
      content: {
        title: "How Customization Works for You",
        description: `At Arnica, we believe one size doesn’t fit all. Our tools are designed to adapt to your personal preferences, making every interaction feel tailored to your needs. From personalized recommendations to adaptive interfaces, our AI ensures you always get the best experience.

        For businesses, our solutions are fully customizable. Seamlessly integrate with your existing workflows, or create industry-specific configurations that align perfectly with your objectives. Empower your teams with tools that grow and evolve alongside your organization.`,
        link: "$",
      },
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1556139930-c23fa4a4f934?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Integrations & Updates.",
      subheading: "Think for you",
      content: {
        title: "How Integration Simplifies Processes",
        description: `Managing multiple tools can be overwhelming, but Arnica makes it effortless. Connect seamlessly with the applications you already use and enjoy a unified experience that simplifies your daily tasks. Updates are automatic and ensure compatibility with the latest technologies.

        For businesses, our microservices architecture is built to integrate with even the most complex tech stacks. Enjoy regular enhancements and new features that keep your systems at the cutting edge, all while maintaining a smooth and uninterrupted workflow.`,
        link: "$",
      },
    },
  ];
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
          <div className="inline-flex items-center gap-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-sm">
              We are one
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 text-4xl font-black text-white/80">
            Built for Everyone
          </h2>
          <p className="text-md text-indigo-200/65">
            Whether you're an individual seeking personalized support or part of
            a team with specific requirements, we have the flexibility and
            expertise to support you.
          </p>
        </div>
      </div>
      <div className="bg-transparent w-screen">
        {features.map((item, index) => (
          <ContentParallax
            imgUrl={item.imgUrl}
            heading={item.heading}
            subheading={item.subheading}
            key={index}
          >
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
              <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-slate-50">
                {item.content.title}
              </h2>
              <div className="col-span-1 md:col-span-8">
                {item.content.description.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-4 text-xl text-slate-200 md:text-2xl">
                    {para}
                  </p>
                ))}
                <button
                  type="submit"
                  className="hover:bg-emerald-600 text-black font-bold shadow-neutral-950 transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce flex justify-center gap-2 items-center float-end shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-sky-700 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                >
                  Explore
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </ContentParallax>
        ))}
      </div>
    </section>
  );
}
