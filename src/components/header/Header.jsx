import "./Header.scss";
import logo from "../../logo/logo.png"
import { useState } from "react";

const RightBar = () =>{
  const [menuBar,setMenuBar] = useState(false);
  const onClickEvent=()=>{
    setMenuBar(!menuBar);
  }
  return(
    <div className={"header-right"+ (menuBar ? " active" : "")}>
      <div className={"header-menu"+ (menuBar ? " menu-act" : " none-act")}>
        <ul>
          <li onClick={onClickEvent}>
            <a to={`/`}>Create Card</a>
          </li>
          <li onClick={onClickEvent}>
            <a to={`/login`} className="logout">LogOut</a>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={onClickEvent}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>  
      </div>
    </div>
  )
}

const Header = () =>{
    return (
      <div className="header">
        <div className="header-left">
          <a href={`/`}><img className="logo" src={logo}></img></a>
        </div>
        <RightBar></RightBar>
      </div>
  );
}
  
export default Header;