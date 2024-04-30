function Login() {
  return (
    <>
      <body>
        <div class="flex min-h-screen justify-center items-center bg-gray-100">
          <div class="w-full max-w-md p-8 bg-white rounded shadow-lg">
            <h1 class="text-2xl font-bold text-center mb-4">Connexion</h1>

            <form action="/login" method="post">
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium mb-2">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2 px-3 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div class="mb-4">
                <label for="password" class="block text-sm font-medium mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2 px-3 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    class="w-4 h-4 text-blue-600 focus:ring-blue-500 rounded"
                  />
                  <label
                    for="remember"
                    class="ml-2 text-sm font-medium text-gray-700"
                  >
                    Se souvenir de moi
                  </label>
                </div>
                <a href="#" class="text-xs text-green-600 hover:text-green-700">
                  Mot de passe oublié ?
                </a>
              </div>
              <button
                type="submit"
                class="w-full bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}

export default Login;
