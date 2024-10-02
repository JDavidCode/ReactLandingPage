import React from "react";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/people_branches.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/tech_idea.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  return (
    <section id="services" className="w-full bg-white">
      <div className="bg-gray-200 py-16">
        <div className="container justify-center mx-auto">
          <ClientSlider />
        </div>
      </div>
      <div className="bg-white mx-auto">
        <div className="container mx-auto w-10/12 mb-16">
          <div className="my-16 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-black">Services</h1>
            <p className="text-sm pt-4 pb-8">
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
                icon="application" // Corrected to 'application'
                title="Integrations"
                subtitle="Streamline your workflow with easy integrations."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto w-11/12">
          <div className="flex flex-wrap items-center justify-between relative">
            <div className="w-full md:w-1/2 p-4">
              <h4 className="text-base font-semibold">Did you know?</h4>
              <h2 className="text-4xl font-extrabold text-black">
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
                <div className="w-1/2 p-2">
                  <img
                    src={AddImage1}
                    alt="office"
                    className="w-[285px] h-[406px] rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-1/3 p-2">
                  <img
                    src={AddImage2}
                    alt="office"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-1/4 p-2">
                  <img
                    src={AddImage3}
                    alt="office"
                    className="w-[125px] h-[125px] rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-1/3 p-2">
                  <img
                    src={AddImage4}
                    alt="office"
                    className="w-full rounded-lg shadow-lg"
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
