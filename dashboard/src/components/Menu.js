import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";
import api from "../api/axios";

/**
 * Frontend app URL (login lives here)
 */
const FRONTEND_LOGIN_URL = "https://zerodha-frontend-uex2.onrender.com/login";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [username, setUsername] = useState("USER");
  const [checkingAuth, setCheckingAuth] = useState(true);

  /* =========================
     AUTH CHECK (dashboard app)
  ========================= */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/checkAuth", {
          withCredentials: true,
        });
        setUsername(res.data.user || "USER");
      } catch (err) {
        // Login is in ANOTHER APP → hard redirect is REQUIRED
        window.location.href = FRONTEND_LOGIN_URL;
      } finally {
        setCheckingAuth(false);
      }
    };

    fetchUser();
  }, []);

  if (checkingAuth) return null;

  /* =========================
     HANDLERS
  ========================= */
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
      // Logout → go back to frontend login app
      window.location.href = FRONTEND_LOGIN_URL;
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  const avatarText = username ? username.slice(0, 2).toUpperCase() : "ZU";

  return (
    <div className="menu-container">
      {/* Logo */}
      <div className="logo-section">
        <img src="/logo.png" alt="logo" className="logo-img" />
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <MenuIcon size={20} />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="menus">
        <ul className="desktop-menu">
          {[
            { label: "Dashboard", path: "/", index: 0 },
            { label: "Orders", path: "/orders", index: 1 },
            { label: "Holdings", path: "/holdings", index: 2 },
            { label: "Positions", path: "/positions", index: 3 },
            { label: "Funds", path: "/funds", index: 4 },
            { label: "Apps", path: "/apps", index: 6 },
          ].map((item) => (
            <li key={item.index}>
              <Link
                to={item.path}
                style={{ textDecoration: "none" }}
                onClick={() => handleMenuClick(item.index)}
              >
                <p
                  className={
                    selectedMenu === item.index ? activeMenuClass : menuClass
                  }
                >
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <hr className="menu-divider" />

        {/* Profile */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{avatarText}</div>
          <p className="username">{username}</p>
        </div>

        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
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
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-menu-list">
              {[
                { label: "Dashboard", path: "/", index: 0 },
                { label: "Orders", path: "/orders", index: 1 },
                { label: "Holdings", path: "/holdings", index: 2 },
                { label: "Positions", path: "/positions", index: 3 },
                { label: "Funds", path: "/funds", index: 4 },
                { label: "Apps", path: "/apps", index: 6 },
              ].map((item) => (
                <li key={item.index}>
                  <Link
                    to={item.path}
                    onClick={() => handleMenuClick(item.index)}
                    className={
                      selectedMenu === item.index
                        ? "mobile-menu-item active"
                        : "mobile-menu-item"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
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
