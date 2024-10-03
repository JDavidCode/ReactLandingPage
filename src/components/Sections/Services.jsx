import React from "react";

import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";

import Inspiration from "../../assets/svg/ideas_inspiration.svg";

export default function Services() {
  return (
    <section id="services" className="w-full">
      <div className="bg-gray-200 py-20">
        <div className="container justify-center mx-auto">
          <ClientSlider />
        </div>
      </div>
      <div className="mx-auto">
        <div className="container mx-auto w-10/12 mb-16">
          <div className="my-16 text-center ">
            <h1 className="text-4xl font-extrabold text-black">Services</h1>
            <p className="text-sm pt-4 pb-8 w-2/3 mx-auto">
              Discover our adaptable services designed to meet every need.
              Whether you’re an individual seeking personalized support or a
              business with unique requirements, we have the flexibility and
              expertise to deliver.
              <br />
              From tailored solutions to versatile support, experience a new
              level of service that adapts to you.
            </p>
          </div>
          <div className="flex flex-wrap pb-12">
            <div className="w-full sm:w-1/4 p-3">
              <ServiceBox
                icon="lock"
                title="Security"
                subtitle="Protect your assets with our robust security solutions."
              />
            </div>
            <div className="w-full sm:w-1/4 p-3 mx-auto">
              <ServiceBox
                icon="cloud"
                title="Cloud"
                subtitle="Seamlessly scale your operations with our cloud services."
              />
            </div>
            <div className="w-full sm:w-1/4 p-3">
              <ServiceBox
                icon="control"
                title="Customization"
                subtitle="Tailored solutions to fit your specific needs."
              />
            </div>
            <div className="w-full sm:w-1/4 p-3">
              <ServiceBox
                icon="application" 
                title="Integrations"
                subtitle="Streamline your workflow with easy integrations."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto w-11/12">
          <div className="flex flex-wrap items-center justify-between relative">
            <div className="w-full md:w-1/2 p-4">
              <h4 className="text-base font-semibold pb-3">Did you know?</h4>
              <h2 className="text-4xl font-extrabold text-black pb-3">
                Your ideas move us
              </h2>
              <p className="text-sm max-w-lg">
                We are passionate about turning your ideas into reality. Our
                team thrives on creativity and is dedicated to crafting
                innovative solutions that elevate you. Together, we can transform
                your vision into success.
              </p>

              <div className="flex justify-start mt-8">
                <div className="mr-4">
                  <FullButton
                    title="Get Started Now"
                    action={() => alert("clicked")}
                  />
                </div>
                <div>
                  <FullButton
                    title="Contact Us"
                    action={() => alert("clicked")}
                    border
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative md:right-0">
              <div className="flex flex-wrap justify-center">
                <div className="w-2/3">
                  <img
                    src={Inspiration}
                    alt="office"
                    className="h-[400px] rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
