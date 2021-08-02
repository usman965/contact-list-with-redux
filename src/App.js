//import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./style.scss"
import Navbar from "./components/Navbar"
import ContactItem from "./components/ContactItem";
import { useDispatch, useSelector } from "react-redux";
import TakeContact from "./components/TakeContact";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import UpdateContact from "./components/UpdateContact";
function App() {
  return ( <>
  <div className="container-fluid bg-primary">
  <Navbar/>
  </div>
  <div className="container">
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/addcontact" component={TakeContact}/>
    <Route exact path="/updatecontact/:id" component={UpdateContact}/>
  </Switch>
  </div>
    </> );
}

export default App;
