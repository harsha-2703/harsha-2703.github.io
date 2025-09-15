import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { useActiveSection } from "../hooks/useActiveSection";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  const activeId = useActiveSection(links.map((l) => l.to));

  return (
    <header className="fixed w-full top-0 z-50 bg-white/30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center">
            <h1 className="text-lg text-white font-bold">H</h1>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Harsharaj</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => {
            const isActive = activeId === link.to;
            const isContact = link.name === "Contact";
            return (
              <HashLink
                key={link.name}
                smooth
                to={`#${link.to}`}
                className={`px-4 py-2 rounded-lg font-medium transition duration-200 cursor-pointer
                  ${
                    isActive
                      ? "bg-purple-100 text-purple-700"
                      : isContact
                      ? "bg-purple-700 text-white hover:bg-purple-800 active:bg-purple-900"
                      : "text-gray-800 hover:bg-purple-100 hover:text-purple-700 active:bg-purple-200"
                  }`}
              >
                {link.name}
              </HashLink>
            );
          })}
        </nav>

        {/* Mobile Nav */}
        <div className="flex items-center gap-3 lg:hidden">
          <HashLink
            smooth
            to="#contact"
            className="px-4 py-2 rounded-lg font-medium bg-purple-700 text-white hover:bg-purple-800 active:bg-purple-900 cursor-pointer"
          >
            Contact
          </HashLink>
          <button
            className="p-2 text-gray-800 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/80 backdrop-blur-md shadow-lg border-t">
          <nav className="flex flex-col items-center py-4 gap-4">
            {links
              .filter((link) => link.name !== "Contact")
              .map((link) => (
                <HashLink
                  key={link.name}
                  smooth
                  to={`#${link.to}`}
                  onClick={() => setIsOpen(false)}
                  className={`w-full text-center px-4 py-2 rounded-lg font-medium transition duration-200 cursor-pointer ${
                    activeId === link.to
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-800 hover:bg-purple-100 hover:text-purple-700 active:bg-purple-200"
                  }`}
                >
                  {link.name}
                </HashLink>
              ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
