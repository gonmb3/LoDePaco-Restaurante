import React from "react";

const SalonBanner = () => {
  return (
    <div id="salones"  className='relative w-full h-full text-center py-28 md:py-36 flex  items-center justify-center  bg-fixed bg-[url("/src/assets/img/salonesBanner.jpg")] bg-center bg-cover  '>
      <div className="text-white z-10">
        <div className="w-full flex justify-center mb-2">
          <img src="/src/assets/img/paco-svg.svg" className="w-[48px]" alt="" />
        </div>
        <h2 className=" drop-shadow-lg border-t border-white tracking-wider text-white">
          Salones
        </h2>
        <p className="text-[20px] md:text-[29px] font-serif drop-shadow-lg  tracking-wider">
          Tenemos el salón ideal para cada evento
        </p>
      </div>

      {/* BLACK BG HOVER EFFECT */}
      <div className="absolute w-full h-full bg-black/50 top-0 bottom-0 left-0 right-0 z-0" />
    </div>
  );
};

export default SalonBanner;
