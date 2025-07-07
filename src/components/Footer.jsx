import { Link } from "react-router-dom";
import { useCopy } from "../context/CopyContext";

const contactLinks = [
  { id: 1, title: "Email", type: "text", info: "bohdan05zbr@gmail.com" },
  {
    id: 2,
    title: "LinkedIn",
    type: "link",
    info: "https://www.linkedin.com/in/bohdan-zhytchenko/",
  },
  { id: 3, title: "GitHub", type: "link", info: "https://github.com/Vnyway" },
  { id: 4, title: "Telegram", type: "link", info: "https://t.me/vnywvy" },
  { id: 5, title: "Phone number", type: "text", info: "+380967600960" },
];

const returnContactInfo = ({ id, title, type, info, handleCopy }) => {
  return (
    <li key={id}>
      {type === "text" ? (
        <button
          onClick={() => handleCopy(id, info)}
          className="hover:underline hover:text-neutral-300 bg-transparent border-none p-0 m-0 cursor-pointer text-left"
          title={`Copy ${title}`}>
          {title}
        </button>
      ) : (
        <Link
          to={info}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-neutral-300">
          {title}
        </Link>
      )}
    </li>
  );
};

const Footer = () => {
  const { handleCopy } = useCopy();
  return (
    <>
      <footer className="py-10 mx-auto container max-w-3xl text-neutral-300 px-4 md:px-0 md:py-20 z-50 animate-fade-up animate-once animate-duration-1000 animate-delay-[600ms]">
        <div className="border rounded-lg p-6 flex flex-col md:flex-row justify-between">
          <div className="logo flex flex-col justify-end mb-6 md:mb-0">
            <p className="second-font text-5xl">
              Bohdan
              <br />
              Zhytchenko
            </p>
          </div>
          <div className="flex flex-row space-x-12">
            <div className="menu mb-6 md:mb-0">
              <h3 className="text-neutral-300 mb-4">Explore</h3>
              <ul className="flex flex-col text-neutral-500 font-light">
                <li>
                  <a
                    href="/"
                    className="hover:underline hover:text-neutral-300">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:underline hover:text-neutral-300">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="hover:underline hover:text-neutral-300">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className="contacts">
              <h3 className="text-neutral-300 mb-4">Let's Connect</h3>
              <ul className="flex flex-col text-neutral-500 font-light">
                {contactLinks.map((link) =>
                  returnContactInfo({ ...link, handleCopy })
                )}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div>
        <div className="bg-[#3f64e96e] w-[570px] h-[180px] blur-[150px] opacity-100 -left-64 absolute"></div>
      </div>
    </>
  );
};

export default Footer;
