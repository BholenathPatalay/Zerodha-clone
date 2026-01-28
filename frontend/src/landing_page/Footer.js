import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA]">
      <div className="w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Top Footer Links */}
        <div className="pt-10 mt-10 border-t">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Logo + Copyright */}
            <div>
              <img
                src="/media/images/logo.svg"
                alt="Logo"
                className="w-36 sm:w-40"
              />
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights
                reserved.
              </p>
            </div>

            {/* Company */}
            <div>
              <p className="mb-4 font-semibold text-gray-900">Company</p>
              <div className="space-y-2 text-sm text-gray-600">
                <Link to="/about" className="block hover:text-black">
                  About
                </Link>
                <Link to="/product" className="block hover:text-black">
                  Products
                </Link>
                <Link to="/pricing" className="block hover:text-black">
                  Pricing
                </Link>
                <a href="#" className="block hover:text-black">
                  Referral programme
                </a>
                <a href="#" className="block hover:text-black">
                  Careers
                </a>
                <a href="#" className="block hover:text-black">
                  Zerodha.tech
                </a>
                <a href="#" className="block hover:text-black">
                  Press &amp; media
                </a>
                <a href="#" className="block hover:text-black">
                  Zerodha cares (CSR)
                </a>
              </div>
            </div>

            {/* Support */}
            <div>
              <p className="mb-4 font-semibold text-gray-900">Support</p>
              <div className="space-y-2 text-sm text-gray-600">
                <a href="#" className="block hover:text-black">
                  Contact
                </a>
                <Link to="/support" className="block hover:text-black">
                  Support portal
                </Link>
                <a href="#" className="block hover:text-black">
                  Z-Connect blog
                </a>
                <a href="#" className="block hover:text-black">
                  List of charges
                </a>
                <a href="#" className="block hover:text-black">
                  Downloads &amp; resources
                </a>
              </div>
            </div>

            {/* Account */}
            <div>
              <p className="mb-4 font-semibold text-gray-900">Account</p>
              <div className="space-y-2 text-sm text-gray-600">
                <Link to="/signup" className="block hover:text-black">
                  Open an account
                </Link>
                <a href="#" className="block hover:text-black">
                  Fund transfer
                </a>
                <a href="#" className="block hover:text-black">
                  60 day challenge
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="pb-10 mt-10 space-y-5 text-sm leading-relaxed text-gray-500">
            <p>
              Zerodha Broking Ltd.: Member of NSE​ &amp;​ BSE – SEBI
              Registration no.: INZ000031633 CDSL: Depository services through
              Zerodha Securities Pvt. Ltd. – SEBI Registration no.:
              IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered
              Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
              Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>

            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>

            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
