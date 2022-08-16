import "./Header.scss";
import logo from "../../logo/logo.png"
import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom"

const RightBar = () =>{
  const [name , setName] = useState("");
  const [navigates,setNavigates] = useState(false)
  const [menuBar,setMenuBar] = useState(false);
  const navigate = useNavigate();
  // useEffect(()=>{ // 메인 접속시 화면 불러오기
  //   (async () => {
  //     try{
  //       const {data} = await axios.get("");
  //       setName(data.name);
  //     } catch (e){
  //       navigate("/")
  //     }
  //     })()
  // },[])
  const logOut = async () => { // 로그아웃
    await axios.post("logout", {}, {withCredentials:true})
    setNavigates(true)
  }
  if(navigates===true){
    console.log("Log Out !")
    return navigate("/login")
  }
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
            <a href="#" onClick={logOut}>LogOut</a>
            {/* <a href={`/login`}>LogOut</a> */}
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
        <div className="title">Your Pet</div>
        <RightBar></RightBar>
      </div>
  );
}
  
export default Header;
