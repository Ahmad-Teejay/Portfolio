// Add new projects here. image paths point to /public/projects/*
// Replace github and demo "#" values with your real URLs once available.
//
// `images` is an array — add as many screenshots as you want per
// project (dashboard view, a feature screen, mobile view, etc).
// The card will auto-cycle through them. A single-item array just
// shows one static image, same as before.
export const projects = [
  {
    id: "finova",
    name: "Finova",
    description:
      "A modern fintech dashboard focused on digital wallet management, transactions, payments, and account functionality.",
    images: ["/projects/finova.png", "/projects/finova-2.png", "/projects/finova-3.png"],
    tech: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "REST APIs",
      "Authentication",
      "Paystack",
    ],
    features: [
      "User authentication",
      "Wallet balance",
      "Credit/debit transactions",
      "Add money",
      "Transfers",
      "Withdrawals",
      "Payment integration",
    ],
    github: "#", // TODO: add real GitHub repo URL
    demo: "#", // TODO: add real live demo URL
  },
  {
    id: "naturelle",
    name: "Naturèlle Beauty",
    description:
      "A modern skincare e-commerce application with product browsing, shopping cart functionality, responsive UI, and checkout flow.",
    images: ["/projects/naturelle.png", "/projects/naturelle-5.png", "/projects/naturelle-2.png", "/projects/naturelle-3.png", "/projects/naturelle-4.png"],
    tech: ["React", "JavaScript", "Tailwind CSS", "React Router", "Context API", "useReducer", "REST API"],
    features: [],
    github: "#", // TODO: add real GitHub repo URL
    demo: "#", // TODO: add real live demo URL
  },
  {
    id: "weather",
    name: "Weather Application",
    description:
      "A responsive weather application that provides weather information through API integration.",
    images: ["/projects/weather.png", "/projects/weather-2.png", "/projects/weather-3.png"],
    tech: ["React", "JavaScript", "API Integration", "Tailwind CSS"],
    features: [],
    github: "git@github.com:Ahmad-Teejay/E-commerce-website.git", // TODO: add real GitHub repo URL
    demo: "https://naturelle-nine.vercel.app/", // TODO: add real live demo URL
  },
];

// Shown as a trailing "coming soon" card in the Projects section.
export const moreProjectsPlaceholder = {
  name: "More Projects Coming Soon",
};
