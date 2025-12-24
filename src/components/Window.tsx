import { useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { motion, AnimatePresence } from "framer-motion";
import { useWindows } from "../context/WindowContext";
import { useTheme } from "../context/ThemeContext";
import { WindowState } from "../types";
import { getPreviousSection, getNextSection } from "../data/desktopIcons";

interface WindowProps {
  window: WindowState;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ window, children }) => {
  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    restoreWindow,
    bringToFront,
    navigateBack,
    navigateForward,
  } = useWindows();
  const { theme, toggleTheme } = useTheme();
  const nodeRef = useRef(null);

  useEffect(() => {
    if (window.isOpen && !window.isMinimized) {
      bringToFront(window.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.isOpen, window.isMinimized, window.id]);

  const handleTitleBarClick = () => {
    bringToFront(window.id);
  };

  if (window.isMinimized) {
    return null;
  }

  // Always fullscreen (F11 style) - full height and full width
  const windowStyle = {
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
  };

  // Generate fake URL for address bar - updates based on current component
  const getFakeUrl = () => {
    const baseUrl = "akash-portfolio.dev";
    const pathMap: { [key: string]: string } = {
      AboutMe: "/about",
      Resume: "/resume",
      Skills: "/skills",
      Experience: "/experience",
      Projects: "/projects",
      Contact: "/contact",
    };
    return `${baseUrl}${pathMap[window.component] || ""}`;
  };

  return (
    <AnimatePresence>
      {window.isOpen && (
        <Draggable
          nodeRef={nodeRef}
          handle=".chrome-title-bar"
          position={{ x: 0, y: 0 }}
          disabled={true}
        >
          <motion.div
            ref={nodeRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bg-white overflow-hidden"
            style={{
              ...windowStyle,
              zIndex: window.zIndex,
            }}
          >
            <div
              className="w-full h-full flex flex-col"
              style={{ width: "100vw", height: "100vh" }}
            >
              {/* macOS Title Bar with Traffic Lights */}
              <div
                className="chrome-title-bar flex items-center justify-between h-7 bg-gray-100 border-b border-gray-300 cursor-move px-3"
                onClick={handleTitleBarClick}
              >
                {/* Traffic Lights (macOS style) */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeWindow(window.id);
                    }}
                    className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center group"
                    aria-label="Close"
                    title="Close"
                  >
                    <span className="text-white text-[8px] font-bold leading-none">
                      ×
                    </span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      minimizeWindow(window.id);
                    }}
                    className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors flex items-center justify-center group"
                    aria-label="Minimize"
                    title="Minimize"
                  >
                    <span className="text-white text-[10px] font-bold leading-none">
                      −
                    </span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (window.isMaximized) {
                        restoreWindow(window.id);
                      } else {
                        maximizeWindow(window.id);
                      }
                    }}
                    className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors flex items-center justify-center group"
                    aria-label={window.isMaximized ? "Restore" : "Maximize"}
                    title={window.isMaximized ? "Restore" : "Maximize"}
                  >
                    <span className="text-white text-[8px] font-bold leading-none">
                      +
                    </span>
                  </button>
                </div>

                {/* Safari Icon and Window Title */}
                <div className="flex items-center gap-2 text-xs text-gray-600 flex-1 justify-center">
                  {/* Safari Compass Icon */}
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                    </svg>
                  </div>
                  <span className="truncate max-w-[200px] font-medium">
                    {window.title}
                  </span>
                </div>

                {/* Empty space for balance */}
                <div className="w-16"></div>
              </div>

              {/* Chrome Browser UI */}
              <div
                className={`flex flex-col h-full ${
                  theme === "dark" ? "bg-gray-900" : "bg-white"
                }`}
              >
                {/* Chrome Toolbar */}
                <div
                  className={`flex items-center h-10 px-2 gap-2 flex-shrink-0 border-b ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-700"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateBack(window.id);
                      }}
                      className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                        (window.history &&
                          window.history.length > 0 &&
                          window.historyIndex > 0) ||
                        getPreviousSection(window.component)
                          ? theme === "dark"
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-gray-700 hover:bg-gray-200"
                          : "text-gray-400 opacity-50 cursor-not-allowed"
                      }`}
                      aria-label="Back"
                      title="Back"
                      disabled={
                        (!window.history ||
                          window.history.length === 0 ||
                          window.historyIndex <= 0) &&
                        !getPreviousSection(window.component)
                      }
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
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateForward(window.id);
                      }}
                      className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                        (window.history &&
                          window.history.length > 0 &&
                          window.historyIndex < window.history.length - 1) ||
                        getNextSection(window.component)
                          ? theme === "dark"
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-gray-700 hover:bg-gray-200"
                          : "text-gray-400 opacity-50 cursor-not-allowed"
                      }`}
                      aria-label="Forward"
                      title="Forward"
                      disabled={
                        (!window.history ||
                          window.history.length === 0 ||
                          window.historyIndex >= window.history.length - 1) &&
                        !getNextSection(window.component)
                      }
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                    <button
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                      aria-label="Refresh"
                      title="Refresh"
                    >
                      <svg
                        className="w-5 h-5 text-gray-700 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Dark/Light Mode Toggle */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTheme();
                    }}
                    className={`w-8 h-8 flex items-center justify-center rounded transition-colors ${
                      theme === "dark"
                        ? "hover:bg-gray-700"
                        : "hover:bg-gray-200"
                    }`}
                    aria-label={
                      theme === "dark"
                        ? "Switch to light mode"
                        : "Switch to dark mode"
                    }
                    title={
                      theme === "dark"
                        ? "Switch to light mode"
                        : "Switch to dark mode"
                    }
                  >
                    {theme === "dark" ? (
                      <svg
                        className="w-5 h-5 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Address Bar - Full Width */}
                  <div className="flex-1 mx-2">
                    <div
                      className={`flex items-center rounded-md px-3 py-1.5 h-8 text-xs shadow-sm hover:shadow-md transition-shadow w-full ${
                        theme === "dark"
                          ? "bg-gray-700 border border-gray-600"
                          : "bg-white border border-gray-300"
                      }`}
                    >
                      {/* Site Icon */}
                      <div className="w-4 h-4 mr-2 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                      <span
                        className={`flex-1 truncate font-medium ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {getFakeUrl()}
                      </span>
                      {/* Bookmark Star */}
                      <button
                        className={`ml-2 w-4 h-4 flex items-center justify-center rounded flex-shrink-0 ${
                          theme === "dark"
                            ? "hover:bg-gray-600"
                            : "hover:bg-gray-100"
                        }`}
                        aria-label="Bookmark"
                        title="Bookmark this page"
                      >
                        <svg
                          className={`w-4 h-4 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Window Content - Full Screen */}
                <motion.div
                  key={window.component} // Key for re-rendering and animation
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-1 overflow-y-auto overflow-x-hidden ${
                    theme === "dark" ? "bg-gray-900" : "bg-white"
                  }`}
                  style={{ minHeight: 0, height: "calc(100vh - 107px)" }} // Adjusted height for toolbar and menu bar
                >
                  {children}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Draggable>
      )}
    </AnimatePresence>
  );
};

export default Window;
