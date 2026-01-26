import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [username, setUsername] = useState("USER");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/checkAuth", { withCredentials: true });
        setUsername(res.data.user || "USER");
      } catch (err) {
        window.location.href = "http://localhost:3000/login";
      }
    };

    fetchUser();
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsProfileDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await api.post("/logout", {}, { withCredentials: true });
    } catch (err) {
      console.log("Logout error:", err);
    } finally {
      window.location.href = "http://localhost:3000/login";
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  const avatarText = username ? username.slice(0, 2).toUpperCase() : "ZU";

  return (
    <div className="menu-container">
      {/* Logo Section */}
      <div className="logo-section">
        <img src="logo.png" alt="logo" className="logo-img" />
        {/* Mobile Menu Toggle Button */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className="hamburger-icon">☰</span>
        </button>
      </div>

      {/* Desktop Menus */}
      <div className="menus">
        <ul className="desktop-menu">
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr className="menu-divider" />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{avatarText}</div>
          <p className="username">{username}</p>
        </div>

        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <button type="button" onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="mobile-menu-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-menu-header">
              <div className="mobile-profile">
                <div className="avatar mobile-avatar">{avatarText}</div>
                <p className="username mobile-username">{username}</p>
              </div>
              <button
                className="close-menu"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ×
              </button>
            </div>

            <ul className="mobile-menu-list">
              <li>
                <Link
                  to="/"
                  onClick={() => handleMenuClick(0)}
                  className={
                    selectedMenu === 0
                      ? "mobile-menu-item active"
                      : "mobile-menu-item"
                  }
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/orders"
                  onClick={() => handleMenuClick(1)}
                  className={
                    selectedMenu === 1
                      ? "mobile-menu-item active"
                      : "mobile-menu-item"
                  }
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/holdings"
                  onClick={() => handleMenuClick(2)}
                  className={
                    selectedMenu === 2
                      ? "mobile-menu-item active"
                      : "mobile-menu-item"
                  }
                >
                  Holdings
                </Link>
              </li>
              <li>
                <Link
                  to="/positions"
                  onClick={() => handleMenuClick(3)}
                  className={
                    selectedMenu === 3
                      ? "mobile-menu-item active"
                      : "mobile-menu-item"
                  }
                >
                  Positions
                </Link>
              </li>
              <li>
                <Link
                  to="/funds"
                  onClick={() => handleMenuClick(4)}
                  className={
                    selectedMenu === 4
                      ? "mobile-menu-item active"
                      : "mobile-menu-item"
                  }
                >
                  Funds
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  onClick={() => handleMenuClick(6)}
                  className={
                    selectedMenu === 6
                      ? "mobile-menu-item active"
                      : "mobile-menu-item"
                  }
                >
                  Apps
                </Link>
              </li>
            </ul>

            <div className="mobile-menu-footer">
              <button onClick={handleLogout} className="mobile-logout-btn">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
