import React, { useState } from "react";
import { ClockIcon, PhoneCallingIcon, PointOfMapIcon } from "@icons";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  newsletter: boolean;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    newsletter: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted:", formData);
      // Handle form submission logic (e.g., API call)
    }
  };

  return (
    <section className="w-full">
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 border-l-4 rounded-md shadow-md shadow-slate-900">
          <div className="bg-slate-900 md:col-span-4 p-10 text-white">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">
              Contact
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span className="text-indigo-600">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>

            <div className="flex items-center mt-5 gap-2">
              <PointOfMapIcon className="w-7 h-7 text-indigo-600" />
              <span className="text-sm">144 Wall Street, EE UU.</span>
            </div>
            <div className="flex items-center mt-5 gap-2">
              <PhoneCallingIcon className="w-7 h-7 text-indigo-600" />
              <span className="text-sm">+00 00 000 0000 000</span>
            </div>
            <div className="flex items-center mt-5 gap-2">
              <ClockIcon className="w-7 h-7 text-indigo-600" />
              <span className="text-sm">24/7</span>
            </div>
          </div>
          <form className="md:col-span-8 p-10" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className={`appearance-none block w-full text-gray-700 border ${
                    errors.firstName ? "border-red-500" : "border-gray-200"
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jane"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs italic">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className={`appearance-none block w-full text-gray-700 border ${
                    errors.lastName ? "border-red-500" : "border-gray-200"
                  } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs italic">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className={`appearance-none block w-full text-gray-700 border ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="********@*****.**"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  className={`appearance-none block w-full text-gray-700 border ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  id="message"
                  name="message"
                  rows={10}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs italic">
                    {errors.message}
                  </p>
                )}
              </div>
              <div className="flex justify-between w-full px-3">
                <div className="md:flex md:items-center">
                  <input
                    id="check_news"
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="hidden peer"
                  />
                  <label
                    htmlFor="check_news"
                    className="select-none cursor-pointer flex items-center justify-center rounded-lg border-2 border-slate-200/40
            py-3 px-6 font-bold text-slate-400 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200"
                  >
                    <span>Send me your newsletter!</span>
                  </label>
                </div>
                <button
                  className="shadow bg-indigo-800 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
