import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="w-full bg-white border-b">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-10 sm:pt-14 lg:pt-16 pb-8 sm:pb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Technology
          </h1>

          <h3 className="mt-3 text-gray-500 text-base sm:text-lg">
            Sleek, modern and intuitive trading platforms
          </h3>

          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Check out our{" "}
            <Link
              to="/product"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
            >
              investment offerings <span className="text-lg">→</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
