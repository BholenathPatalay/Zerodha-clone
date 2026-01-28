import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  const partners = [
    {
      img: "/media/images/smallcaseLogo.png",
      text: "Thematic investment platform",
    },
    {
      img: "/media/images/streakLogo.png",
      text: "Algo & strategy platform",
    },
    {
      img: "/media/images/sensibullLogo.svg",
      text: "Options trading platform",
    },
    {
      img: "/media/images/zerodhaFundhouse.png",
      text: "Asset management",
    },
    {
      img: "/media/images/goldenpiLogo.png",
      text: "Bonds trading platform",
    },
    {
      img: "/media/images/dittoLogo.png",
      text: "Insurance advisory",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mt-12 text-center">
          <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
            The Zerodha Universe
          </h1>

          <p className="mt-3 text-sm text-gray-600 sm:text-base lg:text-lg">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          {/* Logos Grid */}
          <div className="grid grid-cols-1 gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <img
                  src={item.img}
                  alt="Partner"
                  className="object-contain w-auto h-10 sm:h-12"
                />
                <p className="text-sm text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="pb-12 mt-12">
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
