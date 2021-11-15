import Home from "./Component/Home";
import { Route, BrowserRouter } from "react-router-dom";
// import Header from "./Component/Header";
import MustToVisit from "./Component/MustToVisit";
import NavBar from "./Component/NavBar";
import FavPlace from "./Component/FavPlace";

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/home" component={Home} />
      {/* <Route exact path="/header" component={Header} /> */}
      <Route exact path="/mustovisit" component={MustToVisit} />
      <Route exact path="/fav-place" component={FavPlace} />
    </div>
  );
}

export default App;
