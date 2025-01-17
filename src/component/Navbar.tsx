import React, { useState, useRef, useEffect } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";

type Navlinks = {
  title: string;
  path: string;
};

const navlinks: Navlinks[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Project",
    path: "/project",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [showNavLinks, setShowNavlinks] = useState(false);
  const location = useLocation();
  const navMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target as Node)
      ) {
        setShowNavlinks(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="py-10 px-6 lg:px-36 flex items-center justify-between pb-10">
      <div ref={navMenuRef}>
        <button onClick={() => setShowNavlinks(!showNavLinks)}>
          {showNavLinks ? (
            <LiaTimesSolid size={24} color="#FFF" />
          ) : (
            <HiOutlineMenuAlt1 size={24} color="#FFF" />
          )}
        </button>

        {showNavLinks && (
          <div className="grid gap bg-primary w-[200px] mt-1 absolute">
            {navlinks.map((link, index) => {
              const isCurrentPage = location.pathname === link.path;

              return (
                <Link
                  key={index}
                  to={link.path}
                  className={`
                    ${isCurrentPage && "text-secondary"}
                    py-3 px-6 font-big_shoulders_display font-medium text-[22px] hover:bg-opacity-30`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex items-center gap-6 ">
        <a href="#" className="text-white py-2 px-5">
          Resume
        </a>

        <button className="bg-white text-primary font-medium text-base py-2 px-5 rounded-[40px]">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
