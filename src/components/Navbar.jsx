import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { sami, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo ve ana sayfa linki */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={sami} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Sami &nbsp;
            <span className="sm:block hidden"> | Frontend Developer</span>
          </p>
        </Link>

        {/* Desktop Navigasyon Linkleri */}
        <ul
          className={`list-none sm:flex hidden flex-row gap-10 ml-auto ${
            toggle ? "flex" : "hidden"
          }`}
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobil Menü Toggle İkonu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* Mobil Navigasyon Menüsü */}
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sm:hidden`}
      >
        <ul
          className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title 
                ? "text-white" 
                : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16]`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* // Mobil Navigasyon Menüsü gpt */}
        {/* <ul className="list-none flex flex-col items-end pr-5">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                setToggle(false);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul> */}
      </div>
    </nav>
  );
};
export default Navbar;
