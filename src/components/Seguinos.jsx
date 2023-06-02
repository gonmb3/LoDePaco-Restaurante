import seguinos1 from "../assets/img/seguinos1.png";
import seguinos2 from "../assets/img/seguinos2.png";
import seguinos3 from "../assets/img/seguinos3.png";
import seguinos4 from "../assets/img/seguinos4.png";
import seguinos5 from "../assets/img/seguinos5.png";
import seguinos6 from "../assets/img/seguinos6.png";

import { FaInstagram } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";

const Seguinos = () => {
  return (
    <div className="h-full  ">
      <div className="h-full lg:flex items-center justify-center max-w-[1440px]  py-14  gap-5 lg:gap-18  mx-auto sm:px-4 md:px-18 lg:px-20">
        <div className=" text-center pb-20 mb:pb-0  lg:py-0 px-10">
          <div className="w-full flex justify-center mb-2">
            <img
              src="/src/assets/img/paco-svg.svg"
              className="w-[48px]"
              alt=""
            />
          </div>
          <h2 className="">SEGUINOS</h2>
          <div className="flex flex-col items-center gap-8 pt-10  ">
            <ImFacebook size={32} className="text-gray-800" />
            <span className="text-gray-700 font-serif text-[19px]">
              @lodePacoUy
            </span>
            <FaInstagram size={32} className="text-gray-800" />
            <span className="text-gray-700 font-serif text-[19px]">
              @lodePacoUy
            </span>
          </div>
        </div>

        <div class=" grid grid-cols-2 md:grid-cols-3  gap-2 shadow-sm  mx-auto px-10 md:px-0 m-auto">
          <div class=" md:w-full">
            <img src={seguinos6} alt="image" />
          </div>
          <div class=" md:w-full">
            <img src={seguinos1} alt="image" />
          </div>
          <div class=" md:w-full">
            <img src={seguinos3} alt="image" />
          </div>
          <div class=" md:w-full">
            <img src={seguinos5} alt="image" />
          </div>
          <div class=" md:w-full">
            <img src={seguinos4} alt="image" />
          </div>
          <div class=" md:w-full">
            <img src={seguinos2} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seguinos;
