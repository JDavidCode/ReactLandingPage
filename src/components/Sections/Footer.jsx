import * as React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Copyright() {
  return (
    <p className="text-sm text-gray-500 mt-4">
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
    <section id="footer" className="flex flex-col items-center py-2 bg-gray-800 text-center sm:text-left pb-10">
      <div className="flex flex-col sm:flex-row justify-between w-10/12 mx-auto container">
        <div className="flex flex-col w-full sm:w-3/5">
          <div className="w-full sm:w-3/5 pb-3">
            <p className="font-semibold text-sm mb-2">Newsletter</p>
            <p className="text-sm text-gray-500 mb-4">
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
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-center pt-4 opacity-80 mr-10">
              By clicking &quot;subscribe&quot; you agree to our&nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Terms & Conditions
              </a>
              .
            </p>
          </div>
        </div>

        <div className="hidden sm:flex flex-col gap-2">
          <p className="font-semibold text-sm">Legal</p>
          <a href="#" className="text-gray-500 hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-gray-500 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-500 hover:underline">
            Data Policy
          </a>
          <a href="#" className="text-gray-500 hover:underline">
            Cookies
          </a>
        </div>

        <div className="hidden sm:flex flex-col gap-2">
          <p className="font-semibold text-sm">Company</p>
          <a href="#" className="text-gray-500 hover:underline">
            About us
          </a>
          <a href="#" className="text-gray-500 hover:underline">
            Events
          </a>
          <a href="#" className="text-gray-500 hover:underline">
            Contact
          </a>
        </div>
      </div>

      <div className="flex justify-between items-center w-10/12 mt-12 container">
        <Copyright />
        <div className="flex gap-2 text-gray-500">
          <a
            href="https://github.com/mui"
            aria-label="GitHub"
            className="hover:text-gray-700"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/MaterialUI"
            aria-label="Twitter"
            className="hover:text-gray-700"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            className="hover:text-gray-700"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
