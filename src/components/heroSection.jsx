import imageHero from "../assets/pexels-ayoub-photographe-17770297.jpg";

function HeroSection() {
  return (
    <div className="relative">
      <img src={imageHero} alt="" className="" />

      <div className="absolute   top-0">
        <h1 className="text-7xl  text-white ">
          Bienvenu(e) chez Wedding Planning by lkl
        </h1>
        <p>
          Votre compagnon de mariage pour la plannification de mariage! Nous
          sommes ravie de vous accueillir dans notre communauté dédiée à faire
          de votre grand jour un moment inoubliable
        </p>
        <button className=" border p-3 text-white rounded-full">
          Commencer
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
