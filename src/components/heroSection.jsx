import imageHero from "/assets/pexels-ayoub-photographe-17770297.jpg";

function HeroSection() {
  return (
    <div className="relative">
      {/* <img src={imageHero} alt="" className="" /> */}

      <div className="p-4 text-lg bg-[url('/assets/pexels-ayoub-photographe-17770297.jpg')]">
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

      <div class="flex items-start">
        <h1 class="text-3xl font-bold text-center mb-4 flex items-start">
          QUEL EST LE ROLE D'UN WEDDING PLANNING?
        </h1>
        <p class="text-left">
          Le wedding planner est un professionnel dans l’organisation de
          mariage. De plus en plus de couples, désireux de se défaire du stress
          des préparatifs du mariage décident de confier le plus beau jour de
          leur vie à cette personne. Mais qu’en est-il de son rôle dans votre
          mariage ? Réponse avec les organisateurs de mariage au Grand Hôtel des
          Sablettes Plage.
        </p>
      </div>

      <div class="flex flex-row  items-start">
        <h1 class="text-3xl font-bold text-center mb-4 flex flex-row  items-start">
          QUEL EST LE ROLE D'UN WEDDING PLANNING?
        </h1>
        <p class="text-left">
          Le wedding planner est un professionnel dans l’organisation de
          mariage. De plus en plus de couples, désireux de se défaire du stress
          des préparatifs du mariage décident de confier le plus beau jour de
          leur vie à cette personne. Mais qu’en est-il de son rôle dans votre
          mariage ? Réponse avec les organisateurs de mariage au Grand Hôtel des
          Sablettes Plage.
        </p>
        <img
          src="/assets/mariage20-1024x682.jpeg"
          alt="Photo"
          class="w-80 h-30 mr-4"
        />
      </div>

      <div class="flex flex-row  items-start">
        <h1 class="text-3xl font-bold text-center mb-4 flex flex-row  items-start">
          ECOUTER SES CLIENTS ET AIDER A CHOISIR LE LIEU DE RECEPTION
        </h1>
        <p class="text-left">
          Vous avez déjà une idée précise du lieu idéal pour votre mariage ? Le
          wedding planner est celui qui se chargera de trouver avec vous le lieu
          idéal ! Mariage champêtre, à la plage, dans un jardin, dans une salle
          de réception avec vue sur mer, dans un château, ou même dans un lieu
          insolite, le wedding planner est celui qui vous écoute sans jamais
          vous juger. Sa mission est de répondre à vos souhaits et de rendre
          votre union exceptionnelle. Grâce à son expérience et à sa
          connaissance du milieu, un wedding planner est parfaitement capable de
          vous trouver un lieu unique pour votre réception. Il fait jouer de ses
          relations, et peut même négocier le prix pour vous permettre de
          profiter des plus beaux endroits. Au Grand Hôtel des Sablettes Plage,
          vous pourrez même profiter d’une offre packagée qui comprendra la
          location de la salle de réception, les traiteurs et la cuisine, la
          décoration, les photographes et vidéastes, le DJ et l’animation, etc.
        </p>
      </div>

      <div class="flex flex-row  items-start">
        <h1 class="text-3xl font-bold text-center mb-4 flex flex-row  items-start">
          TOUT GERER DE A A Z
        </h1>
        <p class="text-left">
          Quand on fait appel à un wedding planner lors de son mariage, on se
          débarrasse de toute la pression que représente l’organisation. Il va
          gérer votre jour J aux moindres détails, conformément à vous attentes,
          comme si vous-même étiez aux commandes. Il va gérer les imprévus afin
          de vous laisser profiter librement de votre journée. Le fleuriste n’a
          pas confirmé sa présence à l’heure convenue ? C’est au wedding planner
          de trouver une solution. Le costume du marié n’est pas prêt à temps,
          il fait en sorte de bousculer le tailleur. Le photographe s’est
          désisté au dernier moment, le wedding planner utilise rapidement son
          carnet d’adresses. Bref, il va jouer les « fées du logis » pour vous.
        </p>
        <img
          src="/assets/mariage21-1024x683.jpeg"
          alt="Photo"
          class="w-80 h-30 mr-4"
        />
      </div>
      <div class="flex justify-center">
        <button class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Votre compagnon de mariage pour la plannification de mariage
        </button>
      </div>
      <h1 class="text-3xl font-bold text-center mb-4 flex flex-row  items-start">
        A DECOUVRIR
      </h1>
      <div className="Decouvrir">
        <div className="container-one">
          <div className="room-image">
            <img
              src="src/assets/pexels-vidal-balielo-jr-14457436.jpg"
              alt="Nom de la salle 1"
            />
          </div>
          <div className="room-info">
            <h2>QU'EST-CE QU'UN WEDDING PLANNING?</h2>
            <p>
              Vous venez de dire oui à votre moitié ? Vous avez déjà fixé une
              date pour le mariage ? Vous souhaitez (...)
            </p>
            <div class="room-details"></div>

            <button className="btn btn-primary">Découvrir</button>
          </div>
        </div>
      </div>

      <div className="Decouvrir">
        <div className="container-two">
          <div className="room-image">
            <img
              src="src/assets/pexels-vidal-balielo-jr-14457436.jpg"
              alt="Nom de la salle 1"
            />
          </div>
          <div className="room-info">
            <h2>LES DIFFÉRENTS TYPES DE PRESTATIONS D’UN WEDDING PLANNER</h2>
            <p>
              Le wedding planner est certainement le meilleur allié des futurs
              mariés pour organiser un mariage parfait et sans stress. (...)
            </p>
            <div class="room-details"></div>

            <button className="btn btn-primary">Découvrir</button>
          </div>
        </div>
      </div>
      <div className="Decouvrir">
        <div className="container-two">
          <div className="room-image">
            <img
              src="src/assets/pexels-vidal-balielo-jr-14457436.jpg"
              alt="Nom de la salle 1"
            />
          </div>
          <div className="room-info">
            <h2>LES MEILLEURS FORUMS ET SITES POUR PRÉPARER SON MARIAGE</h2>
            <p>
              Un mariage est un vrai évènement à planifier, un moment à
              organiser dans les moindres détails, avec toute une (...)
            </p>
            <div class="room-details"></div>

            <button className="btn btn-primary">Découvrir</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
