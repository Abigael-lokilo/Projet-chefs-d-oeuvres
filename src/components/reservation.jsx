import { useState } from "react";

function Reservation() {
  const [nom, setNom] = useState("");
  const [option, setOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Nom:", nom);
    console.log("Option de réservation:", option);
  };

  return (
    <div>
      <div className="container flex  ">
        <div className="items-center text-center">
          <h1 className="text-4xl font-bold items-center"> Reservation</h1>
          <p className="text-xl text-semibold">
            Nous esperons vous voir à notre mariage! Veuillez répondre à
            quelques questions pour confirmer votre présence.
          </p>
        </div>
        <div className="flex justify-start items-center px-5">
          <input
            className="flex rounded-lg items-start"
            type="text"
            placeholder="your name..."
          />
        </div>
        <div className="flex items-center border border-black ">
          <select
            id="option"
            className="rounded"
            value={option}
            onChange={(e) => setOption(e.target.value)}
            required
          >
            <option value="standard">Standard</option>
            <option value="vip">VIP</option>
            <option value="familial">Familial</option>
          </select>
        </div>
        <div className="flex items-center mb-5 gap-5">
          <p className="flex items-start justify-between">
            vous pouvez m'envoyer un ping, m'appeler ou m'apporter plus
            d'informations à
          </p>
          <input
            className="px-5 "
            type="text"
            placeholder="myemail@exemple.com..."
          />
          <input className="px-5" type="text" placeholder="(+243)826650020" />
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className=" text-white px-6 py-3 rounded-lg  hover:outline-none focus:bg-green-800 transition-colors duration-200 bg-[#19381f]"
        >
          Soumettre
        </button>
      </div>
    </div>
  );
}

export default Reservation;
