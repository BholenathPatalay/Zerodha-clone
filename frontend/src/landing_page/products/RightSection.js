import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:pr-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              {productName}
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              {productDesription}
            </p>

            <div className="mt-4">
              <a
                href={learnMore}
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
              >
                Learn More <span className="text-lg">→</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={imageURL}
              alt={productName}
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightSection;
