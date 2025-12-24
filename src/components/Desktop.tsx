import { useWindows } from "../context/WindowContext";
import MenuBar from "./MenuBar";
import Dock from "./Dock";
import WindowManager from "./WindowManager";

const Desktop: React.FC = () => {
  const { windows } = useWindows();

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* macOS Wallpaper from CDN */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80")`,
        }}
      ></div>

      {/* macOS Menu Bar */}
      <MenuBar />

      {/* Window Manager */}
      <WindowManager windows={windows} />

      {/* macOS Dock */}
      <Dock />
    </div>
  );
};

export default Desktop;
