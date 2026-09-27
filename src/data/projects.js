// Projects, framed as "missions" within the journey narrative.
// Edit this file to update project content — Projects.jsx renders directly
// from this array. Only verified projects and details are included.

export const projects = [
  {
    id: "placement-tracker",
    missionNumber: "01",
    featured: true,
    name: "Placement Preparation Tracker",
    narrative:
      "Instead of keeping my preparation scattered across notes, websites, and spreadsheets, I built a platform to organize the journey.",
    objective: "Organize and track technical placement preparation.",
    description:
      "A full-stack platform for managing placement preparation — DSA progress, certifications, projects, goals, and preparation activities in one place.",
    stack: ["Java", "Spring Boot", "React.js", "MySQL", "Spring Data JPA", "REST APIs", "Postman", "Git"],
    features: [
      "DSA progress tracking",
      "Certification management",
      "Project tracking",
      "Goal management",
      "CRUD operations over a RESTful backend",
      "Database persistence with MySQL",
      "API testing using Postman",
      "AI-assisted preparation features",
      "Deployed frontend and backend",
    ],
    status: "Deployed",
    github: "https://github.com/IshitaGujarathi/Placement-Preparation-Tracker--Careerforge",
    demo: "https://placement-preparation-tracker-caree.vercel.app/",
  },
  {
    id: "realtime-chat",
    missionNumber: "02",
    featured: false,
    name: "Real-Time Chat Application",
    narrative:
      "REST polling is too slow for a real conversation. I wanted to understand how persistent connections actually work.",
    objective: "Build instant communication between users.",
    description:
      "A real-time chat application built with React.js and Spring Boot, using WebSocket communication for instant messaging.",
    stack: ["React.js", "Spring Boot", "WebSocket", "STOMP", "SockJS", "Java"],
    features: [
      "Real-time messaging over WebSocket",
      "Public group messaging",
      "Private one-to-one messaging",
      "STOMP protocol for message framing",
      "SockJS fallback support",
      "Responsive chat interface",
    ],
    status: "Deployed",
    github: "https://github.com/IshitaGujarathi/Real-Time-ChatApplication",
    demo: "https://real-time-chat-application-omega-mauve.vercel.app/",
  },
  {
    id: "ecommerce",
    missionNumber: "03",
    featured: false,
    name: "E-Commerce Website",
    narrative:
      "Built to practice structuring a multi-page commerce frontend without leaning on a backend to do the hard work.",
    objective: "Build a responsive, modern shopping interface.",
    description:
      "A responsive e-commerce web application focused on product browsing and modern frontend development.",
    stack: ["React.js", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Product browsing and filtering",
      "Responsive layout across devices",
      "Component-driven UI structure",
      "Client-side state handling",
    ],
    status: "Deployed",
    github: "https://github.com/IshitaGujarathi",
    demo: "https://ecommerce-website-ashy-psi.vercel.app/",
  },
];
