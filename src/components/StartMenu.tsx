import { motion } from "framer-motion";
import { useWindows } from "../context/WindowContext";
import { desktopIcons } from "../data/desktopIcons";
import * as FaIcons from "react-icons/fa";

interface StartMenuProps {
  onClose: () => void;
  onItemClick: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ onClose, onItemClick }) => {
  const { openWindow } = useWindows();

  const handleItemClick = (icon: (typeof desktopIcons)[0]) => {
    openWindow(icon.id, icon.name, icon.component);
    onItemClick();
  };

  const getIconComponent = (iconName: string) => {
    const IconComponent = (FaIcons as any)[iconName];
    return IconComponent || FaIcons.FaFile;
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-80 glass-dark rounded-lg border border-white/10 shadow-2xl z-50 p-4"
      >
        <div className="mb-4">
          <h2 className="text-white text-lg font-semibold mb-2">Akash Kumar</h2>
          <p className="text-white/60 text-sm">Senior Software Engineer</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {desktopIcons.map((icon) => {
            const IconComponent = getIconComponent(icon.icon);
            return (
              <motion.button
                key={icon.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleItemClick(icon)}
                className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex flex-col items-center gap-2 transition-all"
                aria-label={icon.name}
              >
                <IconComponent className="text-3xl text-white" />
                <span className="text-white text-xs">{icon.name}</span>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm transition-all"
          >
            Power Options
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default StartMenu;
