import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import "./commentBox.scss"
import { useNavigate } from "react-router-dom";

const CommentBox = ({ comment,id }) => {
    const navigate = useNavigate();
    const buttonUpdate = useRef();
    const updateFormWrap = useRef();
    const [inputs, setInputs] = useState("");
    if(comment!==null){
      var commentId = comment.id
    }
    const onChangeUpdate = (e) => {
      setInputs(e.target.value)
    }
    const onDeleteComment = async (e) => { // 댓글 삭제
        e.preventDefault();
        try{
          let auth = localStorage.getItem("Authorization")
          let token = localStorage.getItem("Refresh-Token")
          const response = await axios.delete(`/comment/${commentId}`,
            {headers:{
                "Authorization": auth,
                "Refresh-Token": token
            }},
          {withCredentials:true})
          window.location.href = `/detailpage/${id}`
        } catch(error){
          console.log(error)
        } 
    }
    const onEditComment = async (e) => {
        e.preventDefault();
        try{
          let auth = localStorage.getItem("Authorization")
          let token = localStorage.getItem("Refresh-Token")
          const response = await axios.put(`/comment/${commentId}`,{   // 댓글 수정                    
              content:inputs
          },  
          {headers:{
              "Authorization": auth,
              "Refresh-Token": token
          }},
          {withCredentials:true})
          window.location.href = `/detailpage/${id}`          
        } catch(error){
          console.log(error)
        } 
        
        updateFormWrap.current.togglerevise = false;
        updateFormWrap.current.classList.add('hideBox');
        updateFormWrap.current.classList.remove('showBox');
      }
    
      // ::: 댓글 수정하기 폼 보이기
      const onTogglUpdateComment = (event) => {
        event.target.isopen = !event.target.isopen;
    
        if(event.target.isopen === true) {
          updateFormWrap.current.togglerevise = true;
          updateFormWrap.current.classList.remove('hideBox');
          updateFormWrap.current.classList.add('showBox');
    
        } else {
          updateFormWrap.current.togglerevise = false;
          updateFormWrap.current.classList.add('hideBox');
          updateFormWrap.current.classList.remove('showBox');
        }
      }
    return (
        <div>
            <div className='comment_box'>
                <div className='comment_writer'>{comment.author}</div>
                <div className='comment_text'>{comment.content}</div>
                <div>
                    <button
                        className='editButton'
                        ref={buttonUpdate} 
                        onClick={onTogglUpdateComment} 
                        isopen={+false}
                    >Edit</button>
                    <button
                        className='deleteButton'
                        onClick = {onDeleteComment}
                    >Delete</button>
                    
                </div>
            </div>
            <form 
              className='updateBox hideBox' 
              action='' 
              onSubmit={onEditComment}
              ref={updateFormWrap}
              togglerevise={+false}
              >
              <label></label>
              <input 
              className='update_comment_box'
              type='text' 
              name='message' 
              value={inputs} 
              onChange={onChangeUpdate} 
              placeholder= "수정할 댓글을 입력해주세요!"/>
              <button className='completeButton'>complete</button>
          </form>
        </div>
        
  )
};
    

export default CommentBox;
