import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Trust with confidence
            </h1>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Customer-first always
              </h2>
              <p className="mt-2 text-gray-500 text-sm sm:text-base leading-relaxed">
                That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
                crores worth of equity investments.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                No spam or gimmicks
              </h2>
              <p className="mt-2 text-gray-500 text-sm sm:text-base leading-relaxed">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                The Zerodha universe
              </h2>
              <p className="mt-2 text-gray-500 text-sm sm:text-base leading-relaxed">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Do better with money
              </h2>
              <p className="mt-2 text-gray-500 text-sm sm:text-base leading-relaxed">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>

          {/* Right Image + Links */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <img
              src="media/images/ecosystem.png"
              alt="Ecosystem"
              className="w-full max-w-xl"
            />

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-10 text-center">
              <Link
                to="/product"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
              >
                Explore our products <span className="text-lg">→</span>
              </Link>

              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
              >
                Try Kite demo <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
