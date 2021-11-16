import React, {useState} from "react";
import Home from "./Component/Home";
import { Route, BrowserRouter } from "react-router-dom";
// import Header from "./Component/Header";
import MustToVisit from "./Component/MustToVisit";
import NavBar from "./Component/NavBar";
import FavPlace from "./Component/FavPlace";
import SignUp from "./Component/SignUp";
import LogIn from "./Component/LogIn";



function App() {
  const [userId, setUserId] = useState("")
  
  return (
    <div>
      <NavBar />
      {/* {userId} */}
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/header" component={Header} /> */}
      <Route exact path="/mustovisit" render={()=>{return <MustToVisit userId={userId}/>}} />
      <Route exact path="/fav-place" component={FavPlace} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/log-in" render={()=>{return <LogIn setUserId={setUserId}/>}} />
    </div>
  );
}

export default App;
