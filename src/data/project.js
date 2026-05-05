const projects = [
  {
    id: "teamodoro",
    title: "Teamodoro",
    description:
      "A collaborative task management platform featuring integrated Gantt charts for timeline tracking and built-in Pomodoro timers for focus sessions.",
    tech: [
      "ReactJS - Typescipt",
      "TailwindCSS",
      "Zustand",
      "Framer-motion",
      "Dnd-kit core",
      "Firebase",
      "Cloudinary",
    ],
    role: "Full stack developer",
    responsibility: [
      "Designed and developed a system with support for team, board, and task hierarchy using ReactJS and Zustand.",
      "Built real-time drag-and-drop task handling with Dnd-kit and framer-motion.",
      "Integrated Pomodoro timer and weekly view for timeline tracking and focus management.",
    ],
    image: "/images/teamodoro.jpeg",
    github: "https://github.com/hnduong0711/Teamodoro.git",
    livedemo: "https://resumio-b2216.web.app",
  },
  {
    id: "cinestar",
    title: "Cinestar",
    description: "A modern, end-to-end movie booking solution that manages the full user lifecycle—from secure authentication to digital ticket issuance. The platform focuses on handling high-frequency asynchronous data updates for cinema showtimes and implementing a 'locked-seat' logic during the booking process. It ensures a consistent, responsive experience across all devices while maintaining strict security protocols for user data.",
    tech: ["ReactJS", "TailwindCSS", "React Slick"],
    role: "Front end developer",
    responsibility: [
      "End-to-End Flow: Developed the complete user journey from Authentication to Seat Selection & Booking.",
      "State Management: Utilized React Context API to manage global states.",
      "Responsive UI: Built a pixel-perfect, mobile-first interface using Tailwind CSS.",
      "Data Fetching: Handled RESTful APIs with Axios, including token interceptors and async data processing. ",
    ],
    image: "/images/cinestar.png",
    github: "https://github.com/hnduong0711/Cinestar.git",
    livedemo: "",
    videodemo: "",
  },
  {
    id: "futa",
    title: "Futa",
    description: "A comprehensive, high-performance bus ticketing platform designed to streamline the intercity travel booking process. The application features a real-time seat reservation engine, dynamic route searching with multi-condition filtering, and a seamless checkout flow.",
    tech: [
      "ReactJS - Typescipt",
      "TailwindCSS",
      "Redux Toolkit",
      "Framer-motion",
    ],
    role: "Front end developer",
    responsibility: [
      "Full-stack Frontend Development: Built the entire end-to-end booking flow, from searching routes to seat selection and payment processing.",
      "State Management & Architecture: Managed complex global states using Redux Toolkit.",
      "Advanced Interactivity: Implemented smooth, app-like transitions and animations using Framer Motion and Slick Carousel for an enhanced user experience.",
      "Data Handling: Integrated RESTful APIs with Axios, utilizing Date-fns/Moment for precise scheduling.",
      
    ],
    image: "/images/futa.png",
    github: "https://github.com/hnduong0711/Futa.git",
    livedemo: "",
    videodemo: "",
  },
  {
    id: "youtube",
    title: "Youtube",
    description:
      "A dynamic video-hosting web application built to replicate core YouTube functionalities. The project focuses on server-side rendering for SEO optimization and utilizes asynchronous data processing to provide a smooth, non-blocking user interface for video interactions and content discovery.",
    tech: [
      "HTML CSS",
      "JavaScript",
      "Laravel Blade",
      "AJAX (jQuery)",
    ],
    role: "Full stack developer",
    responsibility: [
      "Full-stack UI: Developed a responsive frontend using HTML/CSS (BEM) and Laravel Blade templates.",
      "Asynchronous Mapping: Used AJAX to fetch and render backend data for real-time interactions (Load More, Live Search).",
      "Server-side Logic: Architected backend routing, controllers, and database relationships via Laravel.",
      "Dynamic Rendering: Implemented complex logic for video lists and user profiles using Blade directives.",
    ],
    image: "/images/ytb.png",
    github: "https://github.com/hnduong0711/MyYoutube.git",
    livedemo: "",
  },
];

export default projects;
