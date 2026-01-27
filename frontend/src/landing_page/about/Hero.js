import React from "react";

function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="py-10 sm:py-14 lg:py-16">
          <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug text-gray-900">
            We pioneered the discount broking model in India
            <br className="hidden sm:block" />
            Now, we are breaking ground with our technology.
          </h1>
        </div>

        {/* Content */}
        <div className="border-t pt-8 sm:pt-10 lg:pt-12 text-gray-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                We kick-started operations on the 15th of August, 2010 with the
                goal of breaking all barriers that traders and investors face in
                India in terms of cost, support, and technology. We named the
                company Zerodha, a combination of Zero and "Rodha", the Sanskrit
                word for barrier.
              </p>

              <p>
                Today, our disruptive pricing models and in-house technology
                have made us the biggest stock broker in India.
              </p>

              <p>
                Over 1+ Crore clients place millions of orders every day through
                our powerful ecosystem of investment platforms, contributing
                over 15% of all Indian retail trading volumes.
              </p>
            </div>

            {/* Right */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                In addition, we run a number of popular open online educational
                and community initiatives to empower retail traders and
                investors.
              </p>

              <p>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Rainmatter
                </a>
                , our fintech fund and incubator, has invested in several
                fintech startups with the goal of growing the Indian capital
                markets.
              </p>

              <p>
                And yet, we are always up to something new every day. Catch up
                on the latest updates on our blog or see what the media is
                saying about us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
