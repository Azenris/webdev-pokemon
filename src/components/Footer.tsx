import { NavLink, useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation().pathname;
  return (
    <div className="footer">
      <ul>
        <li className={location == "/disclaimer" ? "active" : ""}><NavLink to="/disclaimer">Disclaimer</NavLink></li>
        <li className={location == "/copyright" ? "active" : ""}><NavLink to="/copyright">Copyright</NavLink></li>
        <li className="source">
          <a href="https://github.com/Azenris/webdev-pokemon" target="_blank" rel="noopener noreferrer">
            Source Code (on github)
          </a>
        </li>
      </ul>
    </div>
  );
}