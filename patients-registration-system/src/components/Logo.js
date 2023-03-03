
import image from "../image/image.png"
import "./style.css"

function Logo(){
    return(
        <div>
<img className="logo" src={image} alt="healthcare logo"/>
        </div>
    )
}
export default Logo;