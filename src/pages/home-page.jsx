import HeroSection from "../components/heroSection";

import Baner from "../components/baner";
import Reservation from "../components/reservation";

function Home() {
  return (
    <>
      <div>
        <HeroSection />

        <Baner />
        <Reservation />
      </div>
    </>
  );
}

export default Home;
