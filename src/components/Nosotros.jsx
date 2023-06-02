import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { nosotrosData } from "../data";




const Nosotros = () => {


  return (
    <div className="w-full md:h-[88vh]  flex flex-wrap justify-between  overflow-y-hidden " id="nosotros">
      {/*NOSOTROS TEXT */}
      <div className="w-full md:w-6/12 md:flex justify-center flex-col text-center  items-center gap-7 md:gap-1  py-10 md:pb-28 px-10">
        <div className="w-full flex justify-center mb-2"> 
        <img src="/src/assets/img/paco-svg.svg" className="w-[48px]" alt="" />
        </div>
        <h2 className="">
          Nosotros
        </h2>
        <p className=" text-gray-600 py-8">
          En pleno centro de Montevideo y desde 1963, somos representantes de
          las mejores tradiciones de la gastronomía uruguaya. Quienes nos
          visiten podrán disfrutar de una completa parrilla con carnes de
          exportación, una exclusiva propuesta de cortes Dry Aged, además de
          pescados, mariscos y pastas artesanales de elaboración propia.
          Ofrecemos además una gran variedad de vinos nacionales e importados en
          la cava del subsuelo del local.
        </p>
        <p>
          También nos puede visitar en nuestro local ubicado en la Plaza de
          Comidas del Punta Carretas Shopping. Un lugar que tiene las
          características, aromas y sabores típicos de la parrilla uruguaya.
        </p>
      </div>

      {/*NOSOTROS SLIDER */}

      <div className=" md:h-[88vh]   md:w-6/12 ">
      <Carousel
        autoPlay={false}
        stopOnHover={true}
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={99999}
      >
      {
        nosotrosData.map((img, index) => (
          <div 
            className="h-full "
             key={index}>
            <img src={img.img} alt="hero" className=" h-[44vh] md:h-[88vh] w-full object-cover"/>
					</div>
          
        ))
        }
        </Carousel>

      </div>
    </div>
  );
};

export default Nosotros;
