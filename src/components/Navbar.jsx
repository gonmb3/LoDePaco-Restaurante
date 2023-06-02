import { useState, useEffect } from "react";
import { navData } from "../data";
import logo from "../assets/img/logoo.png";
import MobileNav from "./MobileNav";

const Navbar = () => {
  //mobile nav state
  const [nav, setNav] = useState(false);

  // header background on scroll state
  const [bg, setBg] = useState(false);

   //scroll event
   useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 150 ? setBg(true) : setBg(false);
    });
  });

  return (

    <div
      className={
        bg
          ? "w-full text-black fixed  top-0 md:top-[35px]  flex justify-between items-center h-[56px] px-3 md:px-18  lg:px-20 z-20 bg-white duration-500  shadow-md shadow-black/20 "
          : "w-full text-black border-b fixed top-0 md:top-[35px] flex justify-between items-center h-[90px] px-3 md:px-18  lg:px-20 z-10 duration-500 bg-white"
      }
    >
      {/* LOGO */}
      <div
        className={
          !bg
            ? "w-[130px] h-[70px] md:w-[180px] md:h-[90px] py-3 flex justify-start duration-500 cursor-pointer"
            : "w-[130px] h-[70px]  py-3 flex justify-start duration-500 cursor-pointer"
        }
      >
        <a href="#inicio" className="w-[140px] h-full">
          <img src={logo} alt="LOGO" className="w-full h-full object-cover" />
        </a>
      </div>
      {/* NAV LINKS */}
      <div className="hidden  md:flex items-center gap-6">
        {navData.map((link, index) => (
          <ul key={index}>
            <li>
              <a
                className="text-[1rem] uppercase hover:text-yellow-500/80 duration-300 "
                href={"#" + link.href}
              >
                {link.text}{" "}
              </a>
            </li>
          </ul>
        ))}
      </div>

      {/* MOBILE NAV COMPONENT */}
     <div className="block md:hidden ">
     <MobileNav nav={nav} setNav={setNav} />
     </div>
    </div>
  );
};

export default Navbar;
