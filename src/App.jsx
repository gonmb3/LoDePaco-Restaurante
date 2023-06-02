import React from "react";
import Navbar from "./components/Navbar";
import SliderHero from "./components/SliderHero";
import TopBar from "./components/TopBar";
import Nosotros from "./components/Nosotros";
import Menu from "./components/Menu";
import SalonBanner from "./components/SalonBanner";
import Salon from "./components/Salon";
import Mapa from "./components/Mapa";
import Seguinos from "./components/Seguinos";
import Reservas from "./components/Reservas";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <SliderHero />
      <Nosotros />
      <Menu />
      <SalonBanner />
      <Salon />
      <Mapa />
      <Seguinos />
      <Reservas />
      <Footer/>
    </div>
  );
};

export default App;
