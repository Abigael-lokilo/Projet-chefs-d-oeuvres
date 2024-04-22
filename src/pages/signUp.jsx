function SignUp() {
  return (
    <>
      <body>
        <div class="signup-box ">
          <h1>Sign Up</h1>
          <form>
            <label>Prenom</label>
            <input type="text" placeholder="" />
            <label>Nom de famille</label>
            <input type="text" placeholder="" />
            <label>Email</label>
            <input type="email" placeholder="" />
            <label>Mot de passe</label>
            <input type="mot de passe" placeholder="" />
            <label>Confirme le mot de passe</label>
            <input type=" le mot de passe" placeholder="" />
            <input type="submit" value="Sign Up" />
          </form>
          <p>
            En cliquant sur le bouton d'inscription, vous acceptez notre
            <br />
            <a href="#">Termes et conditions</a>
            <a href="">Politique confidentialité</a>
          </p>
        </div>
        <p class="para-2">
          Vous avez déjà un compte? <a href="#">Connectez-vous ici</a>
        </p>
      </body>
    </>
  );
}

export default SignUp;
