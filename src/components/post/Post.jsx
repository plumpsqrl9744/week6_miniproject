import React from "react";
import Header from "../header/Header";
import {Link} from "react-router-dom"
import "./Post.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import FileUpload from "../fileupload/FileUpload" 

const Post = () => {
  return (
    <div className="post">
      <Header></Header>
        <div className="post-form">
          <div>
            <Link to="/"><AiOutlineArrowLeft className="arrow-left"></AiOutlineArrowLeft></Link>
            <div className="desc">
                Create Card !
            </div>
          </div>
          <hr></hr>
          <FileUpload></FileUpload>
        </div>
    </div>
  );
}
export default Post;