import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { sliderDataImgs } from "../data";


const SliderHero = () => {

       

  return (
   <div className="relative h-[50vh] md:h-[90vh]  w-full   overflow-y-hidden" id="inicio">
        <Carousel
        autoPlay
        stopOnHover={true}
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
        
      >
        {
        sliderDataImgs.map((img, index) => (
          <div 
          className=" w-full  h-[48vh] md:h-[90vh] " key={index}>

            <img src={img.img} alt="hero" className="object-cover h-full"/>
            <div className="absolute top-[45%] w-full m-auto text-white px-5 z-50">
						<h1 className="text-[29px] md:text-[50px] font-serif drop-shadow-lg uppercase tracking-wider  font-medium">{img.textOne}</h1>
            <span className="text-[29px] md:text-[50px] font-serif drop-shadow-lg uppercase tracking-wider  font-medium">{img.textOneHalf} </span>
						<p  className="text-[21px] md:text-[31px] font-serif drop-shadow-lg  tracking-wider">{img.textTwo}</p>
					</div>

  {/* BLACK BG HOVER EFFECT */}
          <div className="absolute w-full h-full hover:bg-black/30  duration-1000 top-0 bottom-0 left-0 right-0 z-50"/>
          </div>      
        ))
        }
      </Carousel>

   
     
   </div>
  );
};

export default SliderHero;

