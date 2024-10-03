import React from "react";

import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";

import AddImage2 from "../../assets/img/msip_banner.png";


const mainItems = [
  {
    title: 'AI',
    description:
      'Our AI project offers flexible and customizable solutions for various industries. With adaptable features, users can create tailored applications to meet their specific needs.',
    background_url:'https://random.imagecdn.app/376/309'
  },
  {
    title: 'VR',
    description:
      'Our VR project delivers immersive virtual reality experiences using the latest technology. We create captivating environments and interactive simulations for entertainment, education, and more.',
        background_url:'https://random.imagecdn.app/376/309'
  },
  {
    title: 'GAMES',
    description:
      'Our games project ensures seamless gameplay across all platforms—web, mobile, and desktop. We focus on delivering enjoyable gaming experiences to players everywhere.',
    background_url:'https://random.imagecdn.app/376/309'

  },
];

export default function Projects() {
  return (
    <section className="w-full" id="projects">
      <div className="py-[100px]">
        <div className="container mx-auto w-10/12">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-black">Projects</h1>
            <p className="text-sm pt-4 pb-8">
              Discover our innovative projects in AI, VR, and gaming. Dive into our latest developments to uncover unique features and benefits.
              <br />
              Every project is built upon our core features stack, ensuring innovation and quality in everything we create.              
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {mainItems.map((item, index) => (
              <div key={index} className="w-full sm:w-1/3 p-2">
                <ProjectBox
                  img={item.background_url}
                  title={item.title}
                  text={item.description}
                  action={() => alert(`Clicked on ${item.title}`)}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div style={{ width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-14">
        <div className="container mx-auto  w-11/12">
          <div className="flex flex-wrap justify-between items-center py-24">
            <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
              <div className="absolute top-[-300px] left-0 w-full">
                <img className="rounded-lg w-[426px] h-[607px]" src={AddImage2} alt="add" />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h4 className="text-sm font-semibold">MSIP Model Launch</h4>
              <h2 className="text-4xl font-extrabold text-black">Module Standardization and Integration Platform</h2>
              <p className="text-xs">
              This model allows EMMA to easily search, download, install, and manage modules by automating the process of module installation, upgrade, and removal.
              </p>
              <div className="flex justify-center md:justify-start mt-8">
                <div className="w-48 mr-4">
                  <FullButton title="Know More" action={() => alert("clicked")} />
                </div>
                <div className="w-48">
                  <FullButton title="Documentation" action={() => alert("clicked")} border />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
