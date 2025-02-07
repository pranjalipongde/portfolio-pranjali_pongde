import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ onNavigate, aboutRef, workRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Work", ref: workRef },
    { label: "About", ref: aboutRef },
    { label: "Contact", ref: contactRef },
  ];

  const menuItemClasses =
    "hover:text-[#76805D] transition duration-300 cursor-pointer";

  return (
    <nav className="fixed top-0 left-0 bg-white w-full shadow-md z-50">
      <div className="max-w-3/4 mx-auto flex justify-between px-2 py-4">
        <p className="text-2xl font-bold">Pranjali.</p>

        <ul className="hidden md:flex space-x-6 text-lg transition duration-300 cursor-pointer">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={menuItemClasses}
              onClick={onNavigate(item.ref)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* mobile view */}

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross2 size={28} /> : <LuMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4 text-lg">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={menuItemClasses}
                onClick={() => {
                  onNavigate(item.ref);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
