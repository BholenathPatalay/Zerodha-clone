import React from "react";

function Education() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Free and open market education
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>

            <a
              href="#"
              className="mt-3 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              Varsity <span className="text-lg">→</span>
            </a>

            <p className="mt-8 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>

            <a
              href="#"
              className="mt-3 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
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
