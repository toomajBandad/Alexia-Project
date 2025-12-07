import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "./../../assets/logo/logo.png";

function Topbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="shadow-md">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold px-4 py-2 ">
          <img
            src={logo}
            alt="Axelia Logo"
            className={`inline-block h-12 w-[120px] mr-2 filter ${
              theme === "light" ? "logo-black" : ""
            }`}
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/solutions" className="navItem">
            Solutions
          </Link>
          <Link to="/about" className="navItem">
            About Us
          </Link>
          <Link to="/resources" className="navItem">
            Resources
          </Link>
          <Link to="/blog" className="navItem">
            Blog
          </Link>
        </nav>

        {/* Theme Toggle Button with Icon + Text */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="flex items-center gap-1.5 px-4 py-2 navItem"
        >
          {theme === "dark" ? (
            <>
              <FaSun size={18} />
              <span>Light</span>
            </>
          ) : (
            <>
              <FaMoon size={18} />
              <span>Dark</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default Topbar;
