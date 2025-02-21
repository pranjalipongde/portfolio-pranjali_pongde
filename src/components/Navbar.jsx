import React, { useState, useEffect } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({
  onNavigate,
  aboutRef,
  skillsRef,
  workRef,
  experienceRef,
  contactRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", ref: aboutRef },
    { label: "Skills", ref: skillsRef },
    { label: "Work", ref: workRef },
    { label: "Experience", ref: experienceRef },
    { label: "Contact", ref: contactRef },
  ];

  const handleNavClick = (ref) => {
    onNavigate(ref);
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 shadow-lg border-b border-white/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <p className="text-3xl font-extrabold text-gray-900 tracking-wide">
          Pranjali<span className="text-pink-600">.</span>
        </p>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group text-gray-700 hover:text-pink-600 transition duration-300 cursor-pointer"
              onClick={() => handleNavClick(item.ref)}
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RxCross2 size={32} /> : <LuMenu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-xl font-semibold transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-6 text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <RxCross2 size={36} />
        </button>

        {navItems.map((item, index) => (
          <button
            key={index}
            className="text-gray-900 hover:text-pink-600 transition duration-300"
            onClick={() => handleNavClick(item.ref)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
