import React from "react";
import Logo from "../../assets/svg/Logo.svg";
import Svg from "../../assets/svg/stars.svg";
import { auth } from "../../utils/api/Api";

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const email = formData.get("email");
      const password = formData.get("password");      
      const response = await auth(email, password);
      if (response.ok) {
        console.log("Logged!");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        alert("Login failed: " + errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-white flex absolute min-h-full min-w-full">
      <div className="min-h-full w-9/12 px-16 py-8">
        <img src={Svg} alt="" className="" />
      </div>
      <div className="bg-gray-200 w-1/3 px-12 pt-12">
        <div>
          <a href="/" className="flex items-center cursor-pointer">
            <img
              src={Logo}
              alt="Logo"
              className="mx-auto h-40 w-auto relative"
            />
          </a>
          <h2 className="text-center text-2xl font-bold mb-10">
            Sign in to your account
          </h2>
        </div>

        <div className="relative sm:max-w-sm">
          {/* Form con onSubmit */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                    onClick={(e) => e.preventDefault()} // Evitar comportamiento por defecto
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
