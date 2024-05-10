import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#19381f] m-2 text-white py-8">
      {" "}
      {/* Couleur d'arrière-plan et espacement vertical */}
      <div className="container mx-auto text-center">
        {" "}
        {/* Centrer le contenu */}
        <div className="flex justify-center gap-6">
          {" "}
          {/* Flex pour alignement et espacement */}
          <a href="#home" className="hover:text-gray-400">
            Accueil
          </a>
          <a href="#about" className="hover:text-gray-400">
            taches
          </a>
          <a href="#contact" className="hover:text-gray-400">
            invités
          </a>
          <a href="#contact" className="hover:text-gray-400">
            salles
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Calendrier
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <p className="mt-6">
          © 2024 wedding planning By Lkl. Nous sommes là pour vous.
        </p>{" "}
        {/* Texte au centre */}
      </div>
    </footer>
  );
};

export default Footer;
