import { HeroSection, Projects } from "../components";

const ProjectsPage = () => {
  return (
    <>
      <HeroSection
        heading={"Projects"}
        paragraph={`Here you can explore how I've applied my frontend skills to bring ideas to life. Each project reflects my focus on clean design, responsive layouts, and user-centered development.`}
      />
      <section class="pb-20 -mb-20 w-screen px-6 border-t border-neutral-800 rounded-t-2xl mx-auto"></section>
      <div>
        <div className="bg-[#3f64e96e] w-[570px] h-[180px] blur-[150px] opacity-100 -left-64 absolute"></div>
      </div>
      <Projects />
      <div>
        <div class="bg-[#3fe9c46e] blur-[130px] w-[750px] h-[264px] -right-64 absolute"></div>
      </div>
    </>
  );
};

export default ProjectsPage;
