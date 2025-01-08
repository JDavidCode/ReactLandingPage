import React, { useState } from "react";
import Logo from "../../assets/svg/Logo.svg";
import Svg from "../../assets/svg/stars.svg";
import { login } from "../../utils/lib/Api";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userAgent = navigator.userAgent;
    const ipAddress = "127.0.0.1";
    const response = await login(userName, password, ipAddress, userAgent);
    if (response) {
      console.log("Logged in successfully!");
      setErrorMessage(response.json);
    } else {
      setErrorMessage(response.json);
      console.error("Login failed:", response);
    }
  };

  return (
    <div className="flex min-h-full min-w-full overflow-hidden justify-center items-center">
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
              <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg m-2 flex items-center justify-center flex-col">
                <a href="/" className="flex items-center cursor-pointer">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="mx-auto h-24 2xl:h-40  relative"
                  />
                </a>
                <h1 className="pb-4 font-bold dark:text-gray-400 text-2xl text-center cursor-default">
                  Log in
                </h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {message && (
                    <div className="text-red-600 text-center mb-4">
                      {message}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="username"
                      className="mb-2  dark:text-gray-400 text-lg"
                    >
                      Username
                    </label>
                    <input
                      id="username"
                      className="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                      type="username"
                      placeholder="username"
                      autoComplete="userName"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 dark:text-gray-400 text-lg"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                      className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                    />
                  </div>
                  <a
                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                    href="#"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Forget your password?
                    </span>
                  </a>
                  <button
                    className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                    type="submit"
                  >
                    LOG IN
                  </button>
                </form>
                
                <div className="flex flex-col mt-4 items-center justify-center text-sm">
                  <h3 className="dark:text-gray-300">
                    Don't have an account?{" "}
                    <a
                      className="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="/signup"
                    >
                      <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Sign Up
                      </span>
                    </a>
                  </h3>
                </div>
                <div
                  id="third-party-auth"
                  className="flex items-center justify-center mt-5 flex-wrap"
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
                  <p className="cursor-default">
                    By signing in, you agree to our{" "}
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
