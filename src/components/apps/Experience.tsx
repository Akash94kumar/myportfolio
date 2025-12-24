import { motion } from 'framer-motion';
import { experiences } from '../../data/resumeData';
import { useTheme } from '../../context/ThemeContext';

const Experience: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className={`p-6 h-full overflow-auto ${
      theme === 'dark' 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-white text-gray-800'
    }`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className={`text-3xl font-light mb-8 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>Professional Experience</h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-windows-blue via-purple-600 to-pink-600"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 top-2 w-4 h-4 rounded-full bg-windows-blue border-4 ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                }`}></div>

                <div className={`p-6 rounded-lg border transition-all ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-750'
                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                }`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h2 className={`text-2xl font-semibold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{exp.role}</h2>
                      <p className={`text-lg ${
                        theme === 'dark' ? 'text-blue-400' : 'text-windows-blue'
                      }`}>{exp.company}</p>
                    </div>
                    <span className={`text-sm px-3 py-1 rounded ${
                      theme === 'dark'
                        ? 'text-gray-300 bg-gray-700'
                        : 'text-gray-900/60 bg-gray-100'
                    }`}>
                      {exp.period}
                    </span>
                  </div>

                  <ul className={`list-disc list-inside space-y-2 mt-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-900/80'
                  }`}>
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-sm">{desc}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs border ${
                          theme === 'dark'
                            ? 'bg-windows-blue/20 text-gray-300 border-windows-blue/30'
                            : 'bg-windows-blue/20 text-gray-900/90 border-windows-blue/30'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;

