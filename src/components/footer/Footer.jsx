import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo/logo.png";
import { useTheme } from "../../contexts/ThemeContext";

function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-10 md:grid md:grid-cols-3">
          {/* Column 1: Contact Info */}
          <div className="space-y-3 text-sm text-neutral-500">
            <p className="font-semibold text-gray-400">Contact</p>
            <p>
              Email:{" "}
              <a href="mailto:info@axelia.com" className="hover:text-gray-400">
                info@axelia.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+34123456789" className="hover:text-gray-400">
                +34 123 456 789
              </a>
            </p>
            <p>
              Fax:{" "}
              <a href="fax:+34123456780" className="hover:text-gray-400">
                +34 123 456 780
              </a>
            </p>
            <p>Location: Madrid, Spain</p>
          </div>

          {/* Column 2: Links */}
          <div>
            <p className="font-semibold text-gray-400 mb-4">Links</p>
            <nav className="flex flex-col space-y-3 text-sm text-neutral-500">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-400"
              >
                About Us
              </a>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-400"
              >
                Solutions
              </a>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-400"
              >
                Resources
              </a>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-gray-400"
              >
                Blog
              </a>
            </nav>
          </div>

          {/* Column 3: Brand + Socials */}
          <div>
            <a href="/" className="">
              <img
                src={logo}
                alt="Axelia Logo"
                className={`inline-block w-25 mr-2 filter ${
                  theme === "light" ? "logo-black" : ""
                }`}
              />
            </a>
            <p className="mt-4 text-sm text-neutral-500">
              Building modern, secure web platforms with clarity and precision.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                aria-label="GitHub"
                href="#"
                className="rounded-md p-2 text-neutral-500 transition-colors duration-200 hover:text-white hover:bg-neutral-900"
              >
                <FaGithub size={20} />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="rounded-md p-2 text-neutral-500 transition-colors duration-200 hover:text-white hover:bg-neutral-900"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                aria-label="X"
                href="#"
                className="rounded-md p-2 text-neutral-500 transition-colors duration-200 hover:text-white hover:bg-neutral-900"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center border-t border-neutral-800 pt-6 mt-10">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Axelia Cyber Security. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
