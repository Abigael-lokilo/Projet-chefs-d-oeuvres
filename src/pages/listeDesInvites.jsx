import Ajouter from "./calendrier";

function ListeDesInvités() {
  return (
    <>
      <div class="container mx-auto py-4">
        <div class="relative w-full h-48">
          <img
            src="/assets/pexels-jeremy-wong-1026390.jpg"
            alt="Your Image"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/50 flex justify-center items-center text-white text-3xl font-bold">
            Liste des invités
          </div>

          <div class="flex flex-col">
            <div class="flex items-center mb-2">
              <input
                type="text"
                class="border rounded-md flex-grow"
                placeholder="Ajouter un invité"
              />
              <button class="bg-green-500 text-white font-bold py-2 px-4 rounded ml-2">
                Ajouter
              </button>
            </div>

            <ul class="flex flex-col border rounded-md p-2"></ul>
          </div>

          <div class="flex items-center mt-4">
            <p class="text-gray-600 mr-2">Groupe:</p>
            <select class="border rounded-md">
              <option value="all">Famille du marié</option>
              <option value="moi">Famille de la mariée</option>
              <option value="invités">Amis du marié</option>
              <option value="invités">Amis de la mariée</option>
              <option value="invités">Collègues du marié</option>
              <option value="invités">Collegues de la mariée</option>
              <option value="invités">Connaissance</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListeDesInvités;
