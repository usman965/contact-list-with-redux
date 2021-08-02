import { Link } from "react-router-dom";

const Navbar=()=>{
    return(<>
    <nav className="navbar navbar-light ">
  <div className="container">
    <a className="navbar-brand text-white">Contact Book</a>
      <Link to="/addcontact" className="btn bg-white d-flex" >Create Contact</Link>
  </div>
</nav>
  </>);
}
export default Navbar;