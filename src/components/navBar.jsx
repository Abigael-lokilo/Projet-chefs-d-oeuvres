function NavBar() {
  return (
    <div>
      <header className=" border-2 border-red-500">
        <div className="container  mx-auto flex items-center justify-between py-7">
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
                  ACCUEIL
                </a>
              </li>
              <li>
                <a
                  href="/taches"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  TACHES
                </a>
              </li>
              <li>
                <a
                  href="/listedesinvités"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  LISTE DES INVITES
                </a>
              </li>
              <li>
                <a
                  href="/Salles"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  SALLES
                </a>
              </li>
              <li>
                <a
                  href="/calendrier"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  CALENDRIER
                </a>
              </li>

              <li>
                <a
                  href="/login"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  LOGIN
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  SIGN UP
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="nav-link px-2 py-1 rounded-md text-gray-800 hover:bg-gray-100"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
