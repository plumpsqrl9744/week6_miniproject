import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { __deleteComment, __getComments, __updateComment } from '../../modules/comment';
import axios from 'axios';
import "./commentBox.scss"

function CommentBox({ comment }) {
    const dispatch = useDispatch();
    const buttonUpdate = useRef();
    const updateFormWrap = useRef();

    const onDeleteComment = async (e) => {
        e.preventDefault();
        try{
          let auth = localStorage.getItem("Authorization")
          let token = localStorage.getItem("Refresh-Token")
          const response = await axios.delete(`/comment/${4}`,{   // 댓글 삭제                    
              content:"라라"
          },  
          {headers:{
              "Authorization": auth,
              "Refresh-Token": token
          }},
          {withCredentials:true})
          console.log("감자",response.data)
        } catch(error){
          console.log(error)
        }    
        // dispatch(__deleteComment(comment.id));
        // console.log("comment id:",comment.id)
        // dispatch(__getComments());
        // 위 코드 나중에 수정하기 (bad code)
    }

    const [inputs, setInputs] = useState({
        writer: '',
        message: ''
      });
    
      const { writer, message } = inputs;

      const onChangeUpdate = (event) => {
        const { value, name } = event.target;
        setInputs({
          ...inputs,
          [name] : value
        });
      }

    const onEditComment = (e) => {
        e.preventDefault();

        const updateComment = {
          id: comment.id,
          writer: inputs.writer,
          message: inputs.message,
          postId: comment.postId
        }
        dispatch(__updateComment(updateComment));
        setInputs({
          writer: '',
          message: ''
        });
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
                <div className='comment_writer'>구장우</div>
                <div className='comment_text'>{ comment.message }</div>
                <div>
                    <button
                        className='editButton'
                        ref={buttonUpdate} 
                        onClick={onTogglUpdateComment} 
                        isopen={+false}
                    >edit</button>
                    <button
                        className='deleteButton'
                        onClick = {onDeleteComment}
                    >delete</button>
                    
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
                    value={message} 
                    onChange={onChangeUpdate} 
                    placeholder= "수정할 댓글을 입력해주세요!"/>
                    <button className='completeButton'>complete</button>
                </form>
        </div>
        
  )
};
    

export default CommentBox;
