import { Hero, Studies } from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="border-[#e5e5e5] w-screen border-b-[1px] opacity-10 overflow-visible relative">
        <div className="bg-[#3f64e96e] w-[570px] h-[180px] blur-[150px] opacity-100 -left-64 absolute"></div>
      </div>
      <Studies />
    </>
  );
};

export default Home;
