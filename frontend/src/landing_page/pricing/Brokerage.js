import React from "react";

function Brokerage() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 border-t py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-center">
            {/* Left Side */}
            <div className="lg:col-span-8">
              <button className="inline-block">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 hover:text-blue-600">
                  Brokerage calculator
                </h3>
              </button>

              <ul className="mt-6 text-left space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <li>
                  Call &amp; Trade and RMS auto-squareoff: Additional charges of
                  ₹50 + GST per order.
                </li>
                <li>Digital contract notes will be sent via e-mail.</li>
                <li>
                  Physical copies of contract notes, if required, shall be
                  charged ₹20 per contract note. Courier charges apply.
                </li>
                <li>
                  For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                  equity (whichever is lower).
                </li>
                <li>
                  For NRI account (PIS), 0.5% or ₹200 per executed order for
                  equity (whichever is lower).
                </li>
                <li>
                  If the account is in debit balance, any order placed will be
                  charged ₹40 per executed order instead of ₹20 per executed
                  order.
                </li>
              </ul>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-4">
              <button className="inline-block">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 hover:text-blue-600">
                  List of charges
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brokerage;
