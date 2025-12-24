import { useState, useEffect } from "react";
import { useWindows } from "../context/WindowContext";

const MenuBar: React.FC = () => {
  const { windows } = useWindows();
  const [currentTime, setCurrentTime] = useState("");

  // Get the active window (highest zIndex and not minimized)
  const getActiveWindowTitle = () => {
    const openWindows = windows.filter((w) => w.isOpen && !w.isMinimized);
    if (openWindows.length === 0) {
      return "Akash Kumar";
    }
    // Find the window with the highest zIndex
    const activeWindow = openWindows.reduce((prev, current) =>
      current.zIndex > prev.zIndex ? current : prev
    );
    return activeWindow.title || "Akash Kumar";
  };

  const activeTitle = getActiveWindowTitle();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const date = now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      setCurrentTime(`${time} • ${date}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-6 bg-black/30 backdrop-blur-xl border-b border-white/10 z-50 flex items-center justify-between px-4 text-white text-xs">
      {/* Left Side - Apple Menu and App Name */}
      <div className="flex items-center gap-4">
        <button className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors">
          {/* Apple Logo */}
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
          </svg>
        </button>
        <span className="font-semibold">{activeTitle}</span>
        <div className="flex items-center gap-2">
          <button className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors">
            File
          </button>
          <button className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors">
            Edit
          </button>
          <button className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors">
            View
          </button>
          <button className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors">
            Window
          </button>
          <button className="hover:bg-white/10 px-2 py-0.5 rounded transition-colors">
            Help
          </button>
        </div>
      </div>

      {/* Right Side - System Icons and Time */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          {/* WiFi Icon */}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
            />
          </svg>

          {/* Battery Icon */}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Time and Date */}
        <span className="font-medium">{currentTime}</span>
      </div>
    </div>
  );
};

export default MenuBar;
