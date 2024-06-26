import { Link, NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <header className=" border-2 border-black-500fixed  left-0  z-10 bg-white ">
        <div className="container  mx-auto flex items-center justify-between py-4 gap-4">
          <Link
            href="/"
            class=" text-3xl font-bold text-gray-800absolute top-0 right-0s"
          >
            <img
              src="assets/Wedding Planning By Lkl (1).png"
              alt=""
              className=" w-14"
            />
          </Link>

          <div className=" bg-white-500 h-16 md:h-20 lg:h-24 flex justify-between items-center gap-4">
            <NavLink
              to="/home"
              className="font-bold text-xl inline-block duration-200 px-2 py-2 rounded-md text-gray-800 hover:bg-gray-100"
            >
              Accueil
            </NavLink>

            <NavLink
              to="/taches"
              className="font-bold text-xl inline-block duration-200 px-2 py-2 rounded-md text-gray-800 hover:bg-gray-100"
            >
              Taches
            </NavLink>

            <NavLink
              to="/invites"
              className="font-bold text-xl inline-block duration-200 px-2 py-2 rounded-md text-gray-800 hover:bg-gray-100"
            >
              Invités
            </NavLink>

            <NavLink
              to="/salles"
              className="font-bold text-xl inline-block duration-200 px-2 py-2 rounded-md text-gray-800 hover:bg-gray-100"
            >
              Salles
            </NavLink>

            <NavLink
              to="/calendrier"
              className="font-bold text-xl inline-block duration-200 px-2 py-2 rounded-md text-gray-800 hover:bg-gray-100"
            >
              Calendrier
            </NavLink>

            <NavLink
              to="/login"
              className="font-bold text-xl inline-block duration-200 px-2 py-2 rounded-md text-gray-800 hover:bg-gray-100"
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className="font-bold text-xl inline-block duration-200 px-2 py-2 rounded-md text-gray-800 hover:bg-gray-100"
            >
              Sign Up
            </NavLink>

            <NavLink
              to="/contact"
              className="font-bold text-xl inline-block duration-200 px-2 py-2 rounded-md text-gray-800 hover:bg-gray-100"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
