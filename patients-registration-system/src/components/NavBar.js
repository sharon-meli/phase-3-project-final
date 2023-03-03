import {NavLink} from "react-router-dom";
import "./style.css"
function NavBar(){
    return(
        <div className="nav">
           <NavLink to="/">Home</NavLink>
           <NavLink to="/doctors">Doctors</NavLink>
           <NavLink to="/appointments">Appointments</NavLink>
        </div>
    )
}
export default NavBar;