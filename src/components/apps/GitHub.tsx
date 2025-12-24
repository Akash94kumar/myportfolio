import { motion } from 'framer-motion';
import { contact } from '../../data/resumeData';
import { useTheme } from '../../context/ThemeContext';

const GitHub: React.FC = () => {
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
        className="max-w-4xl mx-auto text-center"
      >
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-5xl">
            💻
          </div>
          <h1 className={`text-3xl font-light mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>GitHub Profile</h1>
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-900/60'}>Check out my code and contributions</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-8 rounded-lg border mb-6 ${
            theme === 'dark'
              ? 'bg-gray-800 border-gray-700'
              : 'bg-gray-50 border-gray-200'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Repository Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              { name: 'Enterprise Dashboard', stars: '120', language: 'TypeScript' },
              { name: 'E-Commerce Platform', stars: '89', language: 'React' },
              { name: 'Micro Frontend', stars: '156', language: 'JavaScript' },
              { name: 'Component Library', stars: '203', language: 'TypeScript' },
            ].map((repo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`p-4 rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <h3 className={`font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{repo.name}</h3>
                <div className={`flex items-center gap-4 text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-900/60'
                }`}>
                  <span>⭐ {repo.stars}</span>
                  <span>📝 {repo.language}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-block px-8 py-3 rounded-lg border font-medium transition-all ${
            theme === 'dark'
              ? 'bg-gray-800 hover:bg-gray-700 border-gray-700 text-white'
              : 'bg-gray-100 hover:bg-white/20 border-gray-300 text-gray-900'
          }`}
        >
          Visit GitHub Profile →
        </motion.a>
      </motion.div>
    </div>
  );
};

export default GitHub;

