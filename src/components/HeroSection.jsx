const HeroSection = ({ heading, paragraph }) => {
  return (
    <section className="pt-48 pb-32 mx-auto container max-w-3xl px-4 md:px-0 md:pt-48 md:pb-32 z-50 space-y-4 text-center animate-fade animate-once animate-duration-1000 animate-delay-300">
      <h1 className="text-4xl text-gray-50 font-semibold md:text-4xl lg:text-6xl font-fira">
        {heading}
      </h1>
      <h2 className="text-2xl text-neutral-300 font-thin md:text-2xl lg:text-2xl">
        {paragraph}
      </h2>
    </section>
  );
};

export default HeroSection;
