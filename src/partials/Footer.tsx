import * as React from "react";
import { Link } from "react-router-dom";
import { TwitterIcon, GitHubIcon, FacebookIcon } from "@icons";

function Copyright() {
  return (
    <p className="text-xs text-slate-300">
      {"Copyright © "}
      <Link to="/" className="hover:underline">
        Arnica
      </Link>{" "}
      {new Date().getFullYear()}
    </p>
  );
}

export default function Footer() {
  return (
    <section
      id="footer"
      className="flex flex-col items-center pt-8 bg-slate-950 text-center sm:text-left"
    >
      <div className="flex flex-col sm:flex-row justify-between w-10/12 mx-auto container">
        <div className="flex flex-col w-full sm:w-3/5">
          <div className="w-full sm:w-3/5 pb-3">
            <p className="font-semibold text-md mb-2 text-sky-700">
              Newsletter
            </p>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to our newsletter for weekly updates and promotions.
            </p>
            <div className="flex gap-2">
              <input
                id="outlined-basic"
                className="w-full p-2 border border-gray-300 rounded"
                aria-label="Enter your email address"
                placeholder="Your email address"
                autoComplete="off"
              />
              <button className="px-4 py-2 bg-blue-800 text-white rounded">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-center pt-4 opacity-80 mr-10">
              By clicking &quot;subscribe&quot; you agree to our&nbsp;
              <a href="#" className="text-sky-700 hover:underline">
                Terms & Conditions
              </a>
              .
            </p>
          </div>
        </div>

        <div className="hidden sm:flex flex-col gap-2 [&>a]:text-sm">
          <p className="font-semibold text-md text-sky-700">Legal</p>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-300 hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-300 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-300 hover:underline"
          >
            Data Policy
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-300 hover:underline"
          >
            Cookies
          </a>
        </div>

        <div className="hidden sm:flex flex-col gap-2 [&>a]:text-sm">
          <p className="font-semibold text-md text-sky-700">Company</p>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-300 hover:underline"
          >
            About us
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-300 hover:underline"
          >
            Events
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-300 hover:underline"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="flex justify-between items-center w-10/12 mt-12 container py-3 px-12 rounded-t-md bg-slate-900">
        <Copyright />
        <div className="flex gap-2 text-slate-300">
          <a
            href="https://github.com/mui"
            aria-label="GitHub"
            className="hover:text-slate-400"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://twitter.com/MaterialUI"
            aria-label="Twitter"
            className="hover:text-sky-700"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            className="hover:text-blue-700"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
