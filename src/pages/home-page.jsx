import HeroSection from "../components/heroSection";
import Nav from "../components/navBar";
import Accueil from "../components/Accueil";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <div>
        <Nav />
        <HeroSection />

        <Footer />
      </div>
    </>
  );
}

export default Home;
