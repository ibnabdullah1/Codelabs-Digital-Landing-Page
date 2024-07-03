import { useEffect } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo dark.png";
import "./Navbar.css";
import { NavLinks } from "./NavbarList";
const Navbar = () => {
  useEffect(() => {
    const menu = document.querySelector(".menu");
    const openMenuBtn = document.querySelector(".open-menu-btn");
    const closeMenuBtn = document.querySelector(".close-menu-btn");

    const toggleMenu = () => {
      menu.classList.toggle("open");
      menu.style.transition = "transform 0.5s ease";
    };

    const removeMenuStyle = () => {
      menu.removeAttribute("style");
    };

    openMenuBtn?.addEventListener("click", toggleMenu);
    closeMenuBtn?.addEventListener("click", toggleMenu);
    menu?.addEventListener("transitionend", removeMenuStyle);

    return () => {
      openMenuBtn?.removeEventListener("click", toggleMenu);
      closeMenuBtn?.removeEventListener("click", toggleMenu);
      menu?.removeEventListener("transitionend", removeMenuStyle);
    };
  }, []);

  return (
    <header className="header bg-gray-100">
      <div className="logo ">
        <Link to={"/"}>
          <img className="w-[100px]" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="menu ">
        <div className="head">
          <button type="button" className="close-menu-btn"></button>
        </div>
        <ul>
          {NavLinks.map((item, i) => (
            <li key={i}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <button className="border hidden lg:flex border-[#020043] px-3 py-2  rounded-xl text-[#020043] font-semibold items-center">
        Appointment
        <MdOutlineArrowOutward className="pl-1 text-xl " />
      </button>
      <div className="flex lg:hidden header-right ">
        <button type="button" className="open-menu-btn">
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
