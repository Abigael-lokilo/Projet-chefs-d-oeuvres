function Nav() {
  return (
    <>
      <header class="header">
        <div class="container mx-auto flex items-center justify-between py-7">
          <a href="/" class="text-3xl font-bold text-gray-800">
            <img
              src="src/components/Wedding Planning By Lkl (1).png"
              alt=""
              className="w-10 h-20"
            />
          </a>

          <nav>
            <ul class=" flex items-center">
              <li>
                <a
                  href="/"
                  class="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/taches"
                  class="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  Tâches
                </a>
              </li>
              <li>
                <a
                  href="/listedesinvités"
                  class="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  Liste des ninvités
                </a>
              </li>
              <li>
                <a
                  href="/Salles"
                  class="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  Salles
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  class="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  class="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav;
