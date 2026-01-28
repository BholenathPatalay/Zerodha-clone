import React from "react";

function Team() {
  return (
    <section className="w-full">
      <div className="w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Title */}
        <div className="pt-8 mt-10 border-t">
          <h1 className="text-2xl font-semibold text-center sm:text-3xl">
            People
          </h1>
        </div>

        {/* Content */}
        <div className="mt-8 text-gray-500">
          <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left */}
            <div className="text-center">
              <img
                src="/media/images/nithinKamath.jpg"
                alt="Nithin Kamath"
                className="w-40 mx-auto rounded-full sm:w-52 md:w-60"
              />
              <h4 className="mt-6 text-lg font-semibold text-gray-800 sm:text-xl">
                Nithin Kamath
              </h4>
              <h6 className="text-sm text-gray-600 sm:text-base">
                Founder, CEO
              </h6>
            </div>

            {/* Right */}
            <div className="space-y-4 text-base leading-relaxed sm:text-lg">
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
