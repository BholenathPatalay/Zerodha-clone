import React from "react";

function Hero() {
  return (
    <section className="w-full bg-[#387ED1] text-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-6">
          <h4 className="text-lg font-semibold">Support Portal</h4>
          <button className="text-white hover:underline font-medium">
            Track Tickets
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10">
          {/* Left */}
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold leading-snug">
              Search for an answer or browse help topics to create a ticket
            </h1>

            <input
              placeholder="Eg. how do I activate F&O"
              className="mt-5 w-full rounded-lg border-none px-6 py-4 text-base sm:text-lg text-gray-900 outline-none"
            />

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              <button className="text-white hover:underline">
                Track account opening
              </button>
              <button className="text-white hover:underline">
                Track segment activation
              </button>
              <button className="text-white hover:underline">
                Intraday margins
              </button>
              <button className="text-white hover:underline">
                Kite user manual
              </button>
            </div>
          </div>

          {/* Right */}
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">Featured</h1>

            <ol className="mt-5 list-decimal pl-5 space-y-3">
              <li>
                <button className="text-white hover:underline">
                  Current Takeovers and Delisting - January 2024
                </button>
              </li>
              <li>
                <button className="text-white hover:underline">
                  Latest Intraday leverages - MIS &amp; CO
                </button>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
