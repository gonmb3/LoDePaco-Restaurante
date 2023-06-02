import { menuData } from "../data";


const Menu = () => {

  return (
    <div id="menu" className="w-full font-serif h-full  flex flex-col justify-center items-center bg-gray-300 mt-14  overflow-y-hidden md:mt-0 sm:px-3 md:px-18  py-10  lg:px-20">
     
     <div className="w-full flex justify-center mb-2"> 
        <img src="/src/assets/img/paco-svg.svg" className="w-[48px]" alt="" />
        </div>
      <h2 className="pb-10">MENÚ</h2>
    {/* menu data */}
      <div class="container grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:gap-y-3 lg:gap-0 mx-auto px-10 md:px-0 m-auto">
        {menuData.map((data) => (
          <>
            <div key={data.id} className=" md:w-full border-4 border-gray-300 ">
              <img src={data.img} alt="image" />
            </div>

            <div className="  min-h-[230px] md:h-full md:w-full  border-4 border-gray-300  flex flex-col justify-center items-center text-center gap-3 px-5 bg-orange-400/70  text-white">
              <h5 className="text-3xl drop-shadow-md">{data.textOne} </h5>
              <p className="uppercase">{data.textTwo} </p>
              <span className="text-4xl drop-shadow-md">+</span>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Menu;
