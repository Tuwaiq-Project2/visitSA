import React, {useState} from "react";
import Home from "./Component/Home";
import { Route, Switch } from "react-router-dom";
// import Header from "./Component/Header";
import MustToVisit from "./Component/MustToVisit";
import NavBar from "./Component/NavBar";
import FavPlace from "./Component/FavPlace";
import SignUp from "./Component/SignUp";
import LogIn from "./Component/LogIn";
import Card from "./Component/Card";



function App() {
  const [userId, setUserId] = useState("")
  // if(!userId){
  //   setUserId(JSON.parse(localStorage.getItem("Current id")))
  // }
  
  return (
    <div>
      <NavBar userId={userId}/>
      {/* {userId} */}
      <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/header" component={Header} /> */}
      <Route exact path="/mustovisit" render={()=>{return <MustToVisit userId={userId}/>}} />
      <Route exact path="/fav-place" render={()=>{return <FavPlace userId={userId}/>}} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/log-in" render={()=>{return <LogIn setUserId={setUserId}/>}} />
      <Route exact path="/card/:id" component={Card}  />
      <Route path="*" render={()=>{return <h1>404 </h1>}}/>
      </Switch>
    </div>
  );
}

export default App;
