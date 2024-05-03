import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const HeroSection = () => {
  return (
    <section className="text-white text-center py-0 font-bold">
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay={false}
        interval={3000}
        carouselClass="custom-carousel"
        itemClasse="custom-carousel-item"
      >
        <div
          className="bg-cover bg-center bg-opacity-90 bg-black h-screen flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/15157843/pexels-photo-15157843/free-photo-of-mains-bijoux-accessoires-alliance.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <h1 className="text-2xl md:text-4xl">
            Un mariage inoubliable, une ambiance de folie, des souvenirs plein
            la tête.
          </h1>
        </div>

        <div
          className="bg-cover bg-center bg-opacity-90  h-screen flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <h1 className="text-2xl md:text-4xl">
            Une promesse d'amour sacrée, une union bénie par le destin.
          </h1>
        </div>
        <div
          className="bg-cover bg-center bg-opacity-50 h-screen flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/11669423/pexels-photo-11669423.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <h1 className="text-2xl md:text-4xl bg-opacity-50">
            Un nouveau départ, une vie commune sous le signe de l'amour et du
            respect.
          </h1>
        </div>
      </Carousel>
    </section>
  );
};
export default HeroSection;
