import React, { useState } from "react";
import { projectData } from "../data";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const categories = Object.keys(projectData);
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default category

  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        My <span className="text-pink-600 skills">Work</span>
      </h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 text-sm font-semibold border rounded-full transition-all ${
              activeCategory === category
                ? "bg-[#76805D] text-pink-600 shadow-md"
                : "border-gray-300 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData[activeCategory].map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <h4 className="text-xl font-semibold text-gray-900">
              {project.title}
            </h4>
            <p className="text-gray-600 text-sm mt-2">{project.description}</p>

            {project.gitHubLink && (
              <a
                href={project.gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition duration-300"
              >
                View Project <FaExternalLinkAlt className="ml-2" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
