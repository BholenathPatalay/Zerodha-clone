import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="indices-content">
          <div className="index-item">
            <p className="index">NIFTY 50</p>
            <div className="index-values">
              <p className="index-value">22,021.97</p>
              <div className="index-change up">
                <span className="change-value">78.67</span>
                <span className="change-percent">(+0.10%)</span>
              </div>
            </div>
          </div>

          <div className="index-item">
            <p className="index">SENSEX</p>
            <div className="index-values">
              <p className="index-value">72,656.40</p>
              <div className="index-change up">
                <span className="change-value">118.30</span>
                <span className="change-percent">(+0.22%)</span>
              </div>
            </div>
          </div>

          <div className="market-status">
            <span className="status-indicator live"></span>
            <span className="status-text">Live</span>
          </div>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
