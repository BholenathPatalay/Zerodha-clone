import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  const partners = [
    {
      img: "media/images/smallcaseLogo.png",
      text: "Thematic investment platform",
    },
    {
      img: "media/images/streakLogo.png",
      text: "Algo & strategy platform",
    },
    {
      img: "media/images/sensibullLogo.svg",
      text: "Options trading platform",
    },
    {
      img: "media/images/zerodhaFundhouse.png",
      text: "Asset management",
    },
    {
      img: "media/images/goldenpiLogo.png",
      text: "Bonds trading platform",
    },
    {
      img: "media/images/dittoLogo.png",
      text: "Insurance advisory",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-12 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
            The Zerodha Universe
          </h1>

          <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-600">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          {/* Logos Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {partners.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <img
                  src={item.img}
                  alt="Partner"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <p className="text-sm text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-12 pb-12">
            <Link
              to="/signup"
              className="inline-block rounded-md bg-[#387ED1] px-7 py-3 text-sm sm:text-base font-medium text-white hover:bg-[#2f6bb5] transition"
            >
              Signup Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Universe;
