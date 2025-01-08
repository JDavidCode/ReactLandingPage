import { useState } from "react";
import Logo from "../../assets/svg/Logo.svg";
import Svg from "../../assets/svg/counting_stars.svg";
import { signup } from "../../utils/lib/Api";

const Step1 = ({ formData, handleChange }) => (
  <>
    <div>
      <label
        htmlFor="name"
        className="dark:text-gray-400 text-xs font-semibold"
      >
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
        className="border p-1 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
      />
    </div>
    <div>
      <label
        htmlFor="username"
        className="dark:text-gray-400 text-xs font-semibold"
      >
        Username
      </label>
      <input
        id="username"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
        required
        className="border p-1 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
      />
    </div>
  </>
);

const Step2 = ({ formData, handleChange }) => (
  <>
    <div>
      <label
        htmlFor="birthday"
        className="dark:text-gray-400 text-xs font-semibold"
      >
        Birthday
      </label>
      <input
        id="birthday"
        name="birthday"
        type="date"
        value={formData.birthday}
        onChange={handleChange}
        required
        className="border p-1 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
      />
    </div>
    <div>
      <label
        htmlFor="email"
        className="dark:text-gray-400 text-xs font-semibold"
      >
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-1 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
      />
    </div>
  </>
);

const Step3 = ({ formData, handleChange }) => (
  <>
    <div>
      <label
        htmlFor="password"
        className="dark:text-gray-400 text-xs font-semibold"
      >
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
        className="border p-1 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
      />
    </div>
    <div>
      <label
        htmlFor="confirmPassword"
        className="dark:text-gray-400 text-xs font-semibold"
      >
        Confirm Password
      </label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        className="border p-1 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
      />
    </div>
  </>
);
const Step4 = ({ formData, handleChange }) => (
  <>
    <div className="flex flex-col">
      <label
        htmlFor="phone"
        className="dark:text-gray-400 text-xs font-semibold"
      >
        Mobile Phone (with country code)
      </label>
      <input
        id="phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        required
        placeholder="+1 234 567 8901" // Placeholder for country code
        className="border p-1 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
      />
    </div>
  </>
);

const Step5 = ({ formData, handleChange }) => (
  <>
    <div>
      <label
        htmlFor="city"
        className="dark:text-gray-400 text-xs font-semibold"
      >
        City
      </label>
      <input
        id="city"
        name="city"
        type="text"
        value={formData.city}
        onChange={handleChange}
        required
        className="border p-1 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
      />
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
    } catch (error) {
      setMessage("Error: " + (error.message || "Something went wrong"));
    }
  };

  return (
    <div className="flex min-h-full min-w-full overflow-hidden">
      <div className="min-h-full w-9/12 p-24 hidden lg:flex flex-1 overflow-hidden max-h-screen">
        <img src={Svg} alt="" className="" />
      </div>
      <div className="right-0 flex-0">
        <div className="flex font-poppins items-center justify-center">
          <div className="h-screen flex justify-center items-center dark:bg-gray-900">
            <div
              id="back-div"
              className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl m-4 h-[95dvh] my-auto flex "
            >
              <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg m-2 flex items-center justify-center flex-col w-96">
                <a href="/" className="flex items-center cursor-pointer">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="mx-auto h-24 2xl:h-40 relative"
                  />
                </a>
                <h1 className="pb-4 font-bold dark:text-gray-400 text-2xl text-center cursor-default">
                  Sign Up
                </h1>
                <form className="space-y-2" onSubmit={handleSubmit}>
                  {message && (
                    <div className="text-red-600 text-center mb-4">
                      {message}
                    </div>
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
                  <h3 className="dark:text-gray-300">
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
                <span className="text-xs my-2">or</span>
                <div
                  id="third-party-auth"
                  className="flex items-center justify-center flex-wrap [&>button]:shadow-gray-600/70"
                >
                  <button
                    href="#"
                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                  >
                    <img
                      className="max-w-[25px]"
                      src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                      alt="Google"
                    />
                  </button>
                  <button
                    href="#"
                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                  >
                    <img
                      className="max-w-[25px] filter dark:invert"
                      src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                      alt="Github"
                    />
                  </button>
                  <button
                    href="#"
                    className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                  >
                    <img
                      className="max-w-[25px]"
                      src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                      alt="Facebook"
                    />
                  </button>
                </div>
                <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                  <p className="cursor-default text-xs">
                    By signing up, you agree to our{" "} <br />
                    <a
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="#"
                    >
                      <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Terms{" "}
                      </span>
                    </a>
                    and{" "}
                    <a
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="#"
                    >
                      <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Privacy Policy
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
