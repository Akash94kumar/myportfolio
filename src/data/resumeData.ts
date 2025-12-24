import { Project, Experience, Skill } from "../types";

export const resumeData = {
  name: "Akash Kumar",
  role: "Senior Software Engineer",
  experience: "6+ Years Experience",
  summary: `I have 6+ years of experience in IT, with a focus on both Front-End and Back-End development. Specifically, I have 4+ years of relevant experience in React.js, Redux, Context API, React Hooks, JavaScript (ES6+), DOM manipulation, NPM, Material UI, Bootstrap, CSS3, HTML5, and Bitbucket. Additionally, I am proficient in frontend design, responsive web design techniques, and modern UI/UX practices.`,
};

export const skills: Skill[] = [
  {
    category: "Core Technologies",
    items: [
      {
        name: "React.js",
        level: 95,
        description:
          "Component-based UI development, Virtual DOM, State management",
      },
      {
        name: "TypeScript",
        level: 90,
        description:
          "Type-safe and scalable frontend applications, Static type checking",
      },
      {
        name: "JavaScript (ES6+)",
        level: 95,
        description:
          "Modern JavaScript features, ES6+ syntax, Async programming",
      },
      {
        name: "Redux Toolkit",
        level: 90,
        description: "Global state management, Async logic with Thunk",
      },
      {
        name: "Context API",
        level: 90,
        description:
          "React Context for state management, Prop drilling elimination",
      },
      {
        name: "React Hooks",
        level: 95,
        description: "useState, useEffect, useCallback, useMemo, Custom hooks",
      },
      {
        name: "DOM Manipulation",
        level: 90,
        description: "Direct DOM manipulation, Event handling, DOM APIs",
      },
    ],
  },
  {
    category: "UI/UX & Styling",
    items: [
      {
        name: "Material UI",
        level: 85,
        description: "Material Design components, Theming, Responsive layouts",
      },
      {
        name: "Bootstrap",
        level: 85,
        description: "CSS framework, Grid system, Responsive utilities",
      },
      {
        name: "CSS3",
        level: 90,
        description: "Advanced styling, Flexbox, Grid, Animations, Transitions",
      },
      {
        name: "HTML5",
        level: 95,
        description: "Semantic HTML, Modern HTML5 features, Accessibility",
      },
      {
        name: "Responsive Design",
        level: 95,
        description: "Mobile-first design, Media queries, Breakpoints",
      },
      {
        name: "UI/UX Design",
        level: 85,
        description:
          "User interface design, User experience principles, Design systems",
      },
    ],
  },
  {
    category: "Testing & Quality",
    items: [
      {
        name: "Jest",
        level: 85,
        description: "Unit testing, Snapshot testing, Mock functions",
      },
      {
        name: "React Testing Library",
        level: 85,
        description: "Component testing, User-centric testing, Query methods",
      },
      {
        name: "Accessibility (WCAG)",
        level: 85,
        description: "WCAG compliance, ARIA attributes, Keyboard navigation",
      },
      {
        name: "Storybook",
        level: 80,
        description:
          "Component documentation, Isolated component development, Visual testing",
      },
    ],
  },
  {
    category: "Performance & Architecture",
    items: [
      {
        name: "Performance Optimization",
        level: 90,
        description:
          "Bundle optimization, Rendering optimization, Performance profiling",
      },
      {
        name: "Micro Frontends",
        level: 80,
        description:
          "Modular frontend architecture, Independent deployment, Module federation",
      },
      {
        name: "Code Splitting",
        level: 85,
        description:
          "Dynamic imports, Route-based splitting, Lazy loading components",
      },
      {
        name: "Lazy Loading",
        level: 85,
        description:
          "Component lazy loading, Image lazy loading, On-demand loading",
      },
      {
        name: "Memoization",
        level: 85,
        description:
          "React.memo, useMemo, useCallback, Performance optimization",
      },
      {
        name: "Virtualization",
        level: 80,
        description: "react-window, Virtual scrolling, Large list optimization",
      },
    ],
  },
  {
    category: "API & Integration",
    items: [
      {
        name: "RESTful APIs",
        level: 90,
        description:
          "REST API integration, HTTP methods, API design principles",
      },
      {
        name: "Axios",
        level: 90,
        description:
          "HTTP client, Request/response interceptors, Error handling",
      },
      {
        name: "Fetch API",
        level: 90,
        description: "Native fetch API, Promise-based requests, Async/await",
      },
      {
        name: "GraphQL (Apollo Client)",
        level: 75,
        description: "GraphQL queries, Apollo Client, Data fetching",
      },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      {
        name: "Git",
        level: 90,
        description: "Version control, Branching strategies, Git workflows",
      },
      {
        name: "Bitbucket",
        level: 90,
        description: "Code repository, Pull requests, Code reviews",
      },
      {
        name: "CI/CD",
        level: 85,
        description:
          "Continuous Integration, Continuous Deployment, Automated pipelines",
      },
      {
        name: "Bitbucket Pipelines",
        level: 85,
        description: "CI/CD pipelines, Automated builds, Deployment automation",
      },
      {
        name: "Webpack",
        level: 80,
        description: "Module bundler, Asset optimization, Build configuration",
      },
      {
        name: "Babel",
        level: 80,
        description: "JavaScript compiler, ES6+ transpilation, Polyfills",
      },
      {
        name: "ESLint",
        level: 85,
        description: "Code linting, Code quality, Custom rules",
      },
      {
        name: "Prettier",
        level: 85,
        description: "Code formatting, Consistent code style, Auto-formatting",
      },
    ],
  },
  {
    category: "Team Collaboration",
    items: [
      {
        name: "JIRA",
        level: 90,
        description: "Project management, Sprint planning, Issue tracking",
      },
      {
        name: "Confluence",
        level: 85,
        description: "Documentation, Knowledge sharing, Team collaboration",
      },
      {
        name: "Slack",
        level: 90,
        description: "Team communication, Channel management, Integration",
      },
      {
        name: "Figma",
        level: 85,
        description: "UI/UX design, Design collaboration, Prototyping",
      },
      {
        name: "Agile Methodology",
        level: 90,
        description: "Scrum, Sprint planning, Agile practices",
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Mobile Programming",
    role: "Senior Software Engineer",
    period: "Jan 2025 - Present",
    description: [
      "Working on Shein (Impetus) project for Reliance (Jio)",
      "Collaborating with development team to brainstorm and refine user interface concepts",
      "Developing and integrating highly responsive UI components utilizing React and Material UI frameworks",
      "Working with APIs to integrate backend data and enhance frontend functionality",
      "Using TypeScript for static type checking and better maintainability",
      "Following component-driven development using Storybook for UI components",
      "Participating in code reviews and agile ceremonies using Slack and JIRA",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Redux",
      "Material UI",
      "Storybook",
      "ES6",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    id: "2",
    company: "SellCraft Global Solutions",
    role: "Software Engineer",
    period: "Feb 2023 - May 2024",
    description: [
      "Worked on Xvantage project for EHI (Ingram Micro)",
      "Discussed UI/UX concepts with the team and implemented reusable components",
      "Developed scalable and responsive interfaces using React and Material UI",
      "Integrated REST APIs and handled state management using Redux",
      "Used TypeScript for better code maintainability and debugging",
      "Wrote unit tests using Jest and React Testing Library for key components",
      "Followed accessibility guidelines (WCAG) for an inclusive UI",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Redux",
      "Material UI",
      "Jest",
      "React Testing Library",
      "ES6",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    id: "3",
    company: "Data Core Technology",
    role: "Software Engineer",
    period: "Jan 2022 - Aug 2022",
    description: [
      "Worked on PDR (Physical Damage Reserve) project for EHI (Enterprise Holdings Inc)",
      "Participated in UI planning meetings and worked on implementing clean UI components",
      "Built modular components using React and Material UI",
      "Integrated APIs for vehicle damage tracking",
      "Managed state using Redux",
      "Worked on CMS (Citation Management Solution) project for EHI",
      "Worked closely with UI/UX team for feature implementation",
      "Built responsive components with React",
      "Integrated REST APIs and managed application state with Redux",
      "Involved in daily stand-ups and sprint planning using JIRA",
    ],
    technologies: [
      "React.js",
      "Redux",
      "Material UI",
      "ES6",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    id: "4",
    company: "Instasoft Services",
    role: "Software Developer",
    period: "Apr 2018 - Dec 2021",
    description: [
      "Worked on Real-Estate Panel project - a lead management panel with multiuser login",
      "Meeting with development team to discuss user interface ideas and applications",
      "Developing and implementing highly responsive user interface components using React concepts",
      "Working with APIs",
      "Worked on Pip and Nuts - an e-commerce website for selling products",
      "Worked on Khariod365 - a computer parts selling website",
      "Worked on Edu Yoda - a college and course related Q&A site",
    ],
    technologies: [
      "React.js",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "ES6",
      "PHP",
      "MySQL",
      "Laravel",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Shein (Impetus)",
    description:
      "Reliance Impetus offers technology solutions for eCommerce platforms, enhancing digital experiences and retail operations, while Shein is a leading fast-fashion eCommerce marketplace, leveraging data-driven strategies and a rapid supply chain for global growth and affordability.",
    technologies: [
      "React.js",
      "TypeScript",
      "Redux",
      "Material UI",
      "ES6",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    link: undefined,
  },
  {
    id: "2",
    title: "Xvantage",
    description:
      "Ingram Micro offers security solutions, cloud infrastructure solutions, business applications, communications and collaborations, backup and disaster recovery, professional services, management and training solutions, digital solutions and managed service provider solutions.",
    technologies: [
      "React.js",
      "TypeScript",
      "Redux",
      "Material UI",
      "Jest",
      "React Testing Library",
      "ES6",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    link: "https://www.ingrammicro.com",
  },
  {
    id: "3",
    title: "PDR (Physical Damage Reserve)",
    description:
      "A project to maintain details of vehicle damage parts for Enterprise Holdings Inc.",
    technologies: [
      "React.js",
      "Redux",
      "Material UI",
      "ES6",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    link: "https://www.enterpriseholdings.com",
  },
  {
    id: "4",
    title: "CMS (Citation Management Solution)",
    description:
      "CMS is a car rental web-based application used to process citation (i.e, Registration, parking, and moving violations, red light camera and tools) as well as various tax (i.e bus lane congestion).",
    technologies: [
      "React.js",
      "Redux",
      "Material UI",
      "ES6",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    link: "https://www.enterpriseholdings.com",
  },
  {
    id: "5",
    title: "Real-Estate Panel",
    description:
      "A lead management panel with multiuser login, employee record management, manual lead management by employees, and selling record management.",
    technologies: ["React.js", "HTML", "CSS", "Bootstrap", "ES6", "JavaScript"],
    link: undefined,
  },
  {
    id: "6",
    title: "Pip and Nuts",
    description: "An e-commerce website for selling Pip and Nuts products.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "ES6", "React.js"],
    link: undefined,
  },
  {
    id: "7",
    title: "Khariod365",
    description:
      "A computer parts selling website where clients can upload products, update deals, and delete deals.",
    technologies: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
    link: "https://kharido365.co.in/",
  },
  {
    id: "8",
    title: "Edu Yoda",
    description:
      "A college and course related Q&A site where users can ask questions and get answers.",
    technologies: [
      "HTML5",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Laravel",
      "MySQL",
    ],
    link: "https://eduyoda.com/",
  },
];

export const education = [
  {
    degree: "BCA",
    field: "Bachelor of Computer Applications",
    institution: "Magadh University, Bodh Gaya",
    year: "2016",
  },
  {
    degree: "12th",
    field: "Higher Secondary",
    institution: "BSEB Patna",
    year: "2013",
  },
  {
    degree: "10th",
    field: "Secondary",
    institution: "BSEB Patna",
    year: "2009",
  },
];

export const contact = {
  email: "akash94jmp@gmail.com",
  phone: "+91 7979014470",
  linkedin: "https://linkedin.com/in/akashkumar",
};
