import React from "react";

function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pt-10 sm:pt-14 lg:pt-16 pb-8 border-b text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Pricing
          </h1>

          <h3 className="mt-3 text-gray-500 text-sm sm:text-base lg:text-lg">
            Free equity investments and flat ₹20 intraday and F&amp;O trades
          </h3>
        </div>

        {/* Cards */}
        <div className="py-10 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Card 1 */}
            <div className="px-4">
              <img
                src="media/images/pricingEquity.svg"
                alt="Free equity delivery"
                className="mx-auto w-24 sm:w-28"
              />
              <h1 className="mt-5 text-xl sm:text-2xl font-semibold text-gray-900">
                Free equity delivery
              </h1>
              <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹0 brokerage.
              </p>
            </div>

            {/* Card 2 */}
            <div className="px-4">
              <img
                src="media/images/intradayTrades.svg"
                alt="Intraday and F&O trades"
                className="mx-auto w-24 sm:w-28"
              />
              <h1 className="mt-5 text-xl sm:text-2xl font-semibold text-gray-900">
                Intraday and F&amp;O trades
              </h1>
              <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
                Flat ₹20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
              </p>
            </div>

            {/* Card 3 */}
            <div className="px-4">
              <img
                src="media/images/pricingEquity.svg"
                alt="Free direct MF"
                className="mx-auto w-24 sm:w-28"
              />
              <h1 className="mt-5 text-xl sm:text-2xl font-semibold text-gray-900">
                Free direct MF
              </h1>
              <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
                All direct mutual fund investments are absolutely free — ₹0
                commissions &amp; DP charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
