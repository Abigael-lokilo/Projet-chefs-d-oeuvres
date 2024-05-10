function Baner() {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="banner container">
        <div className="container mx-auto bg-white">
          {" "}
          {/* Augmentation du padding pour un meilleur espacement */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
            {/* Image ronde à gauche */}
            <div className="flex justify-center items-center">
              <div className="rounded-full overflow-hidden bg-white text-center border border-[#19381f]">
                <img
                  className="object-cover w-full h-full"
                  src="assets/71870c0974a18727b6205bb5aa7fe76f.jpeg"
                  alt="Image de mariage"
                />
              </div>
            </div>

            {/* Texte de Bienvenue au centre */}
            <div className="flex flex-col justify-center text-center px-5">
              {" "}
              {/* Ajout de padding interne */}
              <h1 className="text-6xl font-bold text-black py-20">
                Bienvenue chez
              </h1>{" "}
              {/* Texte en gras et grande taille */}
              <h1 className="text-5xl font-semibold text-black">
                Wedding Planning
              </h1>{" "}
              {/* Alignement du texte */}
            </div>

            {/* Image ronde à droite */}
            <div className="flex justify-center items-center">
              <div className="rounded-full overflow-hidden bg-white text-center  border border-[#19381f] ">
                <img
                  className="object-cover w-full h-full"
                  src="assets/pexels-kseniachernaya-3980607.jpg"
                  alt="Image de mariage"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#19381f]">
          <div className="container-onebg-white-500flex flex-col justify-center gap-6 py-10 ">
            <h1 className="font-semibold sm:text-2xl text-white py-10">
              L'amour ne connait pas la distance...
            </h1>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-10 ">
            <div className="rounded-full overflow-hidden border  border-white p-5 text-center transition-transform duration-300 hover:rotate-6">
              <h1 className="text-2xl text-white">1</h1>
              <p className="text-white">
                Ce{" "}
                <span>
                  passage exprime un amour profond et inconditionnel, même face
                  à la perte et à la séparation. Le narrateur, Meursault,
                  retrouve le bonheur en repensant à ses moments partagés avec
                  Marie, même s'il sait qu'il ne la reverra jamais. Il vit dans
                  le souvenir d'un amour perdu, mais qui reste toujours vivant
                  et présent dans son cœur.
                </span>
              </p>
            </div>
            <div className="rounded-full overflow-hidden bg-white text-center transition-transform duration-300 hover:rotate-6">
              <img
                className="object-cover w-full h-full"
                src="assets/pexels-burak-evlivan-159589296-11669423.jpg"
                alt=""
              />
            </div>
            <div className="rounded-full overflow-hidden border border-white  p-5 text-center transition-transform duration-300 hover:rotate-6">
              <h1 className="text-2xl font-bold text-white">2</h1>
              <p>
                Ce{" "}
                <span>
                  passage exprime un amour profond et inconditionnel, même face
                  à la perte et à la séparation. Le narrateur, Meursault,
                  retrouve le bonheur en repensant à ses moments partagés avec
                  Marie, même s'il sait qu'il ne la reverra jamais. Il vit dans
                  le souvenir d'un amour perdu, mais qui reste toujours vivant
                  et présent dans son cœur.
                </span>
              </p>
            </div>
            <div className="rounded-full overflow-hidden bg-white text-center transition-transform duration-300 hover:rotate-6">
              <img
                className="object-cover w-full h-full"
                src="assets/pexels-h-i-nguy-n-1627264-5924657.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Baner;
