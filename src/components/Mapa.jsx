import React from 'react'

const Mapa = () => {
  return (
    <div className='relative w-full h-[320px]  md:h-[380px] lg:h-[420px]  text-center  flex  items-center justify-center   bg-[url("/src/assets/img/mapa.png")] bg-center bg-cover  '> 
         {/* BLACK BG HOVER EFFECT */}
          <div className="absolute w-full h-full bg-black/20 top-0 bottom-0 left-0 right-0 z-2"/>  
    </div>
  )
}

export default Mapa