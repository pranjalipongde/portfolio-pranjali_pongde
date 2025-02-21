import React from "react";
import { skillsData } from "../data";

const Skills = () => {
  return (
    <div className="w-full px-6 py-12 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900">
        My <span className="text-pink-600 skills">Skills</span>
      </h2>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {skillsData.development.map((skill, index) => (
          <div
            key={index}
            className="relative group bg-white/10 border border-white/20 backdrop-blur-lg shadow-xl rounded-xl px-6 py-4 text-lg font-medium text-gray-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-white/20 text"
          >
            {skill}
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 text">
          Part-Time Passion
        </h3>
        <p className="text-lg text-gray-600 mt-2">
          I love designing social media posts using{" "}
          <span className="font-semibold text-pink-600 text">Canva</span>.
        </p>
      </div>
    </div>
  );
};

export default Skills;
