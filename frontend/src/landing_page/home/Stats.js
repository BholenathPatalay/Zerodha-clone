import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-start grid-cols-1 gap-10 py-10 sm:py-14 lg:py-16 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Trust with confidence
            </h1>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                Customer-first always
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:text-base">
                That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
                crores worth of equity investments.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                No spam or gimmicks
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:text-base">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                The Zerodha universe
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:text-base">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                Do better with money
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:text-base">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>

          {/* Right Image + Links */}
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <img
              src="/media/images/ecosystem.png"
              alt="Ecosystem"
              className="w-full max-w-xl"
            />

            <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row lg:justify-start sm:gap-10">
              <Link
                to="/product"
                className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700"
              >
                Explore our products <span className="text-lg">→</span>
              </Link>

              <a
                href="#"
                className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700"
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
