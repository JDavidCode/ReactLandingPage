import React from "react";

import ProjectBox from "../../components/ProjectBox";
import FullButton from "../../components/Buttons/FullButton";

import FastTrackSection from "../../components/FastTrack";

const mainItems = [
  {
    title: "AI",
    description:
      "Our AI project offers flexible and customizable solutions for various industries. With adaptable features, users can create tailored applications to meet their specific needs.",
    background_url: "https://random.imagecdn.app/376/309",
  },
  {
    title: "VR",
    description:
      "Our VR project delivers immersive virtual reality experiences using the latest technology. We create captivating environments and interactive simulations for entertainment, education, and more.",
    background_url: "https://random.imagecdn.app/376/309",
  },
  {
    title: "GAMES",
    description:
      "Our games project ensures seamless Game Play across all platforms—web, mobile, and desktop. We focus on delivering enjoyable gaming experiences to players everywhere.",
    background_url: "https://random.imagecdn.app/376/309",
  },
];

export default function Projects() {
  return (
    <section className="w-full py-8" id="projects">
      <div className="container mx-auto w-10/12 mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white/80 py-4">Projects</h1>
          <p className="text-sm mx-auto w-5/6">
            Discover our innovative projects in AI, VR, and gaming. Dive into
            our latest developments to uncover unique features and benefits.
            <br />
            Every project is built upon our core features stack, ensuring
            innovation and quality in everything we create.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {mainItems.map((item, index) => (
            <div key={index} className="sm:w-1/3 p-2">
              <ProjectBox
                img={item.background_url}
                title={item.title}
                text={item.description}
                action={() => alert(`Clicked on ${item.title}`)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center py-8">
          <div style={{ width: "200px" }}>
            <FullButton title="Load More" action={() => alert("clicked")} />
          </div>
        </div>
      </div>
      <FastTrackSection />
    </section>
  );
}
