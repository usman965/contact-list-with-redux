import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {addContact, updateContact} from "../actions/index"

const UpdateContact=(props)=>{
  const history=useHistory();
  const {id}=useParams();
  const dispatch=useDispatch();
  const contactList=useSelector((state)=>state.ContactReducer);
  const i=contactList.filter((data)=>id===data.id)
  const [contact,contactSet]=useState(i[0]);
  const changeVal=(event)=>{
    const {name,value}=event.target;
      contactSet((prev)=>{
        return({...contact,[name]:value})
      });    
  }
  const updateContactFun=(e)=>{

    dispatch(updateContact(contact));
    history.goBack();
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
  <button type="submit" className="btn btn-primary mt-3" onClick={(e)=>updateContactFun(e)}>Update Contact</button>
  </div>
</div>
    </>)
}
export default UpdateContact;