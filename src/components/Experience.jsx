import React from "react";
import { EXPERIENCES } from "../data";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Work <span className="text-pink-600 skills">Experience</span>
      </h2>

      <div className="relative border-l-4 border-[#76805D] pl-6">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col md:flex-row md:items-start group"
          >
            {/* Timeline Dot */}
            <div className="w-4 h-4 bg-[#76805D] rounded-full absolute -left-[10px] mt-2"></div>

            {/* Experience Details */}
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 w-full hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FaBriefcase className="text-[#76805D]" /> {experience.role}
              </h3>
              <p className="text-gray-600 text-sm">{experience.company}</p>
              <p className="text-gray-500 text-sm italic">{experience.year}</p>
              <p className="mt-2 text-gray-700">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
