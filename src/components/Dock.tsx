import { motion } from "framer-motion";
import { useWindows } from "../context/WindowContext";
import { desktopIcons } from "../data/desktopIcons";
import * as FaIcons from "react-icons/fa";

// Sort icons by order, but separate resume
const allIcons = [...desktopIcons].sort(
  (a, b) => (a.order || 0) - (b.order || 0)
);
const resumeIcon = allIcons.find((icon) => icon.id === "resume");
const sortedIcons = allIcons.filter((icon) => icon.id !== "resume");

const Dock: React.FC = () => {
  const { windows, openWindow, restoreWindow, bringToFront } = useWindows();

  const handleDockIconClick = (
    iconId: string,
    iconName: string,
    component: string
  ) => {
    const window = windows.find((w) => w.id === iconId);
    if (window) {
      if (window.isMinimized) {
        restoreWindow(iconId);
      }
      bringToFront(iconId);
    } else {
      openWindow(iconId, iconName, component);
    }
  };

  const getIconComponent = (iconName: string) => {
    const IconComponent = (FaIcons as any)[iconName];
    return IconComponent || FaIcons.FaFile;
  };

  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-end gap-2 px-3 py-2 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
      >
        {sortedIcons.map((icon) => {
          const window = windows.find((w) => w.id === icon.id);
          const isActive = window && !window.isMinimized;
          const IconComponent = getIconComponent(icon.icon);

          return (
            <motion.button
              key={icon.id}
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                handleDockIconClick(icon.id, icon.name, icon.component)
              }
              className={`relative p-2 rounded-lg transition-all ${
                isActive ? "bg-white/20" : "hover:bg-white/10"
              }`}
              aria-label={icon.name}
            >
              <IconComponent className="text-2xl text-white" />
              {isActive && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
              )}
            </motion.button>
          );
        })}

        {/* Separator */}
        <div className="w-px h-8 bg-white/20 mx-1"></div>

        {/* Resume Icon */}
        {resumeIcon &&
          (() => {
            const window = windows.find((w) => w.id === resumeIcon.id);
            const isActive = window && !window.isMinimized;
            const IconComponent = getIconComponent(resumeIcon.icon);

            return (
              <motion.button
                whileHover={{ scale: 1.2, y: -10 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  handleDockIconClick(
                    resumeIcon.id,
                    resumeIcon.name,
                    resumeIcon.component
                  )
                }
                className={`relative p-2 rounded-lg transition-all ${
                  isActive ? "bg-white/20" : "hover:bg-white/10"
                }`}
                aria-label={resumeIcon.name}
              >
                <IconComponent className="text-2xl text-white" />
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                )}
              </motion.button>
            );
          })()}

        {/* Download Icon */}
        <motion.button
          whileHover={{ scale: 1.2, y: -10 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/images/Resume.docx";
            link.download = "Resume.docx";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="p-2 rounded-lg hover:bg-white/10 transition-all"
          aria-label="Download Resume"
        >
          <FaIcons.FaDownload className="w-6 h-6 text-white" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Dock;
