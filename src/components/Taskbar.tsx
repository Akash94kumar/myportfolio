import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useWindows } from '../context/WindowContext';
import StartMenu from './StartMenu';
import { desktopIcons } from '../data/desktopIcons';
import * as FaIcons from 'react-icons/fa';

const Taskbar: React.FC = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const { windows, openWindow, restoreWindow, bringToFront } = useWindows();

  const handleTaskbarIconClick = (iconId: string, iconName: string, component: string) => {
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

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-12 glass-dark border-t border-white/10 flex items-center justify-center px-4 z-50">
        <div className="flex items-center gap-2 max-w-6xl w-full">
          {/* Start Button */}
          <button
            onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
            className={`px-4 h-10 rounded-lg flex items-center gap-2 transition-all ${
              isStartMenuOpen
                ? 'bg-white/20'
                : 'hover:bg-white/10'
            }`}
            aria-label="Start Menu"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
            <span className="text-white text-sm font-medium">Start</span>
          </button>

          {/* Search */}
          <button
            className="px-4 h-10 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all"
            aria-label="Search"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Pinned Apps / Open Windows */}
          <div className="flex-1 flex items-center gap-1 justify-center">
            {desktopIcons.slice(0, 5).map((icon) => {
              const window = windows.find((w) => w.id === icon.id);
              const isActive = window && !window.isMinimized;
              const IconComponent = (FaIcons as any)[icon.icon] || FaIcons.FaFile;
              
              return (
                <button
                  key={icon.id}
                  onClick={() => handleTaskbarIconClick(icon.id, icon.name, icon.component)}
                  className={`px-3 h-10 rounded-lg flex items-center gap-2 transition-all ${
                    isActive
                      ? 'bg-white/20 border-b-2 border-windows-blue'
                      : 'hover:bg-white/10'
                  }`}
                  aria-label={icon.name}
                >
                  <IconComponent className="text-lg text-white" />
                </button>
              );
            })}
          </div>

          {/* System Tray */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2">
              <div className="w-1 h-1 rounded-full bg-green-400"></div>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="px-3 py-1.5 rounded hover:bg-white/10 transition-all">
              <span className="text-white text-xs">{currentTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Start Menu */}
      <AnimatePresence>
        {isStartMenuOpen && (
          <StartMenu
            onClose={() => setIsStartMenuOpen(false)}
            onItemClick={() => setIsStartMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Taskbar;

