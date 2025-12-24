import { motion } from "framer-motion";
import {
  resumeData,
  skills,
  experiences,
  projects,
  education,
} from "../../data/resumeData";
import { useTheme } from "../../context/ThemeContext";

const Resume: React.FC = () => {
  const { theme } = useTheme();
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
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className={`text-4xl font-light mb-2 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {resumeData.name}
          </h1>
          <p
            className={`text-xl mb-1 ${
              theme === "dark" ? "text-gray-300" : "text-gray-900/80"
            }`}
          >
            {resumeData.role}
          </p>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-900/60"
            }`}
          >
            {resumeData.experience}
          </p>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-semibold mb-4 border-b pb-2 ${
              theme === "dark"
                ? "border-gray-700 text-white"
                : "border-gray-300 text-gray-900"
            }`}
          >
            Summary
          </h2>
          <p
            className={`leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-900/90"
            }`}
          >
            {resumeData.summary}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-semibold mb-4 border-b pb-2 ${
              theme === "dark"
                ? "border-gray-700 text-white"
                : "border-gray-300 text-gray-900"
            }`}
          >
            Skills
          </h2>
          <div className="space-y-6">
            {skills.map((category, catIndex) => (
              <div key={catIndex}>
                <h3
                  className={`text-lg font-semibold mb-4 ${
                    theme === "dark" ? "text-blue-400" : "text-windows-blue"
                  }`}
                >
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      className={`p-4 rounded-lg border ${
                        theme === "dark"
                          ? "bg-gray-800/50 border-gray-700"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="flex flex-col space-y-1">
                        <span
                          className={`font-semibold text-base ${
                            theme === "dark" ? "text-gray-200" : "text-gray-900"
                          }`}
                        >
                          {skill.name}
                        </span>
                        {skill.description && (
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {skill.description}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-semibold mb-4 border-b pb-2 ${
              theme === "dark"
                ? "border-gray-700 text-white"
                : "border-gray-300 text-gray-900"
            }`}
          >
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg border-l-4 border-windows-blue ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white/5"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className={
                        theme === "dark" ? "text-blue-400" : "text-windows-blue"
                      }
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-900/60"
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>
                <ul
                  className={`list-disc list-inside space-y-1 mt-3 text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-900/80"
                  }`}
                >
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech, i) => (
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
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2
            className={`text-2xl font-semibold mb-4 border-b pb-2 ${
              theme === "dark"
                ? "border-gray-700 text-white"
                : "border-gray-300 text-gray-900"
            }`}
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg border ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-3 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-900/70"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
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
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2
            className={`text-2xl font-semibold mb-4 border-b pb-2 ${
              theme === "dark"
                ? "border-gray-700 text-white"
                : "border-gray-300 text-gray-900"
            }`}
          >
            Education
          </h2>
          {education.map((edu, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <h3
                className={`text-lg font-semibold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {edu.degree}
              </h3>
              <p
                className={
                  theme === "dark" ? "text-gray-300" : "text-gray-900/80"
                }
              >
                {edu.field}
              </p>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-900/60"
                }`}
              >
                {edu.institution} • {edu.year}
              </p>
            </div>
          ))}
        </section>
      </motion.div>
    </div>
  );
};

export default Resume;
