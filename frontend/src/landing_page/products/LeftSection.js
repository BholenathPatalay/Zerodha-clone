import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={imageURL}
              alt={productName}
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
            />
          </div>

          {/* Right Content */}
          <div className="lg:pl-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              {productName}
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              {productDesription}
            </p>

            {/* Links */}
            <div className="mt-4 flex flex-wrap gap-6">
              <a
                href={tryDemo}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Try Demo
              </a>

              <a
                href={learnMore}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More
              </a>
            </div>

            {/* Store Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                />
              </a>

              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
