import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { get_item } from "../data/items";
import { ItemdexEntry } from "../components/itemdex/ItemdexEntry";

export function ItemPage() {

  const navigate = useNavigate();
  const params = useParams();
  const itemID = Number(params.id);

  if (isNaN(itemID)) {
    navigate("/");
    return null;
  }

  const item = get_item(itemID);

  if (!item) {
    navigate("/");
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="main-content">
        <ItemdexEntry item={item} />
      </div>
      <Footer />
    </>
  );
}