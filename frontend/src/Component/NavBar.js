import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "./logo.png";
import { useParams,useHistory } from "react-router";


export default function NavBar() {

  const history = useHistory()
  const {id} = useParams();
  const [currentId, setCurrentId] = useState("")
  const [currentEmail, setCurrentEmail] = useState("")
  const [toggleNav, setToggleNav] = useState(true)

  const showCurrentHideSignUp=()=>{
    const getId = JSON.parse(localStorage.getItem("Current id"))
    const getEmail = JSON.parse(localStorage.getItem("Current email"))

    if(getId){
      setCurrentId(getId)
      setCurrentEmail(getEmail)
      setToggleNav(false)
    }

  }


  

  return (
    <div>
      <div>
        {/* {showCurrentHideSignUp()} */}
        <nav className="navigation">
          <ul className="list-ul">
            <div className="logoNav">
            <button onClick={()=>{
            history.goBack()
        }}> go back</button>
              <Link to="/">
                <img src={logo}/>
              </Link>
            </div>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/mustovisit">
              <li>Must to visit</li>
            </Link>
            <Link to="/fav-place">
              <li>Favorite places</li>
            </Link>
            
            
              {
              toggleNav?
                <span className="signup-login-div">
                  <Link to="/sign-up">
                    <li>Sign up</li>
                  </Link>
                  <Link to="/log-in">
                    <li>Log in</li>
                  </Link>
                </span>
               : 
               <li>{currentEmail}</li>
              }
              
            
          </ul>
        </nav>
      </div>
    </div>
  );
}
