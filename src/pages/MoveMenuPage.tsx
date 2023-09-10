import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { moveDB } from "../data/moves";
import { MoveCard } from "../components/MoveCard";

export function MoveMenuPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="main-content">
        <h1>Moves</h1>
        <h2>{moveDB.length}</h2>
        <div className="card-page-content">
          <div className="card-page-layout">
            {moveDB.map((move) => {

              function viewMove() {
                navigate(`/move/${move.id}`);
              }

              return (
                <MoveCard
                  key={move.id}
                  moveID={move.id}
                  clicked={viewMove}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}