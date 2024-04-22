function Login() {
  return (
    <>
      <body>
        <div class="Login-box">
          <h1>Login</h1>
          <form>
            <label>Email</label>
            <input type="Email" placeholder="" />
            <label>Mot de passe</label>
            <input type="mot de passe" placeholder="" />
            <input type="button" value="Login" />
          </form>
        </div>
        <p class="para-2">
          Vous avez déjà un comptye ? <a href="#">Inscrivez-vous ici</a>
        </p>
      </body>
    </>
  );
}

export default Login;
