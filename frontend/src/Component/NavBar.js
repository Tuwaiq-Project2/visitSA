import React from "react";
import { Link } from "react-router-dom";
// import "./navBar.css"

export default function NavBar() {
  return (
    <div>
      <div>
        <ul>
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
      </div>
    </div>
  );
}
