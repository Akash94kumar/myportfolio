import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  ReactNode,
} from "react";
import { WindowState } from "../types";
import { getNextSection, getPreviousSection } from "../data/desktopIcons";

interface WindowContextType {
  windows: WindowState[];
  openWindow: (id: string, title: string, component: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  updateWindowPosition: (
    id: string,
    position: { x: number; y: number }
  ) => void;
  updateWindowSize: (
    id: string,
    size: { width: number; height: number }
  ) => void;
  bringToFront: (id: string) => void;
  getNextZIndex: () => number;
  navigateBack: (id: string) => void;
  navigateForward: (id: string) => void;
  navigateTo: (id: string, component: string, title: string) => void;
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

export const WindowProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const maxZIndexRef = useRef(1000);

  const getNextZIndex = useCallback(() => {
    maxZIndexRef.current += 1;
    return maxZIndexRef.current;
  }, []);

  const openWindow = useCallback(
    (id: string, title: string, component: string) => {
      setWindows((prev) => {
        const exists = prev.find((w) => w.id === id);
        if (exists) {
          return prev.map((w) => {
            if (w.id === id) {
              // If navigating to a different component, add to history
              if (w.component !== component) {
                const newHistory = w.history.slice(0, w.historyIndex + 1);
                newHistory.push(component);
                return {
                  ...w,
                  component,
                  title,
                  isMinimized: false,
                  isOpen: true,
                  zIndex: getNextZIndex(),
                  history: newHistory,
                  historyIndex: newHistory.length - 1,
                };
              }
              return {
                ...w,
                isMinimized: false,
                isOpen: true,
                zIndex: getNextZIndex(),
              };
            }
            return w;
          });
        }
        return [
          ...prev,
          {
            id,
            title,
            component,
            isOpen: true,
            isMinimized: false,
            isMaximized: true, // Open in fullscreen by default
            position: { x: 0, y: 0 },
            size: { width: window.innerWidth, height: window.innerHeight },
            zIndex: getNextZIndex(),
            history: [component],
            historyIndex: 0,
          },
        ];
      });
    },
    [getNextZIndex]
  );

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: !w.isMinimized } : w))
    );
  }, []);

  const maximizeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMaximized: true } : w))
    );
  }, []);

  const restoreWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isMaximized: false, isMinimized: false } : w
      )
    );
  }, []);

  const updateWindowPosition = useCallback(
    (id: string, position: { x: number; y: number }) => {
      setWindows((prev) =>
        prev.map((w) => (w.id === id ? { ...w, position } : w))
      );
    },
    []
  );

  const updateWindowSize = useCallback(
    (id: string, size: { width: number; height: number }) => {
      setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, size } : w)));
    },
    []
  );

  const bringToFront = useCallback(
    (id: string) => {
      setWindows((prev) =>
        prev.map((w) => (w.id === id ? { ...w, zIndex: getNextZIndex() } : w))
      );
    },
    [getNextZIndex]
  );

  const navigateTo = useCallback(
    (id: string, component: string, title: string) => {
      setWindows((prev) =>
        prev.map((w) => {
          if (w.id === id) {
            const newHistory = w.history.slice(0, w.historyIndex + 1);
            newHistory.push(component);
            return {
              ...w,
              component,
              title,
              history: newHistory,
              historyIndex: newHistory.length - 1,
            };
          }
          return w;
        })
      );
    },
    []
  );

  const navigateBack = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          // If there's history, go back in history
          if (w.history && w.history.length > 0 && w.historyIndex > 0) {
            const newIndex = w.historyIndex - 1;
            const componentMap: {
              [key: string]: { title: string; component: string };
            } = {
              AboutMe: { title: "About Me", component: "AboutMe" },
              Resume: { title: "Resume", component: "Resume" },
              Skills: { title: "Skills", component: "Skills" },
              Experience: { title: "Experience", component: "Experience" },
              Projects: { title: "Projects", component: "Projects" },
              Contact: { title: "Contact", component: "Contact" },
            };
            const prevComponent = w.history[newIndex];
            const prevData = componentMap[prevComponent] || {
              title: prevComponent,
              component: prevComponent,
            };
            return {
              ...w,
              component: prevData.component,
              title: prevData.title,
              historyIndex: newIndex,
            };
          } else {
            // If no history, go to previous section in serial order
            const prevComponent = getPreviousSection(w.component);
            if (prevComponent) {
              const componentMap: {
                [key: string]: { title: string; component: string };
              } = {
                AboutMe: { title: "About Me", component: "AboutMe" },
                Resume: { title: "Resume", component: "Resume" },
                Skills: { title: "Skills", component: "Skills" },
                Experience: { title: "Experience", component: "Experience" },
                Projects: { title: "Projects", component: "Projects" },
                Contact: { title: "Contact", component: "Contact" },
                GitHub: { title: "GitHub", component: "GitHub" },
              };
              const prevData = componentMap[prevComponent] || {
                title: prevComponent,
                component: prevComponent,
              };
              const newHistory =
                w.history && w.history.length > 0
                  ? [...w.history, prevComponent]
                  : [w.component, prevComponent];
              return {
                ...w,
                component: prevData.component,
                title: prevData.title,
                history: newHistory,
                historyIndex: newHistory.length - 1,
              };
            }
          }
        }
        return w;
      })
    );
  }, []);

  const navigateForward = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          // If there's forward history, go forward
          if (
            w.history &&
            w.history.length > 0 &&
            w.historyIndex < w.history.length - 1
          ) {
            const newIndex = w.historyIndex + 1;
            const componentMap: {
              [key: string]: { title: string; component: string };
            } = {
              AboutMe: { title: "About Me", component: "AboutMe" },
              Resume: { title: "Resume", component: "Resume" },
              Skills: { title: "Skills", component: "Skills" },
              Experience: { title: "Experience", component: "Experience" },
              Projects: { title: "Projects", component: "Projects" },
              Contact: { title: "Contact", component: "Contact" },
            };
            const nextComponent = w.history[newIndex];
            const nextData = componentMap[nextComponent] || {
              title: nextComponent,
              component: nextComponent,
            };
            return {
              ...w,
              component: nextData.component,
              title: nextData.title,
              historyIndex: newIndex,
            };
          } else {
            // If no forward history, go to next section in serial order
            const nextComponent = getNextSection(w.component);
            if (nextComponent) {
              const componentMap: {
                [key: string]: { title: string; component: string };
              } = {
                AboutMe: { title: "About Me", component: "AboutMe" },
                Resume: { title: "Resume", component: "Resume" },
                Skills: { title: "Skills", component: "Skills" },
                Experience: { title: "Experience", component: "Experience" },
                Projects: { title: "Projects", component: "Projects" },
                Contact: { title: "Contact", component: "Contact" },
                GitHub: { title: "GitHub", component: "GitHub" },
              };
              const nextData = componentMap[nextComponent] || {
                title: nextComponent,
                component: nextComponent,
              };
              const newHistory =
                w.history && w.history.length > 0
                  ? [...w.history, nextComponent]
                  : [w.component, nextComponent];
              return {
                ...w,
                component: nextData.component,
                title: nextData.title,
                history: newHistory,
                historyIndex: newHistory.length - 1,
              };
            }
          }
        }
        return w;
      })
    );
  }, []);

  return (
    <WindowContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        restoreWindow,
        updateWindowPosition,
        updateWindowSize,
        bringToFront,
        getNextZIndex,
        navigateBack,
        navigateForward,
        navigateTo,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindows = () => {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error("useWindows must be used within WindowProvider");
  }
  return context;
};
