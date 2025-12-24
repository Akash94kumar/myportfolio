import { motion, AnimatePresence } from 'framer-motion';
import { WindowState } from '../types';
import Window from './Window';
import AboutMe from './apps/AboutMe';
import Resume from './apps/Resume';
import Skills from './apps/Skills';
import Experience from './apps/Experience';
import Projects from './apps/Projects';
import Contact from './apps/Contact';

interface WindowManagerProps {
  windows: WindowState[];
}

const WindowManager: React.FC<WindowManagerProps> = ({ windows }) => {
  const renderWindowContent = (window: WindowState) => {
    switch (window.component) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Resume':
        return <Resume />;
      case 'Skills':
        return <Skills />;
      case 'Experience':
        return <Experience />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <div className="p-4 text-white">Unknown component: {window.component}</div>;
    }
  };

  return (
    <>
      {windows.map((window) => (
        <Window key={window.id} window={window}>
          <AnimatePresence mode="wait">
            <motion.div
              key={window.component}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="h-full w-full"
            >
              {renderWindowContent(window)}
            </motion.div>
          </AnimatePresence>
        </Window>
      ))}
    </>
  );
};

export default WindowManager;

