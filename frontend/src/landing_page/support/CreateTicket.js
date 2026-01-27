import React from "react";

function CreateTicket() {
  const topics = [
    {
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Your Zerodha Account",
      links: [
        "Login credentials",
        "Your Profile",
        "Account modification and segment addition",
        "CMR & DP ID",
        "Nomination",
        "Transfer and conversion of shares",
        "IPO",
        "Account closure",
      ],
    },
    {
      title: "Trading and Markets",
      links: [
        "Margin/leverage, Product and Order types",
        "Kite features",
        "Trading FAQs",
        "Corporate actions",
        "GTT",
        "Order execution",
        "Market holidays",
        "Charts and indicators",
      ],
    },
    {
      title: "Funds",
      links: [
        "Adding funds",
        "Withdrawals",
        "Bank accounts",
        "eMandates",
        "Fund statement",
        "Charges and limits",
        "Payout timings",
        "UPI issues",
      ],
    },
    {
      title: "Console",
      links: [
        "Portfolio",
        "Reports",
        "Taxation",
        "Charges",
        "Profile settings",
        "Account statement",
        "Contract notes",
        "Ledger",
      ],
    },
    {
      title: "Coin",
      links: [
        "Understanding mutual funds",
        "Coin app features",
        "SIP and lumpsum",
        "NFO and IPO",
        "Demat mutual funds",
        "Redeeming mutual funds",
        "Statements and reports",
        "Coin charges",
      ],
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-14 lg:py-16">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
            To create a ticket, select a relevant topic
          </h1>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div key={index} className="p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <span className="text-blue-600 text-lg"></span>
                  {topic.title}
                </h4>

                <div className="mt-4 space-y-2">
                  {topic.links.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block text-sm sm:text-base text-blue-600 hover:text-blue-700 leading-7"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;
