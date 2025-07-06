import { Hero, Studies } from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <div>
        <div class="bg-[#3f64e96e] blur-[150px] w-[570px] h-[180px] -left-64 absolute"></div>
      </div>
      <Studies />
    </>
  );
};

export default Home;
