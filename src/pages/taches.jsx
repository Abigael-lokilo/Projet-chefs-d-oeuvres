function Taches() {
  return (
    <>
      <section class="green py-0 px-0">
        <div class="relative w-full h-48">
          <img
            src="/assets/pexels-jeremy-wong-1026390.jpg"
            alt="Your Image"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/50 flex justify-center items-center text-white text-4xl font-bold">
            Taches
          </div>
          <div class="app-container" id="app">
            <div class="app-header">
              <button class="btn-add" id="btnNouveau">
                <i class="bi bi-plus-cercle-fill"></i>
                Nouvelle Tache
              </button>

              <form
                class="task-creation-component"
                id="formulaire de tache"
              ></form>
              <input type="text" name="titre" placeholder="Nom de tache" />
            </div>

            <div class="app-content" id="liste de chose à faire"></div>
            <div class="app-content" id="liste de taches à terminer"></div>
          </div>

          <div class="row">
            <div class="row-icon">
              <i class=" bi bi-calendar 3"></i>
            </div>
            <input type="date" class="form-control" name="todoDateEcheance" />

            <div classe="col">
              <span class="input-group-text">A</span>
              <input
                type="time"
                class="form-control"
                name="todoHeureEcheance"
              />
            </div>

            <div class="mt-4">
              <button
                id="ajouter"
                class="bg-[#19381f] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Ajouter
              </button>
              <button
                id="supprimer"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Taches;
