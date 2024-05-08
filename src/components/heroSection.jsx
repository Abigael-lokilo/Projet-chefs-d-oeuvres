import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = () => {
  return (
    <section className="text-white text-center py-0 font-bold relative">
      <h1 className="text-2xl md:text-4xl bg-black bg-opacity-50 py-4 absolute top-0 left-0 right-0 z-10">
        Votre en-tête ici
      </h1>
      <div style={{ marginTop: "70px" }}>
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
        >
          <div
            className="bg-cover bg-center bg-opacity-90 bg-black bg-center h-screen flex items-center justify-center relative z-0"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/4943483/pexels-photo-4943483.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <h1 className="text-10xl md:text-4xl">
              Bienvenu(e) chez wedding planning by lkl
            </h1>
          </div>

          <div
            className="bg-cover bg-center bg-opacity-90 bg-center bg-opacity-75 h-screen flex items-center justify-center relative z-0"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/11988914/pexels-photo-11988914.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <h1 className="text-2xl md:text-4xl">
              Une promesse d'amour sacrée, une union bénie par le destin.
            </h1>
          </div>
          <div
            className="bg-cover bg-center bg-opacity-50 h-screen flex items-center justify-center relative z-0"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/2892215/pexels-photo-2892215.jpeg?auto=compress&cs=tinysrgb&w=800')",
            }}
          >
            <h1 className="text-2xl md:text-4xl bg-opacity-50">
              Un nouveau départ, une vie commune sous le signe de l'amour et du
              respect.
            </h1>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
