import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <h1>Disclaimer</h1>
        <div>
          <p className="about-description">
            Information may be incorrect or out of date. No guarantee is given.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}