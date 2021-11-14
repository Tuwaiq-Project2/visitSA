import React from 'react'
import { Link } from "react-router-dom";
import "./navBar.css"

export default function NavBar() {


    return (
        <div>
   <div className="mainCont">


     <span><Link to="/">Home</Link>    </span>
     <span><Link to="/header">Header</Link>  </span>
     <span><Link to="/navbar">NavBar</Link>  </span>
     <span><Link to="/mustToVisit">MustToVisit</Link>  </span>

       </div>
        </div>
    )
}
