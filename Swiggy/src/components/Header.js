import { LOGO_URL } from "../utils/Constants";
import {useState} from "react";
import { Link } from "react-router-dom";

const Header = () =>{

    const [btnName, setBtnName] = useState("Login")

    return(
    <div className="header">
        <div className="logo">
            <img src={LOGO_URL} />
        </div>
        <div className="nav-items">
        <ul>
            <li> <Link className="link" to="/"> Home </Link></li>
            <li><Link className="link" to="/about"> About Us </Link></li>
            <li><Link className="link" to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <li>Login</li>
            <button className="head-btn" onClick={()=>{
                if(btnName==="Login"){
                    setBtnName("Logout");
                }else{
                    setBtnName("Login");
                }
            }}>
                {btnName}
            </button>
        </ul>
        </div>
    </div>
    )
}

export default Header;