import { useEffect, useState } from "react";
import { navBar } from "../common/Elements";
import { Link, Events, scrollSpy } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import logo from "../assets/LogoHt.jpeg";
import "./ScrollNav.css";

const ScrollNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Define media queries
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" }); // sm breakpoint
  const isMediumScreen = useMediaQuery({ query: "(min-width: 641px)" }); // md & above breakpoint

  useEffect(() => {
    const handleScroll = () => {
      let scrollYThreshold;
      if (isSmallScreen) {
        scrollYThreshold = 12; // Adjust threshold for small screens
      } else {
        scrollYThreshold = 100; // Default threshold for medium & above screens
      }

      if (window.scrollY > scrollYThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSmallScreen, isMediumScreen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-16 lg:h-20 bg-neutral-900 transition-transform duration-300 content-center ease-in-out z-50 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className=" flex font-semibold justify-center gap-x-4 md:gap-x-8 items-center">
        <img
          src={logo}
          alt="LOGO"
          className=" h-[40px] md:h-[66px] rounded-full"
        />
        {navBar.map((item, idx) => {
          return (
            <Link
              to={item.path}
              smooth={true}
              spy={true}
              offset={-50}
              duration={800}
              key={idx}
              activeClass="active-link"
            >
              <h1 className=" font-poppins text-white text-xs md:text-lg py-2 hover:translate-y-1 duration-300 cursor-pointer">
                {item.title}
              </h1>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default ScrollNav;
