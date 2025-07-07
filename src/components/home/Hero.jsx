import { useState } from "react";
import CopiedToast from "../CopiedToast";
import { Link } from "react-router-dom";

const handleCopy = (id, info, copied, setCopied) => {
  navigator.clipboard.writeText(info).then(() => {
    setCopied(id);
    setTimeout(() => setCopied(0), 1500);
  });
};

const Hero = () => {
  const [copied, setCopied] = useState(0);
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
              src="./images/avatar.jpg"
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
              <Link target="_blank" to="https://t.me/vnywvy">
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
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-2 text-center">
          <div className="flex justify-center gap-4">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/bohdan-zhytchenko-305a67316/">
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
            </Link>
            <Link target="_blank" to="https://github.com/Vnyway">
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
            </Link>
            <Link target="_blank" to="https://t.me/vnywvy">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 relative group overflow-hidden rounded-full p-2 bg-transparent text-gray-50 hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105 hover:-rotate-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-custom">
                  <path d="M40.83,8.48c1.14,0,2,1,1.54,2.86l-5.58,26.3c-.39,1.87-1.52,2.32-3.08,1.45L20.4,29.26a.4.4,0,0,1,0-.65L35.77,14.73c.7-.62-.15-.92-1.07-.36L15.41,26.54a.46.46,0,0,1-.4.05L6.82,24C5,23.47,5,22.22,7.23,21.33L40,8.69a2.16,2.16,0,0,1,.83-.21Z" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
              </button>
            </Link>
            <button
              onClick={() =>
                handleCopy(1, "bohdan05zbr@gmail.com", copied, setCopied)
              }
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 relative group overflow-hidden rounded-full p-2 bg-transparent text-gray-50 hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105 hover:-rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="lucide lucide-envelope">
                <path
                  d="M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009
      c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067
      c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745
      c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51
      c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05
      c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104
      c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929
      c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443
      c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925
      l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244
      c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16
      c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572
      c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
            </button>
            <button
              onClick={() => handleCopy(2, "+380967600960", copied, setCopied)}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 relative group overflow-hidden rounded-full p-2 bg-transparent text-gray-50 hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105 hover:-rotate-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10"
                  stroke="#fff"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
                  stroke="#fff"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                  stroke="#fff"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
            </button>
            <Link to="/">
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
            </Link>
          </div>
        </div>
        <CopiedToast
          show={copied}
          message={copied === 1 ? "Email copied!" : "Mobile phone copied!"}
        />
      </main>
    </div>
  );
};

export default Hero;
