const techStack = [
  { name: "React", icon: "./images/tech-stack/react.svg" },
  { name: "Javascript", icon: "/images/tech-stack/javascript.svg" },
  { name: "Tailwind CSS", icon: "/images/tech-stack/tailwindcss.svg" },
  { name: "HTML", icon: "/images/tech-stack/html.svg" },
  { name: "CSS", icon: "/images/tech-stack/css.svg" },
  {
    name: "Framer Motion",
    icon: "/images/tech-stack/framer-motion.svg",
  },
  { name: "Git", icon: "/images/tech-stack/git.svg" },
  { name: "GitHub", icon: "/images/tech-stack/github.svg" },
];

const workedWith = [
  { name: "Typescript", icon: "/images/tech-stack/typescript.svg" },
  { name: "Node.JS", icon: "/images/tech-stack/nodedotjs.svg" },
  { name: "MongoDB", icon: "/images/tech-stack/mongodb.svg" },
  { name: "AWS", icon: "/images/tech-stack/aws.svg" },
  { name: "Redux", icon: "/images/tech-stack/redux.svg" },
];

const TechStack = () => {
  return (
    <section className="pt-10 mx-auto container max-w-3xl px-4 md:px-0 md:pt-20 z-50 animate-fade-up animate-once animate-delay-[300ms]">
      <p className="text-xl font-light text-neutral-300 mb-5 tracking-widest text-left">
        Tech Stack
      </p>
      <div className="flex flex-wrap gap-2 items-center mb-[40px]">
        {techStack.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center p-2 bg-neutral-950/30 rounded-xl">
            <img
              alt={tech.name}
              loading="lazy"
              width={25}
              height={25}
              decoding="async"
              className="filter invert"
              src={tech.icon}
              style={{ color: "transparent" }}
            />
            <p className="ml-2 mr-1 text-sm text-neutral-300">{tech.name}</p>
          </div>
        ))}
      </div>
      <p className="text-xl font-light text-neutral-300 mb-5 tracking-widest text-left">
        Worked With
      </p>
      <div className="flex flex-wrap gap-2 items-center">
        {workedWith.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center p-2 bg-neutral-950/30 rounded-xl">
            <img
              alt={tech.name}
              loading="lazy"
              width={25}
              height={25}
              decoding="async"
              className="filter invert"
              src={tech.icon}
              style={{ color: "transparent" }}
            />
            <p className="ml-2 mr-1 text-sm text-neutral-300">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
