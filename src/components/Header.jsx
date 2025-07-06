import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  const [hovered, setHovered] = useState(0);
  return (
    <header className="fixed left-1/2 top-10 z-[999] -translate-x-1/2 w-full md:w-auto">
      <nav className="relative animate-jump-in animate-once animate-duration-1000">
        <ul className="relative grid grid-cols-4 items-center justify-center py-2 border border-white/10 backdrop-blur-md rounded-full shadow-lg transition-all duration-200 ease-in-out mx-2 md:mx-0">
          {navItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setHovered(index + 1)}
              onMouseLeave={() => setHovered(0)}
              className="relative z-10 px-2 md:px-4 text-center py-2 rounded-full cursor-pointer transition-colors duration-300 text-neutral-300">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
          <div
            className={`absolute top-0 h-full w-1/4 bg-white/10 rounded-full transition-all duration-300 ${
              hovered !== 0 ? "opacity-100" : "opacity-0"
            } left-0`}
            style={{
              transform: `translateX(${hovered ? (hovered - 1) * 100 : 0}%)`,
            }}></div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
