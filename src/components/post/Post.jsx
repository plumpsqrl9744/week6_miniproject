import React, {useEffect, useState} from "react";
import Header from "../header/Header";
import {Link} from "react-router-dom"
import "./Post.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import FileUpload from "../fileupload/FileUpload";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("Authorization") !== null){
      console.log("로그인 세션 유지 중")
    }else{
      alert("Please Login !")
      return navigate("/login")
    }
  },[])
  return (
    <div className="post">
      <Header></Header>
        <div className="post-form">
          <div>
            <Link to="/"><AiOutlineArrowLeft className="arrow-left"></AiOutlineArrowLeft></Link>
            {location.state===null ? <div className="desc">
                                        Create Card !
                                      </div>:
                                      <div className="desc">
                                        Update Card !
                                      </div>}
          </div>
          <hr></hr>
          <FileUpload status = {location.state}></FileUpload>
        </div>
    </div>
  );
}
export default Post;