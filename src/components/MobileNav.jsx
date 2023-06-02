import { useEffect, useRef } from "react";
import { navData } from "../data";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const MobileNav = ({nav, setNav}) => {
  
  const handleNav = () => {
    setNav(!nav);
  };

  /*-----Menu click outside CLOSED, start */
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNav(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  /*Menu click outside CLOSED, end ------*/

  /*-----Menu CLOSED on scroll start */
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNav(false);
    });
  }, []);
  /*Menu CLOSED on scroll end ----*/

  return (
    <div ref={menuRef}>
      {/* MOBILE NAV */}
      <div onClick={handleNav} className="block md:hidden z-10 ">
        <HiOutlineBars3BottomRight
          size={33}
          className={!nav ? " text-black" : " text-white z-40 "}
        />
      </div>
      <div
        //nav true - show mobile nav
        className={
          nav
            ? "fixed md:hidden top-0 right-0 bottom-0 w-[50%] h-full bg-gray-800  text-white flex flex-col justify-start pt-24 px-4 items-end gap-5 -z-40 duration-300"
            : "fixed md:hidden top-0 right-[-100%] w-[50%] h-full bg-gray-800  text-white flex flex-col justify-start pt-24 px-4 items-end -z-40 gap-5 duration-300"
        }
      >
        {navData.map((link, index) => (
          <ul key={index} className="w-full">
            <li className="border-b border-b-gray-500 w-full py-2 font-thin">
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
    </div>
  );
};

export default MobileNav;
