import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function MobileMenu({ isOpen, onClose, navItems, themeToggle, theme }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-gray-500 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b ">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose} aria-label="Close Menu">
          <FaTimes size={22} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 px-6 py-4">
        {navItems.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="navItem"
            onClick={onClose} // close menu when link clicked
          >
            {label}
          </Link>
        ))}

        {/* Theme Toggle */}
        <div className="mt-4">{themeToggle}</div>
      </nav>
    </div>
  );
}

export default MobileMenu;
