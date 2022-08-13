import React, { useState } from "react";
import Header from "../header/Header";
import {Link} from "react-router-dom"
import "./Post.scss";
import Form from 'react-bootstrap/Form';
import { AiOutlineArrowLeft } from "react-icons/ai";

function Post() {
  const [modal, setModal] = useState(false);
  return (
    <div className="post">
      <Header></Header>
        <Form className="post-form">
        
            <Link to="/"><AiOutlineArrowLeft className="arrow-left"></AiOutlineArrowLeft></Link>
            <div className="desc">
                Create Card !
            </div>
            <hr></hr>
            
            {/* <Button type="submit">Submit</Button> */}
    
        </Form>
    </div>
  );
}
export default Post;