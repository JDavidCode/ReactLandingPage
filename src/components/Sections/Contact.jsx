import React from "react";

import HangoutSvg from "../../assets/svg/group_hangout.svg";

export default function Contact() {
  return (
    <section id="contact" className="w-full">
      <div className="bg-gray-100">
        <div className="container mx-auto w-10/12 pt-16">
          <div className="w-9/12 relative">
            <h1 className="text-4xl font-extrabold text-black pt-12">
              Get in Touch
            </h1>
            <p className="text-sm pt-2 pb-8">
              We invite you to connect with us for any collaboration opportunities.
              <br />
              Our team is here to assist you in navigating the process and
              ensuring a smooth experience.
            </p>
          </div>
          <div className="flex flex-col md:flex-row pb-16">
            <div className="md:w-1/2 pr-4">
              <form className="">
                <label className="text-sm">First name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="font-bold text-sm w-full bg-transparent border-b border-gray-700 mb-4 h-[1.8rem] outline-none border-t-0 border-l-0 border-r-0"
                />

                <label className="text-sm">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="font-bold text-sm w-full bg-transparent border-b border-gray-700 mb-4 h-[1.8rem] outline-none border-t-0 border-l-0 border-r-0"
                />

                <label className="text-sm">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="font-bold text-sm w-full bg-transparent border-b border-gray-700 mb-4 h-[1.8rem] outline-none border-t-0 border-l-0 border-r-0"
                />

                <textarea
                  rows="4"
                  id="message"
                  name="message"
                  className="font-bold text-sm w-full bg-transparent border-b border-gray-700 mb-4 h-[1.8rem] outline-none border-t-0 border-l-0 border-r-0 min-h-[100px]"
                />

                <div className="flex">
                  <input
                    type="submit"
                    value="Send Message"
                    className="pointer animate rounded-lg border border-cyan-700 bg-cyan-700 w-full p-2 text-white hover:bg-cyan-800"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              </form>
            </div>
            <div className="relative mx-auto top-[-2rem]">
              <img
                className="rounded-lg w-full h-auto p-5"
                src={HangoutSvg}
                alt="add"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
