import Axios from "axios";
import {Link} from "react-router-dom";

function StudentListRow(props)
{
    const {_id,name,email,rollNo} = props.obj; //Object destruction
   
    const handleClick = () =>{
        Axios.delete("https://crud-deployment-1-19f6.onrender.com/studentRoute/delete-student/" + _id )
        .then((res)=>{
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
   
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td>
                <div className="d-flex justify-content-center">
                    <Link class="text-decoration-none text-light mx-2" to={"/edit-student/" + _id}>
                        <button class="btn btn-success">Edit</button>
                    </Link>
                    <button onClick={handleClick} class="btn btn-danger">
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}
export default StudentListRow;