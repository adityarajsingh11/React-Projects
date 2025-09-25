import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-700 md:px-12 lg:px-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Passionate Developers Building with React
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              React is developed by a community of passionate engineers. Whether you're building UIs for the
              web, mobile, or beyond, React's component-driven approach enables fast, scalable development.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              With a focus on simplicity and performance, React lets developers build rich user interfaces with
              predictable behavior and reusable components — backed by a vibrant ecosystem.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
              alt="React illustration"
              className="w-full max-w-md mx-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
