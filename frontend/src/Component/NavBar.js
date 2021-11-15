import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css"
import logo from "./logo.png"

export default function NavBar() {
  return (
    <div>
      <div>
        <nav className="navigation">
          <ul className="list-ul">
          <div className="logoNav"><Link to="/home"> <img src={logo} alt="" /> </Link></div>
            <li>
              <Link to="/home">Home</Link>{" "}
            </li>

            <li>
              <Link to="/header">Header</Link>{" "}
            </li>
            {/* <li>
              <Link to="/navbar">NavBar</Link>{" "}
            </li> */}
            <li>
              <Link to="/mustovisit">MustToVisit</Link>{" "}
            </li>
            <li>
              <Link to="/fav-place">FavPlaces</Link>{" "}
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
}
