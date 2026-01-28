import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Dashboard Image */}
        <div className="pt-10 sm:pt-14 lg:pt-16 flex justify-center">
          <img
            src="/media/images/homeHero.png"
            alt="Zerodha dashboard preview"
            className="w-full max-w-[950px] sm:max-w-[1050px] lg:max-w-[1100px] object-contain"
          />
        </div>

        {/* Text */}
        <div className="py-8 sm:py-10 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
            Invest in everything
          </h1>

          <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-600">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>

          {/* Zerodha Blue Button */}
          <Link
            to="/signup"
            className="mt-6 inline-block rounded-md bg-[#387ED1] px-7 py-3 text-sm sm:text-base font-medium text-white hover:bg-[#2f6bb5] transition"
          >
            Signup Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
