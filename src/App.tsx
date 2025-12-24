import { WindowProvider } from "./context/WindowContext";
import { ThemeProvider } from "./context/ThemeContext";
import Desktop from "./components/Desktop";

function App() {
  return (
    <ThemeProvider>
      <WindowProvider>
        <div className="w-screen h-screen overflow-hidden">
          <Desktop />
        </div>
      </WindowProvider>
    </ThemeProvider>
  );
}

export default App;
