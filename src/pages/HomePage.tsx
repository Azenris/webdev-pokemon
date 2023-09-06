import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <h1>Home</h1>
      </div>
      <Footer />
    </>
  );
}