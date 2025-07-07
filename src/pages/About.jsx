import { HeroSection, TechStack } from "../components";

const About = () => {
  return (
    <>
      <HeroSection
        heading={"Hi, I'm Bohdan Zhytchenko."}
        paragraph={`A frontend developer with experience in web development. I enjoy working
        across all stages of a project, from concept to delivery, and I'm always
        looking for ways to improve both my technical skills and the user
        experience.`}
      />
      <section class="pb-20 -mb-20 w-screen px-6 border-t border-neutral-800 rounded-t-2xl mx-auto"></section>
      <div>
        <div className="bg-[#3f64e96e] w-[570px] h-[180px] blur-[150px] opacity-100 -left-64 absolute"></div>
      </div>
      <TechStack />
      <div>
        <div class="bg-[#3fe9c46e] blur-[130px] w-[750px] h-[264px] -right-64 absolute"></div>
      </div>
    </>
  );
};

export default About;
