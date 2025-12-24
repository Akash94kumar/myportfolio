import { motion } from 'framer-motion';
import { skills } from '../../data/resumeData';
import { useTheme } from '../../context/ThemeContext';

const Skills: React.FC = () => {
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
        }`}>Skills & Expertise</h1>

        <div className="space-y-8">
          {skills.map((category, catIndex) => (
            <motion.section
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              className={`p-6 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <h2 className={`text-2xl font-semibold mb-6 border-b pb-2 ${
                theme === 'dark'
                  ? 'text-blue-400 border-gray-700'
                  : 'text-windows-blue border-gray-300'
              }`}>
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => {
                  return (
                    <div key={skillIndex} className="space-y-1">
                      <div className="flex flex-col">
                        <span className={`font-medium text-lg ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-900/90'
                        }`}>{skill.name}</span>
                        {skill.description && (
                          <span className={`text-sm mt-1 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {skill.description}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

