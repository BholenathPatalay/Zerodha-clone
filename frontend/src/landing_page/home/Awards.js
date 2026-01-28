import React from "react";

function Awards() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start py-6 sm:py-8 lg:py-10">
            <img
              src="/media/images/largestBroker.svg"
              alt="Largest broker"
              className="w-full max-w-md sm:max-w-lg"
            />
          </div>

          {/* Right Content */}
          <div className="py-6 sm:py-8 lg:py-10">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Largest stock broker in India
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg">
              2+ million Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>

            {/* List */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ul className="space-y-3 list-disc list-inside text-gray-700">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>

              <ul className="space-y-3 list-disc list-inside text-gray-700">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>

            {/* Press Logos */}
            <div className="mt-8">
              <img
                src="/media/images/pressLogos.png"
                alt="Press logos"
                className="w-full max-w-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
