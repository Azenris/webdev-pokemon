import { NavLink, useLocation } from "react-router-dom";

type MenuItem = {
  path: string;
  name: string;
  icon: string;
};

const menuItems: MenuItem[] = [
  {
    path: "/",
    name: "Home",
    icon: `${import.meta.env.BASE_URL}/imgs/pokeball-0.png`
  },
  {
    path: "/pokemon",
    name: "POKéMON",
    icon: `${import.meta.env.BASE_URL}/imgs/pokeball-0.png`
  },
  {
    path: "/collection",
    name: "Collection",
    icon: `${import.meta.env.BASE_URL}/imgs/pokeball-0.png`
  },
  {
    path: "/item",
    name: "Items",
    icon: `${import.meta.env.BASE_URL}/imgs/pokeball-0.png`
  },
  {
    path: "/tm",
    name: "HMs / TMs",
    icon: `${import.meta.env.BASE_URL}/imgs/pokeball-0.png`
  },
  {
    path: "/move",
    name: "Moves",
    icon: `${import.meta.env.BASE_URL}/imgs/pokeball-0.png`
  },
  {
    path: "/about",
    name: "About",
    icon: `${import.meta.env.BASE_URL}/imgs/pokeball-0.png`
  }
];

export function Navbar() {
  const location = useLocation().pathname;

  return (
    <div className="navbar">
      <ul>
        {menuItems.map((menu) => {
          return (
            <li key={menu.path} className={location == menu.path ? "active" : ""}>
              <NavLink to={menu.path}>
                <img src={menu.icon} alt={menu.name}></img>
                {' '}
                {menu.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}