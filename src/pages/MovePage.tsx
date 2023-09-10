import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { get_move } from "../data/moves";
import { MovedexEntry } from "../components/movedex/movedexEntry";

export function MovePage() {

  const navigate = useNavigate();
  const params = useParams();
  const moveID = Number(params.id);

  if (isNaN(moveID)) {
    navigate("/");
    return null;
  }

  const move = get_move(moveID);

  if (!move) {
    navigate("/");
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="main-content">
        <MovedexEntry move={move} />
      </div>
      <Footer />
    </>
  );
}