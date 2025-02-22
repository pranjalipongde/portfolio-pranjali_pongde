import React, { useState } from "react";
import { projectData } from "../data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const categories = Object.keys(projectData);
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default category

  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        My <span className="text-pink-600">Work</span>
      </h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
              activeCategory === category
                ? "bg-pink-600 text-white shadow-lg"
                : "border border-gray-300 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData[activeCategory].map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <h4 className="text-xl font-semibold text-gray-900">
              {project.title}
            </h4>
            <p className="text-gray-600 text-sm mt-2">{project.description}</p>

            {/* Buttons */}
            <div className="flex items-center space-x-4 mt-4">
              {project.gitHubLink && (
                <a
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition"
                >
                  <FaGithub size={22} />
                </a>
              )}
              {project.hostedLink && (
                <a
                  href={project.hostedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 transition flex items-center"
                >
                  Live Demo <FaExternalLinkAlt className="ml-2" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
