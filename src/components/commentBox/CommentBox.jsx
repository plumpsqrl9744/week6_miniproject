import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { __deleteComment, __getComments, __updateComment } from '../../modules/comment';

import "./commentBox.scss"

function CommentBox({ comment }) {
    const dispatch = useDispatch();
    const buttonUpdate = useRef();
    const updateFormWrap = useRef();

    const onDeleteComment = (e) => {
        e.preventDefault();
        dispatch(__deleteComment(comment.id));
        console.log("comment id:",comment.id)
        dispatch(__getComments());
        // 위 코드 나중에 수정하기 (bad code)
    }

    const [inputs, setInputs] = useState({
        writer: '',
        message: ''
      });
    

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
                        ref={buttonUpdate} 
                        onClick={onTogglUpdateComment} 
                        isopen={+false}
                    >edit</button>
                    <button
                    onClick = {onDeleteComment}
                    >delete</button>
                </div>
                <form 
                    className='updateBox hideBox' 
                    action='' 
                    onSubmit={onEditComment}
                    ref={updateFormWrap}
                    togglerevise={+false}
                    >
                    <label>Writer</label>
                    <input type='text' name='writer' value={writer} onChange={onChangeUpdate} />
                    <label>Comment</label>
                    <input type='text' name='message' value={message} onChange={onChangeUpdate} />
                    <button>Complete</button>
                </form>
            </div>
        </div>
        
    )
    };
    

export default CommentBox;
