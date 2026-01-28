import React from "react";

function Education() {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-8 mt-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/media/images/education.svg"
              alt="Education"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
            />
          </div>

          {/* Right Content */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Free and open market education
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-3 font-medium text-blue-600 hover:text-blue-700"
            >
              Varsity <span className="text-lg">→</span>
            </a>

            <p className="mt-8 text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-3 font-medium text-blue-600 hover:text-blue-700"
            >
              TradingQ&amp;A <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
