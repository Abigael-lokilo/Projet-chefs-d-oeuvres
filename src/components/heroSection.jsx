import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto">
      {" "}
      {/* Augmentation du padding pour un meilleur espacement */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        {/* Image ronde à gauche */}
        <div className="flex justify-center items-center">
          <div className="rounded-full overflow-hidden bg-white text-center w-48 h-48">
            <img
              className="object-cover w-full h-full"
              src="assets/pexels-burak-evlivan-159589296-11669423.jpg"
              alt="Image de mariage"
            />
          </div>
        </div>

        {/* Texte de Bienvenue au centre */}
        <div className="flex flex-col justify-center text-center px-5">
          {" "}
          {/* Ajout de padding interne */}
          <h1 className="text-6xl font-bold py-20">Bienvenue chez</h1>{" "}
          {/* Texte en gras et grande taille */}
          <h1 className="text-6xl font-semibold">Wedding Planning</h1>{" "}
          {/* Alignement du texte */}
        </div>

        {/* Image ronde à droite */}
        <div className="flex justify-center items-center">
          <div className="rounded-full overflow-hidden bg-white text-center w-48 h-48">
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
