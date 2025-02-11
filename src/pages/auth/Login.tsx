import { useState } from "react";
import Logo from "@assets/IconV1White.png";
import { login } from "../../utils/lib/Api";
import AnimatedGrid from "./components/AnimatedGrid";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login(userName, password);
    if (response) {
      console.log("Logged in successfully!");
      setErrorMessage(response.json);
    } else {
      setErrorMessage(response.json);
      console.error("Login failed:", response);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen overflow-hidden">
      <div className="flex-1 h-screen w-screen absolute">
        <AnimatedGrid
          itemsLeft={[
            "Cloud",
            "API",
            "Blockchain",
            "Network",
            "DevOps",
            "Quantum",
            "5G",
            "Encryption",
            "Edge Computing",
            "Virtualization",
            "Microservices",
            "Automation",
            "Serverless",
            "Containers",
            "SaaS",
          ]}
          itemsCenter={[
            "Data",
            "IoT",
            "Algorithm",
            "Machine Learning",
            "Artificial Intelligence",
            "Big Data",
            "Cloud Computing",
            "Neural Networks",
            "NLP",
            "Deep Learning",
            "Cybersecurity",
            "Virtual Reality",
            "Augmented Reality",
            "Data Analytics",
            "API Integration",
          ]}
          itemsRight={[
            "SDK",
            "Kubernetes",
            "CI/CD",
            "Docker",
            "Git",
            "Agile",
            "RESTful",
            "GraphQL",
            "Python",
            "JavaScript",
            "TypeScript",
            "Ruby",
            "PHP",
            "Go",
            "Java",
          ]}
        />{" "}
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
                Log In
              </h1>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {message && (
                <div className="text-red-600 text-center mb-4">{message}</div>
              )}
              <div>
                <label htmlFor="username" className="mb-2 text-lg">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  placeholder="username"
                  autoComplete="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="p-3 border-none shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 rounded-lg w-full"
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-2 text-lg">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="p-3 border-none shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 rounded-lg w-full"
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
            <div className="flex flex-col items-center justify-center text-sm">
              <h3 className="text-gray-300">
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
            <div className="flex flex-col items-center justify-center gap-2 absolute bottom-0 p-2 text-slate-100">
              <span>Login with</span>
              <div className="flex items-center justify-center flex-wrap [&>button]:shadow-slate-800/60 [&>button]:bg-slate-900">
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
              <div className="flex text-center flex-col items-center text-xs">
                <p className="cursor-default">
                  By signing in, you agree to our{" "}
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
