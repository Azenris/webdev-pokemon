import { NavLink, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation().pathname;
  return (
    <div className="navbar">
      <ul>
        <li className={location == "/" ? "active" : ""}><NavLink to="/">Home</NavLink></li>
        <li className={location == "/pokemon" ? "active" : ""}><NavLink to="/pokemon">POKéMON</NavLink></li>
        <li className={location == "/collection" ? "active" : ""}><NavLink to="/collection">Collection</NavLink></li>
        <li className={location == "/about" ? "active" : ""}><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  );
}