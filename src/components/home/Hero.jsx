import React from "react";

const Hero = () => {
  return (
    <div
      className="py-48 px-4 md:px-0 z-50 animate-fade-up duration-1000"
      style={{
        transform: "translate(-7.52px, -5.75px)",
        transition: "transform 0.2s ease-out",
        animationIterationCount: 1,
        animationDelay: "300ms",
      }}>
      <main className="max-w-l">
        <div className="pt-2 text-center flex items-center justify-center gap-4">
          <div className="relative inline-block w-16 h-16 md:w-20 md:h-20">
            <img
              alt="Bohdan Zhytchenko"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="rounded-full transition-transform duration-500 hover:scale-125 hover:-rotate-12 border"
              sizes="100vw"
              src="./logo192.png"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                objectFit: "cover",
                color: "transparent",
              }}
            />
          </div>
          <h1 className="text-gray-50 text-xl text-left leading-5">
            <span className="font-fira font-medium">Bohdan Zhytchenko</span>
            <br />
            <span className="text-xs">
              <img
                alt="Germany"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                className="inline-block mr-1 -mt-1"
                src="./images/germany.png"
                style={{ color: "transparent" }}
              />
              <span>Based in Germany</span>
            </span>
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-5xl text-gray-50 font-bold md:text-6xl lg:text-8xl font-fira">
            FRONTEND
          </h1>
        </div>
        <div className="flex text-[10px] items-center justify-center gap-1">
          <h1 className="text-4xl text-gray-50 font-bold md:text-6xl lg:text-8xl font-fira">
            DEVELOPER
          </h1>
          <div className="relative">
            <div className="relative ml-2">
              <a href="https://t.me/vnywvy">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 relative group overflow-hidden bg-transparent text-gray-50 rounded-full hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105">
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
                    className="lucide lucide-send mr-2 h-4 w-4">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                    <path d="m21.854 2.147-10.94 10.939"></path>
                  </svg>
                  <span className="second-font">Contact me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-2 text-center">
          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/bohdan-zhytchenko-305a67316/">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 relative group overflow-hidden rounded-full p-2 bg-transparent text-gray-50 hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105 hover:-rotate-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
              </button>
            </a>
            <a href="https://github.com/Vnyway">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 relative group overflow-hidden rounded-full p-2 bg-transparent text-gray-50 hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105 hover:-rotate-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
              </button>
            </a>
            <a href="/">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 relative group overflow-hidden rounded-full p-2 bg-transparent text-gray-50 hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105 hover:-rotate-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-text">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
              </button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
