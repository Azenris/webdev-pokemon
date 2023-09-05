import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function AboutPage() {
  return (
    <>
      <Navbar />
      <h1>About</h1>
      <div className="about">
        <p className="about-description">This is a fan website of the original Gameboy Pokémon games.</p>
        <p className="copyright">Pokémon © 2002-2023 Pokémon. © 1995-2023 Nintendo/Creatures Inc./GAME FREAK inc. TM, ® and Pokémon character names are trademarks of Nintendo.</p>
      </div>
      <Footer />
    </>
  );
}