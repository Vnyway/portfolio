const Background = () => {
  return (
    <div className="absolute left-[50%] top-[-2%] z-0 flex h-[35rem] w-full max-w-[1200px] translate-x-[-50%] items-center justify-center md:top-[-2%]">
      <div className="relative">
        <div className="bg-[#3f64e96e] blur-[150px] w-[570px] h-[180px] absolute left-0 top-0"></div>
        <div className="bg-[#3fe9c46e] blur-[130px] w-[570px] h-[264px] absolute left-0 top-0 translate-x-[-50%]"></div>
        <div className="bg-[#6a2fd86e] blur-[130px] w-[570px] h-[140px] absolute right-0 top-0"></div>
      </div>
    </div>
  );
};
export default Background;
