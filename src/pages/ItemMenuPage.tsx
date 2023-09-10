import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { ItemID, get_item } from "../data/items";
import { ItemCard } from "../components/ItemCard";

export type ItemMenuPageProps = {
  title: string;
  items: ItemID[];
};

export function ItemMenuPage({ title, items }: ItemMenuPageProps) {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="main-content">
        <h1>{title}</h1>
        <h2>{items.length}</h2>
        <div className="card-page-content">
          <div className="card-page-layout">
            {items.map((itemID) => {
              const item = get_item(itemID);
              if (!item) {
                return null;
              }

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