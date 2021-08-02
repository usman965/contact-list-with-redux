import Avatar from "react-avatar";
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { deleteContact } from "../actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const ContactItem=(props)=>{
  const dispatch=useDispatch();
    return(<>
        <tr>
        <td><Avatar round={true} name={props.data.name} size="40" /><span className="m-3">{props.data.name}</span></td>
        <td>{props.data.phone}</td>
        <td>{props.data.email}</td>
        <td><DeleteIcon onClick={()=>{
          dispatch(deleteContact(props.data.id));
        }}/>
        <Link to={`/updatecontact/${props.data.id}`}><UpdateIcon /></Link></td>
      </tr>
     </>);
}
export default ContactItem;