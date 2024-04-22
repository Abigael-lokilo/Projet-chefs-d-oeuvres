import { i } from "vite/dist/node/types.d-aGj9QkWt";

function Taches() {
  return (
    <>
      <div class="app-container" id="app">
        <div class="app-header">
          <h1 class="title">Taches</h1>
          <button class="btn-add" id="btnNouveau">
            <i class="bi bi-plus-cercle-fill"></i>
            Nouvelle Tache
          </button>

          <form class="task-creation-component" id="formulaire de tache"></form>
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
          <input type="time" class="form-control" name="todoHeureEcheance" />
        </div>

        <div class="row row-actions">
          <button
            type="button"
            class="btn btn-create"
            id="btnAjouterTodo"
          ></button>
        </div>
      </div>
    </>
  );
}

export default Taches;
