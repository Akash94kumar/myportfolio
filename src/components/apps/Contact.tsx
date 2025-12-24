import { motion } from "framer-motion";
import { contact } from "../../data/resumeData";
import { useTheme } from "../../context/ThemeContext";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: contact.email || "",
      link: contact.email ? `mailto:${contact.email}` : undefined,
    },
    {
      icon: "📱",
      label: "Phone",
      value: contact.phone || "",
      link: contact.phone ? `tel:${contact.phone}` : undefined,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/akashkumar",
      link: contact.linkedin || undefined,
    },
  ].filter(
    (method) => method.link && method.link !== "#" && method.link !== undefined
  );

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
        className="max-w-2xl mx-auto"
      >
        <h1
          className={`text-3xl font-light mb-8 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Get In Touch
        </h1>

        <div className="space-y-6 mb-8">
          {contactMethods.map((method, index) => {
            if (!method.link) return null;
            const link = method.link;
            const isExternal =
              typeof link === "string" &&
              (link.startsWith("http") || link.startsWith("https"));
            return (
              <motion.a
                key={index}
                href={link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`block p-6 rounded-lg border transition-all group ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                    : "bg-gray-50 border-gray-200 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center text-3xl group-hover:scale-110 transition-transform ${
                      theme === "dark"
                        ? "bg-windows-blue/30"
                        : "bg-windows-blue/20"
                    }`}
                  >
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-semibold mb-1 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {method.label}
                    </h3>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-900/70"
                      }`}
                    >
                      {method.value}
                    </p>
                  </div>
                  <svg
                    className={`w-6 h-6 group-hover:translate-x-1 transition-all ${
                      theme === "dark"
                        ? "text-gray-400 group-hover:text-gray-300"
                        : "text-gray-900/40 group-hover:text-gray-900"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`p-6 rounded-lg border ${
            theme === "dark"
              ? "bg-gradient-to-br from-windows-blue/20 to-purple-600/20 border-gray-700"
              : "bg-gradient-to-br from-windows-blue/20 to-purple-600/20 border-gray-200"
          }`}
        >
          <h2
            className={`text-xl font-semibold mb-3 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Work Together
          </h2>
          <p
            className={`mb-4 ${
              theme === "dark" ? "text-gray-300" : "text-gray-900/80"
            }`}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-900/60"
            }`}
          >
            Feel free to reach out through any of the channels above. I
            typically respond within 24 hours.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
