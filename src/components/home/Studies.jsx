import { useState } from "react";

const studies = [
  {
    image: "./images/kpi.png",
    time: "Sep 2022 – Present",
    title:
      'National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute"',
    degree: "Bachelor's in Information Systems and Technologies (3rd year)",
  },
  {
    image: "./images/school.png",
    time: "Sep 2010 - Jun 2022",
    title: "Polonne Gymnasium",
    degree: "Completed Secondary Education with Honors",
  },
];

const languages = [
  {
    flag: "./images/ukrainian.png",
    title: "Ukrainian",
    level: "Native",
  },
  {
    flag: "./images/english.png",
    title: "English",
    level: "B2",
  },
  {
    flag: "./images/german.png",
    title: "German",
    level: "B1",
  },
];

const makeStudyCard = ({ image, time, title, degree, index }) => (
  <li key={index} className="relative ml-10 pr-2 py-4">
    <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
      <img
        alt="Digital Perspective"
        loading="lazy"
        width="48"
        height="48"
        decoding="async"
        className="rounded-full"
        src={image}
        style={{ color: "transparent" }}
      />
    </div>
    <div className="flex flex-col gap-1 text-white">
      <time className="text-xs text-gray-400">{time}</time>
      <h2 className="font-semibold leading-none">{title}</h2>
      <p className="text-sm text-gray-400">{degree}</p>
    </div>
  </li>
);

const makeLanguageCard = ({ flag, title, level, index }) => (
  <li key={index} className="relative ml-10 pr-2 py-4">
    <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
      <img
        alt="Digital Perspective"
        loading="lazy"
        width="48"
        height="48"
        decoding="async"
        className="rounded-full"
        src={flag}
        style={{ color: "transparent" }}
      />
    </div>
    <div className="flex flex-col gap-1 text-white">
      <h2 className="font-semibold leading-none">{title}</h2>
      <p className="text-sm text-gray-400">{level}</p>
    </div>
  </li>
);

const Studies = () => {
  const [selected, setSelected] = useState(0);
  return (
    <section
      style={{
        animationIterationCount: 1,
        animationDelay: "500ms",
      }}
      className="pt-10 mx-auto container max-w-3xl px-4 md:px-0 md:pt-20 z-50 animate-fade-up animate-once animate-delay-[600ms]">
      <p className="text-xl font-light text-neutral-300 mb-5 tracking-widest text-left">
        Knowledge
      </p>
      <div
        className="h-9 items-center justify-center rounded-lg bg-neutral-950/30 text-muted-foreground mb-2 grid w-full grid-cols-2 relative"
        role="tablist"
        aria-orientation="horizontal">
        <div
          className={`absolute w-1/2 -z-10 inset-0 rounded-lg bg-white transition-all duration-500 ease-in-out transform ${
            selected === 1 ? "translate-x-[100%]" : "translate-x-0"
          }`}
        />
        <button
          role="tab"
          aria-selected="true"
          onClick={() => setSelected(0)}
          className={`inline-flex items-center transition-all duration-500 ease-in-out ${
            selected === 0 ? "text-foreground" : "text-neutral-300"
          } justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all bg-background text-foreground shadow`}>
          Studies
        </button>
        <button
          role="tab"
          aria-selected="false"
          onClick={() => setSelected(1)}
          className={`inline-flex items-center duration-500 ease-in-out justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all ${
            selected === 1 ? "text-foreground" : "text-neutral-300"
          }`}>
          Languages
        </button>
      </div>
      <div
        role="tabpanel"
        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-neutral-300 rounded-lg">
        <ul
          className={`ml-10 ${
            selected === 0 ? "border-l border-neutral-300" : ""
          } list-none`}>
          {selected === 0 ? (
            <>{studies.map((study, index) => makeStudyCard(study, index))}</>
          ) : (
            <>
              {languages.map((language, index) =>
                makeLanguageCard(language, index)
              )}
            </>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Studies;
