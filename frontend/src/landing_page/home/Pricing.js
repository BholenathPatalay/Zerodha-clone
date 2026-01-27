import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Unbeatable pricing
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>

            <Link
              to="/pricing"
              className="mt-3 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              See Pricing <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Right Cards */}
          <div className="lg:col-span-6 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 text-center">
              <div className="border p-6 sm:p-7">
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                  ₹0
                </h1>
                <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                  Free equity delivery and <br />
                  direct mutual funds
                </p>
              </div>

              <div className="border p-6 sm:p-7">
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                  ₹20
                </h1>
                <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                  Intraday and F&amp;O
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
