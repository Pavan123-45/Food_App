import { useState } from "react"
import style from "./header.module.css"
import { Link } from "react-router-dom";
const Header=()=>{
  let [text,setText] = useState("LogIn");

let  logInButton = ()=>{
   text === "LogIn" ? setText ("LogOut") :setText("LogIn")
}
    return (
        <div className={style.header}>
          <div className ={style.logo_container}>
          <img className ={style.logo} src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="NO LOGO FOUND" />
          </div>
          <div className={style.nav}>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About Us</Link></li>
                <li><Link to={"/contact"}>Contact Us</Link></li>
                <li>Cart</li>
                <li><button className={style.btn} onClick={logInButton}>{text}</button></li>
            </ul>
          </div>

        </div>
    )
    
}
export default Header