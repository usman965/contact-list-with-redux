import Navbar from "./Navbar"
import ContactItem from "./ContactItem";
import { useDispatch, useSelector } from "react-redux";
import TakeContact from "./TakeContact";
const Home=()=> {
  const contactList=useSelector((state)=>state.ContactReducer);
  const dispatch=useDispatch();
  return ( <>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      contactList.map((data,index)=>{
        return(  <ContactItem data={data}/> )
      })
    }
  </tbody>
</table>
  </> );
}

export default Home;
