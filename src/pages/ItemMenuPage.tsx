import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { usePokemonContext } from "../context/PokemonContext";
import { useNavigate } from "react-router-dom";
import { itemDB } from "../data/items";
import { ItemCard } from "../components/ItemCard";

export function ItemMenuPage() {
  const { itemsTotal } = usePokemonContext();
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="main-content">
        <h1>Items</h1>
        <h2>{itemsTotal}</h2>
        <div className="card-page-content">
          <div className="card-page-layout">
            {itemDB.map((item) => {
              function viewItem() {
                navigate(`/item/${item.id}`);
              }
              return (
                <ItemCard
                  key={item.id}
                  itemID={item.id}
                  clicked={viewItem}
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