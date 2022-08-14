import React, { useState } from "react";
import Header from "../header/Header";
import {Link} from "react-router-dom"
import "./Post.scss";
import Form from 'react-bootstrap/Form';
import { AiOutlineArrowLeft } from "react-icons/ai";
import FileUpload from "../fileupload/FileUpload" 
import Button from "react-bootstrap/esm/Button";

const Post = () => {
  const [posts, setPosts] = useState([
    {
      titles : "나",
      contents:"다"
    }
  ]);
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const onChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value)
  }
  const onChanges = (e) => {
    e.preventDefault();
    setContent(e.target.value)
  }
  const handlePost = (e) => {
    e.preventDefault();
    setPosts([{...posts,
      titles:title,
      contents:content
    }])
    console.log(posts)
  }
  const UploadContainer = () => {
    return(
      <div className="upload-container">
        <Form.Group className="input-box">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title" value={title} onChange={onChange}/>
        </Form.Group>
        <Form.Group className="input-box">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder ="Content" value={content} onChange={onChanges}/>
        </Form.Group>
      </div>
    )
  }
  return (
    <div className="post">
      <Header></Header>
        <Form className="post-form">
          <div>
            <Link to="/"><AiOutlineArrowLeft className="arrow-left"></AiOutlineArrowLeft></Link>
            <div className="desc">
                Create Card !
            </div>
          </div>
          <hr></hr>
          <FileUpload></FileUpload>
          <UploadContainer></UploadContainer>
          <Button onClick={handlePost} type="submit">Submit</Button>
        </Form>
    </div>
  );
}
export default Post;