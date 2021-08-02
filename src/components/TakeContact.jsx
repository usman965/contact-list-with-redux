import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import shortid from "shortid"
import {addContact} from "../actions/index"

const TakeContact=()=>{
  const history=useHistory();
  const dispatch=useDispatch();
  const [contact,contactSet]=useState({id:shortid.generate(),name:"",phone:"",email:""});
  const changeVal=(event)=>{
    const {name,value}=event.target;
      contactSet((prev)=>{
        return({...contact,[name]:value})
      });    
  }
  const addContactFun=(e)=>{

    dispatch(addContact(contact));
    history.push("/");
  }

    return(<>
    <div className="card mt-5" >
    <div class="card-header ">
    Add Contact
  </div>
  <div className="card-body">
  <div className="mt-3">
    <input type="name" name="name" placeholder="Enter Your Name" className="form-control" value={contact.name} onChange={changeVal}/>
  </div>
  <div className="mt-3">
    <input type="phone" name="phone" placeholder="Enter Your Phone Number" className="form-control" value={contact.phone} onChange={changeVal}/>
  </div>
  <div className="mt-3">
    <input type="email" name="email" placeholder="Enter Your Email Address" className="form-control" value={contact.email} onChange={changeVal}/>
  </div>
  <button type="submit" className="btn btn-primary mt-3" onClick={(e)=>addContactFun(e)}>Create Contact</button>
  </div>
</div>
    </>)
}
export default TakeContact;