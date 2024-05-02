import { NavLink } from "react-router-dom";
function Salles() {
  return (
    <>
      <section class="green py-0 px-0">
        <h1 class="text-2xl font-bold text-center mb-4">salles</h1>
        <div className="Salles">
          <div className="container-one">
            <div className="room-image">
              <img
                src="/assets/pexels-vidal-balielo-jr-14457436.jpg"
                alt="Nom de la salle 1"
              />
            </div>
            <div className="room-info">
              <h2>ABC Salles</h2>
              <p>
                pour vos événements privés (mariages, anniversaires, baptêmes et
                événements particuliers) et un pour vos événements pro
                (séminaires, conférences, réunions, meetings, afterworks, ...)
              </p>
              <div class="room-details"></div>
              <NavLink to="/voir">
                {" "}
                <button className="btn btn-primary">Voir plus</button>
              </NavLink>
            </div>
          </div>

          <div className="container-two">
            <div className="room-image">
              <img
                src="/assets/pexels-pixabay-265920.jpg"
                alt="Nom de la salle 1"
              />
            </div>
            <div className="room-info">
              <h2>Tendance</h2>
              <p>
                pour vos événements privés (mariages, anniversaires, baptêmes et
                événements particuliers) et un pour vos événements pro
                (séminaires, conférences, réunions, meetings, afterworks, ...)
              </p>
              <div class="room-details">
                <div className="room-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <NavLink to="/voir">
                {" "}
                <button className="btn btn-primary">Voir plus</button>
              </NavLink>
            </div>
          </div>

          <div className="container-two">
            <div className="room-image">
              <img
                src="/assets/pexels-amar-preciado-14716279.jpg"
                alt="Nom de la salle 1"
              />
            </div>
            <div className="room-info">
              <h2>Mon Tapis Rond</h2>
              <p>
                pour vos événements privés (mariages, anniversaires, baptêmes et
                événements particuliers) et un pour vos événements pro
                (séminaires, conférences, réunions, meetings, afterworks, ...)
              </p>
              <div class="room-details"></div>
              <NavLink to="/voir">
                {" "}
                <button className="btn btn-primary">Voir plus</button>
              </NavLink>
            </div>
          </div>

          <div className="container-two">
            <div className="room-image">
              <img
                src="/assets/pexels-pixabay-265940.jpg"
                alt="Nom de la salle 1"
              />
            </div>
            <div className="room-info">
              <h2>Mariage.net</h2>
              <p>
                pour vos événements privés (mariages, anniversaires, baptêmes et
                événements particuliers) et un pour vos événements pro
                (séminaires, conférences, réunions, meetings, afterworks, ...)
              </p>
              <div class="room-details"></div>
              <NavLink to="/voir">
                {" "}
                <button className="btn btn-primary">Voir plus</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Salles;
