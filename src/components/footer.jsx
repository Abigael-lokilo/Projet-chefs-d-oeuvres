function Footer() {
  return (
    <>
      <footer>
        <div class="footer">
          <img
            src="/assets/Wedding Planning By Lkl (1).png"
            alt="Your Logo"
            class="h-20 mr-4"
          />
          <nav class="space-x-4">
            <h2>liens rapides</h2>
            <a href="#" class=" flex text-black text-sm hover:text-gray-300">
              Accueil
            </a>
            <a href="#" class=" flex text-black text-sm hover:text-gray-300">
              Taches
            </a>
            <a href="#" class="flex text-black text-sm hover:text-gray-300">
              Listes des invités
            </a>
            <a href="#" class="flex text-black text-sm hover:text-gray-300">
              Salles
            </a>
            <a href="#" class="text-black text-sm hover:text-gray-300">
              Calendrier
            </a>
            <a href="#" class="flex text-black text-sm hover:text-gray-300">
              Login
            </a>
            <a href="#" class="flex text-black text-sm hover:text-gray-300">
              Sign Up
            </a>
            <a href="#" class="flex text-black text-sm hover:text-gray-300">
              Contact
            </a>
          </nav>
          <div>
            <a href="#" class=" flex text-black text-sm hover:text-gray-300">
              <div class="contact">
                <h2>Réseaux</h2>
                <a href="#">
                  <img src="src/assets/logo fac.png" alt="" />
                  Facebook
                </a>
                <a href="#">
                  <img src="src/assets/logo watsapp.jpeg" alt="" />
                  Watsapp
                </a>
                <a href="#">
                  <img src="src/assets/loso inst.jpeg" alt="" />
                  Instagram
                </a>
                <a href="#">
                  <img src="src/assets/logo lin.png" alt="" />
                  linkedin
                </a>
              </div>
            </a>
          </div>
          <div class="flex text-blacktext-sm">
            <p>&copy; 2024 Wedding Planning By Lkl</p>
            <a
              href="mailto:info@yourcompany.com"
              class="flex text-black hover:text-gray-300"
            ></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
