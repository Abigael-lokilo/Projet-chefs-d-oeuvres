function NavBar() {
  return (
    <>
      <header class="header">
        <div class="container  mx-auto flex items-center justify-between py-7">
          <a href="/" class="text-3xl font-bold text-gray-800">
            <img
              src="assets/Wedding Planning By Lkl (1).png"
              alt=""
              className=" h-20"
            />
          </a>

          <nav>
            <ul className=" flex items-center">
              <li>
                <a
                  href="/"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/taches"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  Tâches
                </a>
              </li>
              <li>
                <a
                  href="/listedesinvités"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  Liste des ninvités
                </a>
              </li>
              <li>
                <a
                  href="/Salles"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  Salles
                </a>
              </li>
              <li>
                <a
                  href="/calendrier"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  Calendrier
                </a>
              </li>

              <li>
                <a
                  href="/login"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  Sign Up
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
