import "./Header.scss";
// import logo from "../../logo/logo.png"
import { useState } from "react";
import Post from "../post/Post";

const RightBar = () =>{
  const [menuBar,setMenuBar] = useState(false);
  const onClickEvent=()=>{
    setMenuBar(!menuBar);
  }

  return(
    <div className={"header-right"+ (menuBar ? " active" : "")}>
      <div className={"header-menu"+ (menuBar ? " menu-act" : " none-act")}>
        <ul>
          <li className="items" onClick={onClickEvent}>
            <a href={`/post`}>Create Card</a>
          </li>
          <li className="items" onClick={onClickEvent}>
            <a href={`/login`}>LogOut</a>
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
          <a href={`/`}><img className="logo" src = "https://raw.githubusercontent.com/plumpsqrl9744/week6_miniproject/seo/src/logo/logo.png"></img></a>
        </div>
        <div className="title">Your Pet</div>
        <RightBar></RightBar>
      </div>
  );
}
  
export default Header;