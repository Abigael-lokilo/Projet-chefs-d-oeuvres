import imageHero from "/assets/pexels-jeremy-wong-1026390.jpg";

function HeroSection() {
  return (
    <div className="relative">
      <img alt="" className="" />

      <div
        className={`p-20 text-lg bg-[url('assets/pexels-burak-evlivan-159589296-11669423.jpg')]`}
      >
        <h1 className="text-5xl  text-white ">
          Bienvenu(e) chez Wedding Planning by lkl
        </h1>
        <p>
          Votre compagnon de mariage pour la plannification de mariage! Nous
          sommes ravie de vous accueillir dans notre communauté dédiée à faire
          de votre grand jour un moment inoubliable
        </p>

        <button
          id="commencer"
          class="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Commencer
        </button>
      </div>

      <h1 class="text-2xl font-bold text-center mb-4">
        A propos de wedding Planning
      </h1>

      <div class="flex flex-row items-center">
        <img
          src="assets/pexels-n-voitkevich-4943483.jpg"
          alt="Votre image"
          class="w-60 h-60"
        />
        <p>
          Wedding Planning est un organisateur d'événements spécialisé dans les
          mariages. Il agit comme un chef d'orchestre, supervisant tous les
          aspects de la préparation du mariage, des premiers rendez-vous
          jusqu'au jour J
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
