import Home from "./Component/Home";
import { Route, BrowserRouter } from "react-router-dom";
// import Header from "./Component/Header";
import MustToVisit from "./Component/MustToVisit";
import NavBar from "./Component/NavBar";
import FavPlace from "./Component/FavPlace";
import SignUp from "./Component/SignUp";
import LogIn from "./Component/LogIn"

function App() {

  
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/header" component={Header} /> */}
      <Route exact path="/mustovisit" component={MustToVisit} />
      <Route exact path="/fav-place" component={FavPlace} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/log-in" component={LogIn} />
    </div>
  );
}

export default App;
