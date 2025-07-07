import { Hero, Projects, Studies, TechStack } from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <section class="pb-20 -mb-20 w-screen px-6 border-t border-neutral-800 rounded-t-2xl mx-auto"></section>
      <div>
        <div className="bg-[#3f64e96e] w-[570px] h-[180px] blur-[150px] opacity-100 -left-64 absolute"></div>
      </div>
      <Studies />
      <TechStack />
      <div>
        <div class="bg-[#3fe9c46e] blur-[130px] w-[750px] h-[264px] -right-64 absolute"></div>
      </div>
      <Projects />
      <div>
        <div class="bg-[#3f64e96e] w-[570px] h-[180px] blur-[150px] -left-96 opacity-50 absolute"></div>
      </div>
    </>
  );
};

export default Home;
