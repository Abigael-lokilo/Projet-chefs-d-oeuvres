import Ajouter from "./calendrier";

function ListeDesInvités() {
  return (
    <>
      <div class="flex flex-col my-4">
        <div class="relative w-full h-48">
          <img
            src="/assets/pexels-kanishkamg-12093905.jpg"
            alt="Your Image"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/50 flex justify-center items-center text-white text-3xl font-bold">
            Liste des invités
          </div>

          <form id="addGuestForm">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="nom" class="block text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  class="w-full border px-2 py-2 rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label for="postnom" class="block text-gray-700">
                  Post-nom
                </label>
                <input
                  type="text"
                  id="postnom"
                  class="w-full border px-2 py-2 rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label for="groupe" class="block text-gray-700">
                  Groupe
                </label>
                <input
                  type="text"
                  id="groupe"
                  class="w-full border px-2 py-2 rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label for="adresse" class="block text-gray-700">
                  Adresse
                </label>
                <input
                  type="text"
                  id="adresse"
                  class="w-full border px-2 py-2 rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label for="email" class="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="w-full border px-2 py-2 rounded-md focus:outline-none"
                />
              </div>
              <div>
                <label for="telephone" class="block text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  class="w-full border px-2 py-2 rounded-md focus:outline-none"
                />
              </div>
              <div class="col-span-2">
                <label for="note" class="block text-gray-700">
                  Note
                </label>
                <textarea
                  id="note"
                  class="w-full border px-2 py-2 rounded-md focus:outline-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              class="bg-green-500 text-white font-bold py-2 px-4 rounded-md mt-4"
            >
              Ajouter un invité
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ListeDesInvités;
