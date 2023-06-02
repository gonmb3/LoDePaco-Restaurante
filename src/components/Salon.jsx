
import salon from "../assets/img/salon.jpg"

const Salon = () => {


  return (
    <div className="w-full h-[80%] md:h-[80vh] flex flex-row-reverse flex-wrap justify-between  " >
      {/*NOSOTROS TEXT */}
      <div className="min-h-[380px] w-full md:w-6/12 md:flex justify-center flex-col text-center  items-center gap- md:gap-1 py-10 md:py-14 px-10">
        
        <h2 className="border-none py-5">
          SALÓN PRINCIPAL
        </h2>

       <div className="py-5 md:py-0">
       <span className="font-serif py-4 text-gray-500/80">Capacidad: <br />110 personas</span>
       </div>

        <p className="text-[12px] md:text-[19px] font-semibold font-serif text-gray-600 py-3  border-t-2 border-gray-600   md:w-[300px] d-block ">WIFI</p>
        <p className="text-[12px] md:text-[19px] font-semibold font-serif text-gray-600 py-3  border-t-2 border-gray-600   md:w-[300px] d-block ">MÚSICA FUNCIONAL</p>
        <p className="text-[12px] md:text-[19px] font-semibold font-serif text-gray-600 py-3  border-t-2 border-gray-600   md:w-[300px] d-block ">BAÑOS</p>
        <p className="text-[12px] md:text-[19px] font-semibold font-serif text-gray-600 py-3  border-t-2 border-gray-600   md:w-[300px] d-block ">AIRE ACONDICIONADO</p>



      </div>

      {/*NOSOTROS SLIDER */}

      <div className=" h-full md:w-6/12 ">
      <img src={salon} alt="img" className="w-full h-full object-cover" />

      </div>
    </div>
  );
};

export default Salon;
