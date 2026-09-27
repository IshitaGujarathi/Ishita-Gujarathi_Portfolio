// All structural content for the "developer journey" narrative device.
// The rail, navbar level indicator, and every Level section read from here.

export const LEVELS = [
  { id: "home", level: "00", label: "Start" },
  { id: "beginning", level: "01", label: "The Beginning" },
  { id: "skills", level: "02", label: "Foundations" },
  { id: "dsa", level: "03", label: "Learning to Think" },
  { id: "projects", level: "04", label: "First Real Builds" },
  { id: "growth", level: "05", label: "Break / Debug / Improve" },
  { id: "architecture", level: "06", label: "Full Stack" },
  { id: "ship", level: "07", label: "Ship It" },
  { id: "education", level: "08", label: "Education" },
  { id: "experience", level: "09", label: "Experience" },
  { id: "status", level: "10", label: "Current Status" },
  { id: "contact", level: "11", label: "Next Level" },
];

// Level 01 — the beginning
export const BEGINNING_STEPS = [
  {
    state: "CURIOUS",
    text: "It started in a Computer Engineering classroom — trying to understand what actually happens when code runs.",
  },
  {
    state: "LEARNING",
    text: "Curiosity turned into structured learning: syntax first, then logic, then how systems fit together.",
  },
  {
    state: "EXPERIMENTING",
    text: "Every small program became an experiment. Break it, understand why, rebuild it better.",
  },
];

// Level 02 — skill tree
export const SKILL_TREE = [
  {
    id: "java",
    name: "Java",
    state: "LEARNED",
    blurb: "The language everything else was built on top of.",
    nodes: [
      {
        name: "OOP",
        state: "LEARNED",
        detail:
          "Encapsulation, inheritance, polymorphism, and abstraction — applied in every backend project since.",
      },
      {
        name: "Spring Boot",
        state: "LEARNED",
        detail:
          "REST services, dependency injection, and application configuration for production-style backends.",
      },
    ],
  },
  {
    id: "sql",
    name: "SQL & Databases",
    state: "LEARNED",
    blurb: "Learning to think in tables, relationships, and queries.",
    nodes: [
      {
        name: "DBMS",
        state: "LEARNED",
        detail: "Normalization, transactions, and indexing fundamentals.",
      },
      {
        name: "Queries",
        state: "LEARNED",
        detail: "Writing and structuring SQL across MySQL, PostgreSQL, and Supabase.",
      },
    ],
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    state: "CURRENTLY EXPLORING",
    blurb: "Problem solving as its own discipline — separate from any one language.",
    nodes: [
      {
        name: "Problem Solving",
        state: "CURRENTLY EXPLORING",
        detail:
          "Working through core patterns across arrays, trees, and graphs — the full path is mapped in Level 03.",
      },
    ],
  },
  {
    id: "frontend",
    name: "React & Frontend",
    state: "LEARNED",
    blurb: "Turning backend logic into something a person can actually use.",
    nodes: [
      {
        name: "React.js",
        state: "LEARNED",
        detail: "Component architecture, state management, and REST integration.",
      },
      {
        name: "Responsive UI",
        state: "LEARNED",
        detail: "Interfaces built to hold up across devices, not just a 1440px mockup.",
      },
    ],
  },
];

// Level 03 — DSA arc
export const DSA_PATH = [
  "Arrays",
  "Strings",
  "Sorting",
  "Searching",
  "Linked Lists",
  "Stack",
  "Queue",
  "Trees",
  "Graphs",
];

// Level 05 — break, debug, improve
export const DEBUG_CYCLE = [
  {
    stage: "BUILD",
    text: "Ship the first working version of a feature.",
  },
  {
    stage: "ERROR",
    text: "A REST endpoint returns the wrong shape, or a query silently fails.",
  },
  {
    stage: "DEBUG",
    text: "Trace it through logs, breakpoints, and Postman requests until the real cause shows up.",
  },
  {
    stage: "UNDERSTAND",
    text: "Usually it's not the bug itself — it's a gap in how the frontend and backend were talking to each other.",
  },
  {
    stage: "FIX",
    text: "Patch the actual cause, not just the symptom.",
  },
  {
    stage: "IMPROVE",
    text: "Refactor so the same class of bug is harder to reintroduce next time.",
  },
];

// Level 06 — full-stack architecture
export const ARCHITECTURE_LAYERS = [
  {
    name: "User",
    detail: "Interacts with the interface — the starting point every request traces back to.",
  },
  {
    name: "React",
    detail: "Renders the UI and manages client-side state before talking to the backend.",
  },
  {
    name: "REST API",
    detail: "The contract between frontend and backend — defined endpoints, predictable responses.",
  },
  {
    name: "Spring Boot",
    detail: "Handles business logic, request routing, and application configuration.",
  },
  {
    name: "JPA / Hibernate",
    detail: "Maps Java objects to relational data without hand-writing every query.",
  },
  {
    name: "MySQL / Database",
    detail: "Where the data actually lives — structured, related, and queried.",
  },
  {
    name: "Deployment",
    detail: "Ships the whole stack somewhere a real user can reach it.",
  },
];

// Level 07 — ship it
export const PIPELINE_STEPS = [
  { step: "CODE", tool: "Git" },
  { step: "COMMIT", tool: "GitHub" },
  { step: "TEST", tool: "Postman" },
  { step: "BUILD", tool: "Docker" },
  { step: "DEPLOY", tool: "Vercel / Render" },
  { step: "SHIP", tool: "Live" },
];

// Level 10 — current status
export const CURRENTLY_BUILDING = ["Java", "Spring Boot", "React", "DSA"];

export const LOOKING_FOR = [
  "Software Engineer",
  "Java Developer",
  "Java Full Stack Developer",
  "Backend Developer",
  "Full Stack Developer",
];
