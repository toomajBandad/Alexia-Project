import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext.jsx";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import logo from "./../../assets/logo/logo.png";
import MobileMenu from "../mobileMenu/MobileMenu.jsx";

function Topbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/solutions", label: "Solutions" },
    { to: "/about", label: "About Us" },
    { to: "/resources", label: "Resources" },
    { to: "/blog", label: "Blog" },
  ];

  const themeToggle = (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      aria-pressed={theme === "dark"}
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
  );

  return (
    <header className="shadow-md">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="px-4 py-2">
          <img
            src={logo}
            alt="Axelia Cyber Security Logo"
            className={`inline-block h-12 w-[120px] mr-2 ${
              theme === "light" ? "invert" : ""
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(({ to, label }) => (
            <Link key={to} to={to} className="navItem">
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:block">{themeToggle}</div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden px-4 py-2"
          aria-label="Open Menu"
        >
          <FaBars size={22} />
        </button>
      </div>

      {/* Mobile Offcanvas Menu */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navItems={navItems}
        themeToggle={themeToggle}
        theme={theme}
      />
    </header>
  );
}

export default Topbar;
