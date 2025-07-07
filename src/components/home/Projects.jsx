import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Createx",
    image: "/images/projects/createx.png",
    description:
      "Createx is a modern, responsive website for a fictional construction company. This project implements the full front-end experience with dynamic routing, animated UI elements, and interactive forms using React and Tailwind CSS.",
    link: "https://createx-app.netlify.app/",
    github: "https://github.com/Vnyway/createx-app",
    tags: [
      "React",
      "React Router DOM",
      "Tailwindcss",
      "Framer Motion",
      "React Hook Form",
    ],
  },
  {
    id: 2,
    name: "Coursework",
    image: "/images/projects/coursework.png",
    description:
      "This web application provides a complete set of tools for solving the optimal cargo placement problem on a platform. It allows users to input or generate problem data, solve it using greedy and stochastic algorithms, and conduct experimental research to analyze algorithm efficiency.",
    link: "https://bright-douhua-5e4b1d.netlify.app/",
    github: "https://github.com/Vnyway/coursework2025",
    tags: ["React", "React Router DOM", "Tailwindcss", "Recharts"],
  },
  {
    id: 3,
    name: "Furniro",
    image: "/images/projects/furniro.png",
    description:
      "Furniro is a modern e-commerce front-end application for a fictional furniture store. Built with React, TypeScript, Redux, and Tailwind CSS, it allows users to browse, compare, and order furniture through a clean and responsive UI.",
    link: "https://furn1ro.netlify.app/",
    github: "https://github.com/Vnyway/furniro-app",
    tags: [
      "React",
      "React Router DOM",
      "TypeScript",
      "Redux Toolkit",
      "Framer Motion",
      "Tailwindcss",
      "React Hook Form",
    ],
  },
  {
    id: 4,
    name: "Portfolio",
    image: "/images/projects/portfolio.png",
    description:
      "This portfolio website showcases my skills, projects, and experience as a front-end developer. It features a modern design, smooth animations, and responsive layout, built with React and Tailwind CSS.",
    link: "https://github.com/Vnyway/portfolio",
    github: "https://github.com/Vnyway/portfolio",
    tags: ["React", "React Router DOM", "Framer Motion", "Tailwindcss"],
  },
];

const Projects = () => {
  return (
    <section className="pt-10 mx-auto container max-w-3xl px-4 md:px-0 md:pt-20 z-50 animate-fade-up animate-once animate-duration-1000 animate-delay-[600ms]">
      <div className="flex flex-row justify-between mb-5 tracking-widest">
        <p className="text-xl font-light text-neutral-300">Projects</p>
        <span className="text-l font-light items-center text-neutral-300 transition">
          Click the card to see the live demo.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.link}
            target="_blank"
            className="border border-neutral-300 rounded-lg flex flex-col justify-between hover:-translate-y-2 transition ease-in-out duration-300">
            <img
              alt={project.name}
              className="w-full h-58 object-cover rounded-t-md"
              src={project.image}
            />
            <div className="p-2 flex-grow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg text-gray-50">{project.name}</h3>
                <Link
                  to={project.github}
                  target="_blank"
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 relative group overflow-hidden bg-transparent text-gray-50 rounded-full hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105">
                  <span className="second-font">Discover Code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right ml-2 h-5 w-5">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
                </Link>
              </div>
              <p className="text-neutral-400 text-sm mb-4">
                {project.description}
              </p>
            </div>
            <div className="p-2">
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-neutral-200 text-foreground px-2 py-1 rounded-md text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
