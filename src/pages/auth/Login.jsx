import React, { useState } from "react";
import Logo from "../../assets/svg/Logo.svg";
import Svg from "../../assets/svg/stars.svg";
import { login } from "../../utils/lib/Api";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userAgent = navigator.userAgent;
    const ipAddress = "127.0.0.1";
    const response = await login(userName, password, ipAddress, userAgent);
    if (response) {
      console.log("Logged in successfully!");
    } else {
      setErrorMessage(response.json);
      console.error("Login failed:", response);
    }
  };

  return (
    <div className="flex min-h-full min-w-full overflow-hidden">
      <div className="min-h-full w-9/12 p-24 flex flex-1">
        <img src={Svg} alt="" className="" />
      </div>
      <div className="right-0 flex-0">
        <div class="flex font-poppins items-center justify-center">
          <div class="h-screen flex justify-center items-center dark:bg-gray-900">
            <div class="grid gap-8">
              <div
                id="back-div"
                class="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl m-4 h-[95dvh] my-auto"
              >
                <a href="/" className="flex items-center cursor-pointer">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="mx-auto h-24 2xl:h-40 my-[-20px] relative"
                  />
                </a>
                <div class="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg md:px-8 md:py-4 sm:p-2 m-2 min-h-[85%] flex items-center justify-center flex-col">
                  <h1 class="pb-4 font-bold dark:text-gray-400 text-2xl text-center cursor-default">
                    Log in
                  </h1> 
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {errorMessage && (
                      <div className="text-red-600 text-center mb-4">
                        {errorMessage}
                      </div>
                    )}
                    <div>
                      <label
                        htmlFor="username"
                        class="mb-2  dark:text-gray-400 text-lg"
                      >
                        Username
                      </label>
                      <input
                        id="username"
                        class="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
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
                        class="mb-2 dark:text-gray-400 text-lg"
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
                        class="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                      />
                    </div>
                    <a
                      class="group text-blue-400 transition-all duration-100 ease-in-out"
                      href="#"
                    >
                      <span class="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        Forget your password?
                      </span>
                    </a>
                    <button
                      class="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                      type="submit"
                    >
                      LOG IN
                    </button>
                  </form>
                  <div class="flex flex-col mt-4 items-center justify-center text-sm">
                    <h3 class="dark:text-gray-300">
                      Don't have an account?{" "}
                      <a
                        class="group text-blue-400 transition-all duration-100 ease-in-out"
                        href="/signup"
                      >
                        <span class="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                          Sign Up
                        </span>
                      </a>
                    </h3>
                  </div>
                  <div
                    id="third-party-auth"
                    class="flex items-center justify-center mt-5 flex-wrap"
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
                      By signing in, you agree to our{" "}
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
