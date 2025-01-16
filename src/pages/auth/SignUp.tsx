import { useState } from "react";
import Logo from "@assets/svg/Logo.svg";
import { signup } from "@utils/lib/Api";
import VerticalAccordion from "./components/VerticalAccordion";

const Step1 = ({ formData, handleChange }) => (
  <>
    <div className="bg-slate-950 rounded-lg">
      <div className="relative bg-inherit">
        <input
          className="peer bg-transparent h-10 w-80 rounded-lg text-gray-200 placeholder-transparent ring-2 px-4 ring-transparent focus:ring-sky-600 focus:outline-none "
          placeholder="Enter your name"
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all rounded-lg"
          htmlFor="name"
        >
          Name
        </label>
      </div>
    </div>
    <div className="bg-slate-950 rounded-lg">
      <div className="relative bg-inherit">
        <input
          className="peer bg-transparent h-10 w-80 rounded-lg text-gray-200 placeholder-transparent ring-2 px-4 ring-transparent focus:ring-sky-600 focus:outline-none "
          placeholder="Enter your username"
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all rounded-lg"
          htmlFor="username"
        >
          Username
        </label>
      </div>
    </div>
  </>
);

const Step2 = ({ formData, handleChange }) => (
  <>
    <div className="bg-slate-950 rounded-lg">
      <div className="relative bg-inherit">
        <input
          className="peer bg-transparent h-10 w-80 rounded-lg text-gray-200 placeholder-transparent ring-2 px-4 ring-transparent focus:ring-sky-600 focus:outline-none "
          placeholder="Select your birthday"
          id="birthday"
          name="birthday"
          type="date"
          value={formData.birthday}
          onChange={handleChange}
          required
        />
        <label
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all rounded-lg"
          htmlFor="birthday"
        >
          Birthday
        </label>
      </div>
    </div>
    <div className="bg-slate-950 rounded-lg">
      <div className="relative bg-inherit">
        <input
          className="peer bg-transparent h-10 w-80 rounded-lg text-gray-200 placeholder-transparent ring-2 px-4 ring-transparent focus:ring-sky-600 focus:outline-none "
          placeholder="Enter your email"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all rounded-lg"
          htmlFor="email"
        >
          Email
        </label>
      </div>
    </div>
  </>
);

const Step3 = ({ formData, handleChange }) => (
  <>
    <div className="bg-slate-950 rounded-lg">
      <div className="relative bg-inherit">
        <input
          className="peer bg-transparent h-10 w-80 rounded-lg text-gray-200 placeholder-transparent ring-2 px-4 ring-transparent focus:ring-sky-600 focus:outline-none "
          placeholder="Enter your password"
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all rounded-lg"
          htmlFor="password"
        >
          Password
        </label>
      </div>
    </div>
    <div className="bg-slate-950 rounded-lg">
      <div className="relative bg-inherit">
        <input
          className="peer bg-transparent h-10 w-80 rounded-lg text-gray-200 placeholder-transparent ring-2 px-4 ring-transparent focus:ring-sky-600 focus:outline-none "
          placeholder="Confirm your password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <label
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all rounded-lg"
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
      </div>
    </div>
  </>
);

const Step4 = ({ formData, handleChange }) => (
  <>
    <div className="bg-slate-950 rounded-lg">
      <div className="relative bg-inherit">
        <input
          className="peer bg-transparent h-10 w-80 rounded-lg text-gray-200 placeholder-transparent ring-2 px-4 ring-transparent focus:ring-sky-600 focus:outline-none "
          placeholder="Enter your phone number"
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all rounded-lg"
          htmlFor="phone"
        >
          Mobile Phone (with country code)
        </label>
      </div>
    </div>
  </>
);

const Step5 = ({ formData, handleChange }) => (
  <>
    <div className="bg-slate-950 rounded-lg">
      <div className="relative bg-inherit">
        <input
          className="peer bg-transparent h-10 w-80 rounded-lg text-gray-200 placeholder-transparent ring-2 px-4 ring-transparent focus:ring-sky-600 focus:outline-none "
          placeholder="Enter your city"
          id="city"
          name="city"
          type="text"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <label
          className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all rounded-lg"
          htmlFor="city"
        >
          City
        </label>
      </div>
    </div>
  </>
);

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    birthday: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
  });

  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => setStep((prevStep) => Math.min(prevStep + 1, 5));
  const handleBack = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const response = await signup(
        formData.name,
        formData.username,
        formData.birthday,
        formData.email,
        formData.password,
        formData.phone,
        formData.city
      );
      setMessage(response.statusText);
      if (response.ok) {
        window.location.href = "/login";
      }
    } catch (error: any) {
      setMessage("Error: " + (error.message || "Something went wrong"));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen overflow-hidden">
      <div className="flex-1 h-screen">
        <VerticalAccordion />
      </div>
      <div className="h-screen flex justify-center items-center bg-slate-950 py-2 right-0 flex-0 w-5/12">
        <div className="bg-gradient-to-r from-sky-800 to-indigo-800 rounded-xl m-4 h-full flex w-full">
          <div className="flex flex-col items-center justify-center rounded-md bg-slate-950 shadow-lg m-2 relative w-full">
            <div className="absolute top-8">
              <a href="/" className="flex items-center cursor-pointer">
                <img
                  src={Logo}
                  alt="Logo"
                  className="mx-auto h-24 2xl:h-40  relative"
                />
              </a>
              <h1 className="pb-4 font-bold dark:text-gray-400 text-2xl text-center cursor-default">
                Sign Up
              </h1>
            </div>
            <form className="space-y-2" onSubmit={handleSubmit}>
              {message && (
                <div className="text-red-600 text-center mb-4">{message}</div>
              )}
              {step === 1 && (
                <Step1 formData={formData} handleChange={handleChange} />
              )}
              {step === 2 && (
                <Step2 formData={formData} handleChange={handleChange} />
              )}
              {step === 3 && (
                <Step3 formData={formData} handleChange={handleChange} />
              )}
              {step === 4 && (
                <Step4 formData={formData} handleChange={handleChange} />
              )}
              {step === 5 && (
                <Step5 formData={formData} handleChange={handleChange} />
              )}
              <div className="flex justify-between w-full">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-gray-300 text-black rounded-lg p-2 min-w-[100px]"
                  >
                    Back
                  </button>
                )}
                <button
                  type={step < 5 ? "button" : "submit"}
                  onClick={step < 5 ? handleNext : undefined}
                  className="bg-blue-500 text-white rounded-lg p-2 min-w-[100px]"
                >
                  {step < 5 ? "Next" : "Sign Up"}
                </button>
              </div>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3 className="text-gray-300">
                Already have an account?{" "}
                <a
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                  href="/login"
                >
                  <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Sign in
                  </span>
                </a>
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 absolute bottom-0 p-2">
              <span>or</span>
              <div className="flex items-center justify-center flex-wrap [&>button]:shadow-slate-800/80 [&>button]:bg-slate-900">
                <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                  <img
                    className="w-6"
                    src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                    alt="Google"
                  />
                </button>
                <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                  <img
                    className="w-6 filter invert"
                    src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                    alt="Github"
                  />
                </button>
                <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                  <img
                    className="w-6"
                    src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                    alt="Facebook"
                  />
                </button>
              </div>
              <div className="text-slate-500 flex text-center flex-col items-center text-xs">
                <p className="cursor-default">
                  By signing up, you agree to our{" "}
                  <a
                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                    href="#"
                  >
                    <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Terms and Privacy Policy
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
