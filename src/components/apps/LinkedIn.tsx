import { motion } from "framer-motion";
import { contact, resumeData } from "../../data/resumeData";

const LinkedIn: React.FC = () => {
  return (
    <div className="p-6 text-white h-full overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-5xl">
            🔗
          </div>
          <h1 className="text-3xl font-light mb-2">LinkedIn Profile</h1>
          <p className="text-white/60">Connect with me on LinkedIn</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-lg bg-white/5 border border-white/10 mb-6"
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-windows-blue to-purple-600 flex items-center justify-center text-3xl">
              {resumeData.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-1">{resumeData.name}</h2>
              <p className="text-white/80">{resumeData.role}</p>
              <p className="text-white/60 text-sm">{resumeData.experience}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {resumeData.summary}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "TypeScript",
                  "Redux",
                  "Software Development",
                  "UI/UX",
                  "Performance Optimization",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-windows-blue/20 text-sm text-white/90 border border-windows-blue/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block w-full text-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all"
        >
          Connect on LinkedIn →
        </motion.a>
      </motion.div>
    </div>
  );
};

export default LinkedIn;
