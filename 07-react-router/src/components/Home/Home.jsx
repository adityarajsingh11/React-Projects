import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      {/* Hero Section */}
      <aside className="relative overflow-hidden bg-gray-100 text-black rounded-xl my-10 sm:mx-16 py-12 sm:py-20">
        {/* Left Content */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full sm:w-1/2 text-center sm:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Download Now
              <span className="block text-orange-700 mt-2">React Router Resources</span>
            </h1>
            <p className="text-lg text-gray-700">
              Enhance your React skills with beautifully crafted components and resources. Simple, powerful, and fast.
            </p>
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-700 text-white font-medium text-lg rounded-lg hover:bg-orange-800 transition"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              Download now
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
            <img
              className="w-80 sm:w-[420px] drop-shadow-xl rounded-lg transition-transform duration-500 hover:scale-105"
              src="https://media.geeksforgeeks.org/wp-content/uploads/20241015164833163844/React-Router.webp"
              alt="React Router Visual"
            />
          </div>
        </div>
      </aside>

      {/* Centered Image */}
      <div className="flex justify-center my-10">
        <img
          className="w-64 sm:w-[500px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20241015164833163844/React-Router.webp"
          alt="React Router Preview"
        />
      </div>

      {/* Title */}
      <h1 className="text-center text-3xl sm:text-5xl font-semibold py-10 text-gray-800">
        Learn React Router Effortlessly
      </h1>
    </div>
  );
}
