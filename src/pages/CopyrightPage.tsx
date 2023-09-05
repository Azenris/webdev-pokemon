import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function CopyrightPage() {
  return (
    <>
      <Navbar />
      <h1>Copyright</h1>
      <p className="about-description">This is a fan website of the original Gameboy Pokémon game.</p>
      <div className="copyright">
        Pokémon © 2002-2023 Pokémon. © 1995-2023 Nintendo/Creatures Inc./GAME FREAK inc. TM, ® and Pokémon character names are trademarks of Nintendo.
      </div>
      <Footer />
    </>
  );
}