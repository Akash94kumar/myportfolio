import { motion } from "framer-motion";
import { resumeData } from "../../data/resumeData";
import { useTheme } from "../../context/ThemeContext";
import { FaLinkedin } from "react-icons/fa";

const AboutMe: React.FC = () => {
  const { theme } = useTheme();

  const stats = [
    { number: "6+", label: "Experiences" },
    { number: "8+", label: "Project done" },
    { number: "4", label: "Companies Worked" },
  ];

  return (
    <div
      className={`h-full overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-800"
      }`}
    >
      <div className="flex h-full">
        {/* Left Section - Content (2/3 width) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative w-2/3 p-8 md:p-12 lg:p-16 flex flex-col justify-between pb-4"
        >
          {/* Top Section */}
          <div className="flex-1 flex flex-col justify-center pl-16 pr-8">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-sm md:text-base ${
                theme === "dark" ? "text-gray-400" : "text-gray-300"
              }`}
              style={{ marginBottom: "5px", marginTop: "-20px" }}
            >
              Hi I am
            </motion.p>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-2xl md:text-3xl lg:text-4xl mb-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-200"
              }`}
            >
              {resumeData.name}
            </motion.h2>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-orange-500 mb-8"
            >
              {resumeData.role}
            </motion.h1>

            {/* Social Icons - Left Side Center */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-1/3 left-4 transform -translate-y-1/2 flex flex-col gap-4 z-20"
            >
              <a
                href="https://www.linkedin.com/in/in-akash/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                }`}
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              {/* GitHub icon - commented out for now */}
              {/* <a
                href={`https://github.com/${contact.email.split("@")[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                }`}
              >
                <FaGithub className="w-5 h-5" />
              </a> */}
              <a
                href="mailto:aakash94jmp@gmail.com"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="tel:7979014470"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 border rounded-lg font-semibold transition-colors ${
                  theme === "dark"
                    ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                    : "border-gray-500 text-gray-200 hover:bg-gray-700"
                }`}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = `${import.meta.env.BASE_URL}images/Resume.docx`;
                  link.download = "Akash_Kumar_Resume.docx";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download CV
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pl-16 pr-8"
          >
            <div
              className={`border-t pt-6 ${
                theme === "dark" ? "border-gray-700" : "border-gray-600"
              }`}
            ></div>
            <div className="flex items-center gap-8 md:gap-12 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex-1">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-1">
                    {stat.number}
                  </div>
                  <div
                    className={`text-sm md:text-base ${
                      theme === "dark" ? "text-gray-400" : "text-gray-300"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section - Profile Image (1/3 width) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative w-1/3 flex items-center justify-center p-8"
        >
          {/* Circular Background Shape */}
          <div
            className={`absolute inset-0 rounded-full ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-700"
            }`}
            style={{
              width: "80%",
              height: "80%",
              top: "10%",
              left: "10%",
              opacity: 0.3,
            }}
          ></div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            {/* Square Border Container */}
            <div className="border-4 border-orange-500 w-48 h-56 md:w-64 md:h-72 lg:w-72 lg:h-80 overflow-hidden relative">
              {/* Image positioned to show top-left, hidden on right and bottom */}
              <img
                src={`${import.meta.env.BASE_URL}images/akashProfile.jpg`}
                alt={resumeData.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                style={{
                  objectPosition: "top left",
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-8xl text-white font-bold">${resumeData.name.charAt(
                      0
                    )}</div>`;
                  }
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
