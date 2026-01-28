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
      <div className="w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-10 mt-10 lg:grid-cols-2">
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
            <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              {productName}
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
              {productDesription}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-6 mt-4">
              <a
                href={tryDemo}
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Try Demo
              </a>

              <a
                href={learnMore}
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Learn More
              </a>
            </div>

            {/* Store Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-6">
              <a href={googlePlay}>
                <img
                  src="/media/images/googlePlayBadge.svg"
                  alt="Get it on Google Play"
                  className="w-auto h-10"
                />
              </a>

              <a href={appStore}>
                <img
                  src="/media/images/appstoreBadge.svg"
                  alt="Download on the App Store"
                  className="w-auto h-10"
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
