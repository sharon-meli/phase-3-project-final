
import Logo from "./Logo";
import "./style.css"
function Header(){
    return(
        <div className="header-wrapper">
            <Logo />
        <div className="header">
            <h1> CINEN MEDICAL HEALTHCARE</h1>       
            <h1>Patients' registration system</h1>
        </div>
        </div>
    )
}
export default Header;