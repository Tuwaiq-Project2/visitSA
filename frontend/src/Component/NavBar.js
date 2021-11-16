import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "./logo.png";

export default function NavBar() {
  return (
    <div>
      <div>
        <nav className="navigation">
          <ul className="list-ul">
            <div className="logoNav">
              <Link to="/">
                <img src={logo}/>
              </Link>
            </div>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/mustovisit">
              <li>MustToVisit</li>
            </Link>
            <Link to="/fav-place">
              <li>FavPlaces</li>
            </Link>
            
              <Link to="/sign-up">
                <li>Sign up</li>
              </Link>
              <Link to="/log-in">
                <li>Log in</li>
              </Link>
            
          </ul>
        </nav>
      </div>
    </div>
  );
}
