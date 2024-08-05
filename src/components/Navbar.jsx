import React from "react";
import { navBar } from "../common/Elements";
import logo from "../assets/LogoHt.jpeg";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className=" flex justify-between font-normal items-center">
      <img
        src={logo}
        alt="LOGO"
        className=" h-[60px] md:h-[90px] rounded-full"
      />
      <div className=" md:flex gap-x-7 hidden">
        {navBar.map((item) => {
          return (
            <div key={item.id} className=" font-poppins">
              <Link to={item.path} smooth={true} duration={800}>
                <h1 className=" text-lg hover:text-green-400 font-semibold hover:translate-y-[5px] duration-700 cursor-pointer">
                  {item.title}
                </h1>
              </Link>
            </div>
          );
        })}
      </div>
      <button className=" border-2 border-white rounded-md px-2 md:px-5 py-1 md:py-2 text-sm md:text-xl">
        Contact
      </button>
    </div>
  );
};

export default Navbar;
