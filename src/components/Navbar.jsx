import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ onNavigate, aboutRef, skillsRef, workRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", ref: aboutRef },
    { label: "Skills", ref: skillsRef },
    { label: "Work", ref: workRef },
    { label: "Contact", ref: contactRef },
  ];

  const handleNavClick = (ref) => {
    onNavigate(ref);
    setIsOpen(false);
  };

  // const menuItemClasses =
  //   "hover:text-[#76805D] transition duration-300 cursor-pointer";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 shadow-lg border-b border-white/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <p className="text-3xl font-extrabold text-gray-900 tracking-wide">
          Pranjali<span className="text-pink-600">.</span>
        </p>

        {/* Desktop Navigation */}
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
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RxCross2 size={28} /> : <LuMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-semibold">
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
      </div>
    </nav>
  );
};

export default Navbar;
