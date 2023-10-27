import {Link} from "react-router-dom";
function Nav(){
    return(
        <nav class="navbar bg-warning px-3">
            <Link to="/" style={{fontFamily:"Nosifer"}} class="navbar-brand">CRUD Operation</Link>
            <div className="bg-info">
                <Link to="/create-student" style={{fontFamily:"Kanit"}} class="nav-link">Create Student</Link>
                <Link to="/student-list" style={{fontFamily:"Kanit"}} class="nav-link">Student List</Link>
            </div>
        </nav>
    )
}

export default Nav;