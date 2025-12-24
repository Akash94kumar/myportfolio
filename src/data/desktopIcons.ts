import { DesktopIcon } from "../types";

// Resume sections in serial order
export const desktopIcons: DesktopIcon[] = [
  {
    id: "about",
    name: "About Me",
    icon: "FaUserTie",
    component: "AboutMe",
    order: 1,
  },
  {
    id: "resume",
    name: "Resume",
    icon: "FaFileAlt",
    component: "Resume",
    order: 2,
  },
  {
    id: "skills",
    name: "Skills",
    icon: "FaTools",
    component: "Skills",
    order: 3,
  },
  {
    id: "experience",
    name: "Experience",
    icon: "FaTimeline",
    component: "Experience",
    order: 4,
  },
  {
    id: "projects",
    name: "Projects",
    icon: "FaFolderOpen",
    component: "Projects",
    order: 5,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "FaEnvelope",
    component: "Contact",
    order: 6,
  },
];

// Get next and previous sections
export const getNextSection = (currentComponent: string): string | null => {
  const current = desktopIcons.find(
    (icon) => icon.component === currentComponent
  );
  if (!current || current.order === undefined) return null;
  const currentOrder = current.order;
  const next = desktopIcons.find((icon) => icon.order === currentOrder + 1);
  return next ? next.component : null;
};

export const getPreviousSection = (currentComponent: string): string | null => {
  const current = desktopIcons.find(
    (icon) => icon.component === currentComponent
  );
  if (!current || current.order === undefined) return null;
  const currentOrder = current.order;
  const prev = desktopIcons.find((icon) => icon.order === currentOrder - 1);
  return prev ? prev.component : null;
};

export const getSectionByOrder = (order: number) => {
  return desktopIcons.find((icon) => icon.order === order);
};
