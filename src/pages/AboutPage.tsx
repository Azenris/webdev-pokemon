import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { NavLink } from "react-router-dom";

export function AboutPage() {
  return (
    <>
      <Navbar />
      <h1>About</h1>
      <div className="main-content">
        <div className="about">
          <p className="about-description">
            This is a fan website of the original Gameboy Pokémon games.
            <br />
            See <NavLink to="/disclaimer">disclaimer</NavLink> at the bottom of the page for the disclaimer information.
            <br />
            See <NavLink to="/copyright">copyright</NavLink> at the bottom of the page for copyright information.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}