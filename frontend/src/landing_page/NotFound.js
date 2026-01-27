import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[60vh] flex items-center justify-center py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900">
              404
            </h1>

            <p className="mt-3 text-base sm:text-lg text-gray-600">
              Sorry, the page you are looking for does not exist.
            </p>

            <Link
              to="/"
              className="mt-6 inline-block rounded-md bg-[#387ED1] px-7 py-3 text-sm sm:text-base font-medium text-white hover:bg-[#2f6bb5] transition"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
