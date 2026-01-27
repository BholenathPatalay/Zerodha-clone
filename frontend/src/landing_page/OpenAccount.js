import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
            Open a Zerodha account
          </h1>

          <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-600">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&amp;O trades.
          </p>

          <Link
            to="/signup"
            className="mt-6 inline-block rounded-md bg-[#387ED1] px-7 py-3 text-sm sm:text-base font-medium text-white hover:bg-[#2f6bb5] transition"
          >
            Sign up Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;
