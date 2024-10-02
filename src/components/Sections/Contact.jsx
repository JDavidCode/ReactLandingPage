import React from "react";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {
  return (
    <section id="contact" className="w-full pb-10 bg-gray-100">
      <div className="bg-gray-100">
        <div className="container mx-auto w-10/12 pt-10">
          <div className="py-2">
            <h1 className="text-4xl font-extrabold text-black pt-12">Let's get in touch</h1>
            <p className="text-sm pt-4 pb-8">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
          <div className="flex flex-col md:flex-row mb-8">
            <div className="md:w-1/2">
              <form className="py-16">
                <label className="text-sm">First name:</label>
                <input type="text" id="fname" name="fname" className="font-bold text-lg w-full bg-transparent border-b border-gray-700 mb-8 outline-none" />
                
                <label className="text-sm">Email:</label>
                <input type="text" id="email" name="email" className="font-bold text-lg w-full bg-transparent border-b border-gray-700 mb-8 outline-none" />
                
                <label className="text-sm">Subject:</label>
                <input type="text" id="subject" name="subject" className="font-bold text-lg w-full bg-transparent border-b border-gray-700 mb-8 outline-none" />
                
                <textarea rows="4" id="message" name="message" className="font-bold text-lg w-full bg-transparent border-b border-gray-700 mb-8 outline-none min-h-[100px]" />
              </form>
              <div className="flex">
                <input
                  type="submit"
                  value="Send Message"
                  className="pointer animate rounded-lg border border-cyan-700 bg-cyan-700 w-full p-4 text-white hover:bg-cyan-800"
                  style={{ maxWidth: "220px" }}
                />
              </div>
            </div>
            <div className="md:w-1/2 flex flex-wrap">
              <div className="w-1/2 flex flex-col items-center">
                <div className="max-w-[180px] self-end m-2">
                  <img src={ContactImg1} alt="office" className="rounded-lg" />
                </div>
                <div className="max-w-[180px] self-end m-2">
                  <img src={ContactImg2} alt="office" className="rounded-lg" />
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="mt-24">
                  <img src={ContactImg3} alt="office" className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}