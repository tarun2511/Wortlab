import navIcon from "../../images/navIcon.png"
import de from "../../images/de.png"
import {Link} from "react-router-dom";

export default function Navbar(){
    return(<div className="nav-container">
    
    <Link to="/" style={{textDecoration: "none", color: "white"}}>
    <div className="nav-left">
    <img src={navIcon} height={60} alt="nav-img"/>
    <p style={{marginTop: "20px", fontSize: "20px", textDecoration: "none"}}>Sprache.de</p>
    </div>
    </Link>
    
    <div className="nav-right">
    <img src={de} height={40} style={{marginTop: "15px", marginRight: "10px"}} alt="nav-img"/>
    </div>
    </div>)
}