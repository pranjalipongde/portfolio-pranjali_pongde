import React from "react";
import { CONTACT } from "../data";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 rounded-lg shadow-md">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Let's <span className="text-pink-600 skills">Connect</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">{CONTACT.text}</p>

        {/* Contact Information */}
        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-800">
            Email:{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-[#a0022c] hover:underline"
            >
              {CONTACT.email}
            </a>
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-2">
            Phone:{" "}
            <a
              href={`tel:${CONTACT.phone}`}
              className="text-[#a0022c] hover:underline"
            >
              {CONTACT.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
