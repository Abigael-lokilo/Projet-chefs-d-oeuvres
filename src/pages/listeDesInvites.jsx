function ListeDesInvités() {
  return (
    <>
      <div>
        <h1>Liste des invités</h1>
        <form>
          <input type="recherche" name="q" placeholder="recherche" />

          <input type="button" value="Ajouter un invité" />
        </form>
      </div>
    </>
  );
}

export default ListeDesInvités;
