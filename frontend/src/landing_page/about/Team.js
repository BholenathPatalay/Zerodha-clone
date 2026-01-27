import React from "react";

function Team() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mt-10 border-t pt-8">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold">
            People
          </h1>
        </div>

        {/* Content */}
        <div className="mt-8 text-gray-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left */}
            <div className="text-center">
              <img
                src="media/images/nithinKamath.jpg"
                alt="Nithin Kamath"
                className="mx-auto w-40 sm:w-52 md:w-60 rounded-full"
              />
              <h4 className="mt-6 text-lg sm:text-xl font-semibold text-gray-800">
                Nithin Kamath
              </h4>
              <h6 className="text-sm sm:text-base text-gray-600">
                Founder, CEO
              </h6>
            </div>

            {/* Right */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader.
                Today, Zerodha has changed the landscape of the Indian broking
                industry.
              </p>

              <p>
                He is a member of the SEBI Secondary Market Advisory Committee
                (SMAC) and the Market Data Advisory Committee (MDAC).
              </p>

              <p>Playing basketball is his zen.</p>

              <p>
                Connect on{" "}
                <a href="" className="text-blue-600 hover:text-blue-700">
                  Homepage
                </a>{" "}
                /{" "}
                <a href="" className="text-blue-600 hover:text-blue-700">
                  TradingQnA
                </a>{" "}
                /{" "}
                <a href="" className="text-blue-600 hover:text-blue-700">
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
