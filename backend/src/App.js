import { Route,BrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header";
import MustToVisit from "./Component/MustToVisit";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <div>
      app
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/header" component={Header} />
      <Route exact path="/mustovisit" component={MustToVisit} />

    
     
    </div>

  );
}

export default App; 