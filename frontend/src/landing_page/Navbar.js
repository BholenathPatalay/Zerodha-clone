import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Signup", path: "/signup" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/product" },
    { name: "Pricing", path: "/pricing" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
      <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/media/images/logo.svg"
            alt="Logo"
            className="w-auto h-7 sm:h-8"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="items-center hidden gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-[15px] font-medium text-gray-700 hover:text-black"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center p-2 text-gray-700 rounded-md hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block h-[2px] w-6 bg-gray-700"></span>
            <span className="block h-[2px] w-6 bg-gray-700"></span>
            <span className="block h-[2px] w-6 bg-gray-700"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-white border-t lg:hidden">
          <ul className="flex flex-col max-w-6xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block rounded-md px-3 py-2 text-[15px] font-medium text-gray-700 hover:bg-gray-100 hover:text-black"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
