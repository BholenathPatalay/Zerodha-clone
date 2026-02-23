import React, { useEffect, useState } from "react";
import api from "../api/axios";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);
  const [user, setUser] = useState("");
  const [isExpanded, setIsExpanded] = useState(false); // For mobile expansion

  useEffect(() => {
    const FRONTEND_URL =
      process.env.REACT_APP_FRONTEND_URL ||
      "https://zerodha-frontend-uex2.onrender.com";

    const loadData = async () => {
      try {
        const authRes = await api.get("/checkAuth", { withCredentials: true });
        setUser(authRes.data.user);

        const holdingsRes = await api.get("/api/holdings");
        setHoldings(holdingsRes.data);
      } catch (err) {
        window.location.assign(`${FRONTEND_URL}`);
      }
    };

    loadData();
  }, []);

  const investment = holdings.reduce((sum, h) => sum + h.avg * h.qty, 0);
  const currentValue = holdings.reduce((sum, h) => sum + h.price * h.qty, 0);
  const pnl = currentValue - investment;
  const pnlPercent =
    investment > 0 ? ((pnl / investment) * 100).toFixed(2) : "0.00";

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="username">
        <div className="user-header">
          <h6>Hi, {user || "User"}!</h6>
          <button className="mobile-expand-toggle" onClick={toggleExpand}>
            {isExpanded ? "−" : "+"}
          </button>
        </div>
        <hr className="divider" />
      </div>

      <div className={`section ${isExpanded ? "expanded" : ""}`}>
        <div className="section-header">
          <span>
            <p>Holdings ({holdings.length})</p>
          </span>
          <div className="mobile-summary-preview" onClick={toggleExpand}>
            <div className="preview-pnl">
              <span className={pnl >= 0 ? "profit" : "loss"}>
                {pnl >= 0 ? "+" : ""}
                {pnl.toFixed(2)}
              </span>
              <span className={`pnl-percent ${pnl >= 0 ? "profit" : "loss"}`}>
                ({pnl >= 0 ? "+" : ""}
                {pnlPercent}%)
              </span>
            </div>
          </div>
        </div>

        <div className="summary-content">
          <div className="data">
            <div className="first">
              <h3 className={pnl >= 0 ? "profit" : "loss"}>
                {pnl.toFixed(2)}{" "}
                <small>
                  {pnl >= 0 ? "+" : ""}
                  {pnlPercent}%
                </small>
              </h3>
              <p>P&amp;L</p>
            </div>

            <hr className="data-divider" />

            <div className="second">
              <p>
                Current Value <span>{currentValue.toFixed(2)}</span>
              </p>
              <p>
                Investment <span>{investment.toFixed(2)}</span>
              </p>
            </div>
          </div>

          <hr className="divider" />
        </div>
      </div>

      {/* Mobile Cards Layout for small screens */}
      <div className="mobile-cards">
        <div className="mobile-card pnl-card">
          <div className="card-header">
            <span className="card-title">P&amp;L</span>
            <span className={`card-value ${pnl >= 0 ? "profit" : "loss"}`}>
              {pnl >= 0 ? "+" : ""}
              {pnl.toFixed(2)}
            </span>
          </div>
          <div className="card-percentage">
            <span className={pnl >= 0 ? "profit" : "loss"}>
              {pnl >= 0 ? "+" : ""}
              {pnlPercent}%
            </span>
          </div>
        </div>

        <div className="mobile-card value-card">
          <div className="card-header">
            <span className="card-title">Current Value</span>
            <span className="card-value">{currentValue.toFixed(2)}</span>
          </div>
          <p className="card-subtitle">Total investment value</p>
        </div>

        <div className="mobile-card investment-card">
          <div className="card-header">
            <span className="card-title">Investment</span>
            <span className="card-value">{investment.toFixed(2)}</span>
          </div>
          <p className="card-subtitle">Total amount invested</p>
        </div>

        <div className="mobile-card holdings-card">
          <div className="card-header">
            <span className="card-title">Holdings</span>
            <span className="card-value">{holdings.length}</span>
          </div>
          <p className="card-subtitle">Total stocks held</p>
        </div>
      </div>
    </>
  );
};

export default Summary;
