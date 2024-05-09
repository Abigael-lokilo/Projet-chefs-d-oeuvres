import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto py-20">
      {" "}
      {/* Augmenter le padding pour laisser de la place à la navBar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        <div className="flex justify-center items-center">
          <div className="rounded-full overflow-hidden bg-white text-center w-48 h-48">
            {" "}
            {/* Définir une taille spécifique pour les images rondes */}
            <img
              className="object-cover w-full h-full"
              src="assets/pexels-burak-evlivan-159589296-11669423.jpg"
              alt="Image de mariage"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center text-center px-5">
          {" "}
          {/* Ajouter du padding intérieur pour l'espace */}
          <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
            Bienvenue chez
          </h1>
          <h1 className="text-5xl font-semibold">Wedding Planning</h1>
        </div>

        <div className="flex justify-center items-center">
          <div className="rounded-full overflow-hidden bg-white text-center w-48 h-48">
            {" "}
            {/* Taille cohérente avec le premier */}
            <img
              className="object-cover w-full h-full"
              src="assets/pexels-burak-evlivan-159589296-11669423.jpg"
              alt="Image de mariage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
