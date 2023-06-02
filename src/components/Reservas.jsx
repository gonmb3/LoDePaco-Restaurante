import React from "react";
import Formulario from "./Formulario";

const Reservas = () => {
  return (
    <div
      id="reservas"
      className="w-full h-full mx-auto bg-orange-500/80 py-14 font-serif  sm:px-4 md:px-18 lg:px-20"
    >
      <div className="text-center px-8">
        <div className="w-full flex justify-center mb-2">
          <img src="/src/assets/img/paco-svg-black.svg" className="w-[48px]" alt="" />
        </div>
        <h2 className="">Reservas</h2>
        <p className="text-[15px] md:text-[19px] text-gray-800/90 mt-5">
          Prioridad a las reservas realizadas vía telefónica +598 2908 0805.
        </p>
        <p className="text-[15px] md:text-[19px] text-gray-800/90">
          {" "}
          Fechas especiales (día de la madre, día del padre, fin de año, etc.)
          solo reserva telefónica.
        </p>
      </div>

      {/* FORMULARIO */}
      <div className="max-w-[1200px] m-auto mt-10">
        <Formulario />
      </div>
    </div>
  );
};

export default Reservas;
