import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Draggable from "react-draggable";
import { projects } from "../../data/resumeData";
import { Project } from "../../types";
import { useTheme } from "../../context/ThemeContext";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { theme } = useTheme();
  const nodeRef = useRef(null);

  return (
    <div
      className={`p-6 h-full overflow-auto ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-800"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1
          className={`text-3xl font-light mb-8 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-lg border cursor-pointer transition-all ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="mb-4">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm line-clamp-3 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-900/70"
                  }`}
                >
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 rounded text-xs ${
                      theme === "dark"
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-900/70"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      theme === "dark"
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-900/70"
                    }`}
                  >
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
                className={`text-sm hover:underline ${
                  theme === "dark" ? "text-blue-400" : "text-windows-blue"
                }`}
              >
                View Details →
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
              onClick={() => setSelectedProject(null)}
            />
            <div className="fixed inset-0 z-[101] pointer-events-none">
              <Draggable
                handle=".modal-header"
                nodeRef={nodeRef}
                bounds="parent"
                defaultPosition={{
                  x:
                    typeof window !== "undefined"
                      ? window.innerWidth / 2 -
                        Math.min(window.innerWidth * 0.9, 672) / 2
                      : 0,
                  y:
                    typeof window !== "undefined"
                      ? window.innerHeight / 2 - 300
                      : 0,
                }}
              >
                <motion.div
                  ref={nodeRef}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`w-[90vw] max-w-2xl max-h-[80vh] rounded-lg border shadow-2xl overflow-hidden flex flex-col pointer-events-auto ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <div
                    className={`modal-header p-6 border-b flex justify-between items-center cursor-move ${
                      theme === "dark"
                        ? "border-gray-700 bg-gray-800"
                        : "border-gray-300 bg-gray-50"
                    }`}
                  >
                    <h2
                      className={`text-2xl font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {selectedProject.title}
                    </h2>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className={`w-8 h-8 flex items-center justify-center rounded transition-colors cursor-pointer ${
                        theme === "dark"
                          ? "hover:bg-gray-700"
                          : "hover:bg-gray-100"
                      }`}
                      aria-label="Close"
                    >
                      <span
                        className={
                          theme === "dark"
                            ? "text-gray-300 text-xl"
                            : "text-gray-900 text-xl"
                        }
                      >
                        ×
                      </span>
                    </button>
                  </div>
                  <div
                    className={`flex-1 overflow-auto p-6 ${
                      theme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <p
                      className={`mb-6 leading-relaxed ${
                        theme === "dark" ? "text-gray-300" : "text-gray-800"
                      }`}
                    >
                      {selectedProject.description}
                    </p>
                    <div className="mb-6">
                      <h3
                        className={`text-lg font-semibold mb-3 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-sm border ${
                              theme === "dark"
                                ? "bg-blue-900/50 text-blue-300 border-blue-700"
                                : "bg-blue-100 text-blue-800 border-blue-300"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all"
                        >
                          View on GitHub
                        </a>
                      )}
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2 rounded-lg transition-all ${
                            theme === "dark"
                              ? "bg-gray-700 hover:bg-gray-600 text-white"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                          }`}
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Draggable>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
