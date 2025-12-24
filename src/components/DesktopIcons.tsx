import { motion } from 'framer-motion';
import { useWindows } from '../context/WindowContext';

const DesktopIcons: React.FC = () => {
  const { openWindow } = useWindows();

  const handleDoubleClick = () => {
    // Open Finder or any default app
    openWindow('finder', 'Finder', 'AboutMe');
  };

  return (
    <div className="absolute top-8 left-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center cursor-pointer group"
        onDoubleClick={handleDoubleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleDoubleClick();
          }
        }}
        aria-label="Finder"
      >
        <div className="w-16 h-16 mb-2 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg group-hover:bg-white/30 group-hover:scale-110 transition-all group-active:scale-95">
          {/* Apple Logo */}
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
        </div>
        <span className="text-white text-xs text-center px-2 py-1 rounded-md bg-black/30 backdrop-blur-sm group-hover:bg-black/50 transition-all shadow-sm">
          Finder
        </span>
      </motion.div>
    </div>
  );
};

export default DesktopIcons;
