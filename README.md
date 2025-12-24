# Akash Kumar - Portfolio

A production-ready React + TypeScript portfolio application that visually mimics the Windows 11 operating system UI.

## Features

- 🪟 **Windows 11 UI**: Authentic Windows 11 design with glassmorphism effects
- 🚀 **Boot Screen**: Windows 11-style boot/loading animation
- 🔐 **Login Screen**: Password-protected login (no real authentication)
- 🖥️ **Desktop Environment**: Full desktop experience with:
  - Centered taskbar with Start Menu
  - Search functionality
  - Pinned apps
  - System tray with clock, network, and battery icons
  - Desktop icons
- 📱 **Draggable & Resizable Windows**: All apps open in draggable, resizable windows
- 🎨 **Desktop Apps**:
  - About Me
  - Resume
  - Skills
  - Experience Timeline
  - Projects (with modals)
  - Contact
  - GitHub
  - LinkedIn
- ✨ **Animations**: Smooth animations using Framer Motion
- ♿ **Accessible**: Keyboard accessible and WCAG-compliant
- 📱 **Responsive**: Fully responsive design

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation (if needed)
- **Context API** - State management
- **React Draggable** - Window dragging
- **React Resizable** - Window resizing
- **Vite** - Build tool

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd myportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── apps/          # Desktop application components
│   │   ├── AboutMe.tsx
│   │   ├── Resume.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── GitHub.tsx
│   │   └── LinkedIn.tsx
│   ├── BootScreen.tsx
│   ├── LoginScreen.tsx
│   ├── Desktop.tsx
│   ├── DesktopIcons.tsx
│   ├── Taskbar.tsx
│   ├── StartMenu.tsx
│   ├── Window.tsx
│   └── WindowManager.tsx
├── context/
│   └── WindowContext.tsx    # Window state management
├── data/
│   ├── resumeData.ts        # Resume content
│   └── desktopIcons.ts      # Desktop icon definitions
├── types/
│   └── index.ts             # TypeScript type definitions
├── App.tsx                   # Main app component
├── main.tsx                  # Entry point
└── index.css                 # Global styles
```

## Usage

1. **Boot Screen**: Wait for the boot animation to complete
2. **Login**: Enter any password and click "Sign In"
3. **Desktop**: 
   - Double-click desktop icons to open apps
   - Use the Start Menu to launch applications
   - Click taskbar icons to switch between windows
   - Drag windows to move them
   - Resize windows by dragging the edges
   - Minimize, maximize, or close windows using the title bar buttons

## Customization

### Update Resume Data

Edit `src/data/resumeData.ts` to update:
- Personal information
- Skills and proficiency levels
- Work experience
- Projects
- Education
- Contact information

### Add New Desktop Apps

1. Create a new component in `src/components/apps/`
2. Add the app to `src/data/desktopIcons.ts`
3. Add the component case in `src/components/WindowManager.tsx`

### Styling

The app uses Tailwind CSS with custom Windows 11 colors defined in `tailwind.config.js`. Modify the theme to customize colors and animations.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

**Akash Kumar**
- Senior Software Engineer
- 6+ Years Experience

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

