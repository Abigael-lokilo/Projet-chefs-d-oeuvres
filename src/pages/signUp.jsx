function SignUp() {
  return (
    <>
      <body>
        <div class="flex min-h-screen justify-center items-center bg-gray-100">
          <div class="w-full max-w-md p-8 bg-white rounded shadow-lg">
            <h1 class="text-2xl font-bold text-center mb-4">Inscription</h1>

            <form action="/signup" method="post">
              <div class="mb-4">
                <label for="name" class="block text-sm font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2 px-3 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
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
              <div class="mb-4">
                <label
                  for="confirm-password"
                  class="block text-sm font-medium mb-2"
                >
                  Confirmer mot de passe
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  class="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2 px-3 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                class="w-full bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}

export default SignUp;
