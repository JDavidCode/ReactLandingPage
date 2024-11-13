import React, { useState } from "react";
import Logo from "../../assets/svg/Logo.svg";
import Svg from "../../assets/svg/counting_stars.svg";
import { signup } from "../../utils/lib/Api";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    birthday: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        formData.password
      );
      setMessage(response.statusText);
      if (response.ok) {
        window.location.href = "http://localhost:5173/login";
      }
    } catch (error) {
      setMessage(
        "Error: " + (error.response?.data?.message || "Something went wrong")
      );
    }
  };

  return (
    <div className="flex min-h-full min-w-full overflow-hidden">
      <div className="min-h-full w-9/12 p-24 hidden lg:flex flex-1  overflow-hidden max-h-screen">
        <img src={Svg} alt="" className="" />
      </div>
      <div className="right-0 flex-0">
        <div className="right-0 flex-0">
          <div class="flex font-poppins items-center justify-center">
            <div class="h-screen flex justify-center items-center dark:bg-gray-900">
              <div
                id="back-div"
                class="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl m-4 h-[95dvh] my-auto flex "
              >
                <div class="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg m-2 flex items-center justify-center flex-col">
                  <a href="/" className="flex items-center cursor-pointer">
                    <img
                      src={Logo}
                      alt="Logo"
                      className="mx-auto h-24 2xl:h-40  relative"
                    />
                  </a>
                  <h1 class="pb-4 font-bold dark:text-gray-400 text-2xl text-center cursor-default">
                    Sign Up
                  </h1>
                  <form className="space-y-2" onSubmit={handleSubmit}>
                    {message && (
                      <div className="text-red-600 text-center mb-4">
                        {message}
                      </div>
                    )}
                    <div>
                      <label
                        htmlFor="name"
                        class="dark:text-gray-400 text-xs font-semibold"
                      >
                        Name
                      </label>
                      <input
                        class="border p-1 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="username"
                        class="dark:text-gray-400 text-xs font-semibold"
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
                        class="border p-1 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="birthday"
                        class="dark:text-gray-400 text-xs font-semibold"
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
                        class="border p-1 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        class="dark:text-gray-400 text-xs font-semibold"
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
                        class="border p-1 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        class="dark:text-gray-400 text-xs font-semibold"
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
                        class="border p-1 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confirmPassword"
                        class="dark:text-gray-400 text-xs font-semibold"
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
                        class="border p-1 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                      />
                    </div>
                    <button
                      class="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg p-1 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                      type="submit"
                    >
                      SIGN UP
                    </button>
                  </form>
                  <div class="flex flex-col mt-4 items-center justify-center text-sm">
                    <h3 class="dark:text-gray-300">
                      Already have an account?{" "}
                      <a
                        class="group text-blue-400 transition-all duration-100 ease-in-out"
                        href="/login"
                      >
                        <span class="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                          Sign in
                        </span>
                      </a>
                    </h3>
                  </div>
                  <span className="text-xs my-2">or</span>
                  <div
                    id="third-party-auth"
                    class="flex items-center justify-center flex-wrap"
                  >
                    <button
                      href="#"
                      class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                    >
                      <img
                        class="max-w-[25px]"
                        src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                        alt="Google"
                      />
                    </button>
                    <button
                      href="#"
                      class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                    >
                      <img
                        class="max-w-[25px] filter dark:invert"
                        src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                        alt="Github"
                      />
                    </button>
                    <button
                      href="#"
                      class="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                    >
                      <img
                        class="max-w-[25px]"
                        src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                        alt="Facebook"
                      />
                    </button>
                  </div>
                  <div class="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                    <p class="cursor-default">
                      By signing up, you agree to our{" "}
                      <a
                        class="group text-blue-400 transition-all duration-100 ease-in-out"
                        href="#"
                      >
                        <span class="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                          Terms{" "}
                        </span>
                      </a>
                      and{" "}
                      <a
                        class="group text-blue-400 transition-all duration-100 ease-in-out"
                        href="#"
                      >
                        <span class="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
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
    </div>
  );
}
