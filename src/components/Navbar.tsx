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
    icon: "/imgs/pokeball-0.png"
  },
  {
    path: "/pokemon",
    name: "POKéMON",
    icon: "/imgs/pokeball-0.png"
  },
  {
    path: "/collection",
    name: "Collection",
    icon: "/imgs/pokeball-0.png"
  },
  {
    path: "/about",
    name: "About",
    icon: "/imgs/pokeball-0.png"
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