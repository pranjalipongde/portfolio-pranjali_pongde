import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SOCIAL_MEDIA_LINKS } from "../data";

const ICONS = {
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4">
          {SOCIAL_MEDIA_LINKS.map((link, index) => {
            const IconComponent = ICONS[link.icon];
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-[#f3ffbd] transition transform hover:scale-110"
              >
                <IconComponent fontSize={26} />
              </a>
            );
          })}
        </div>

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Pranjali Pongde. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
