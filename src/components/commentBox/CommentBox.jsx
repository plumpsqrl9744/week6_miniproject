import React from 'react';
import { useDispatch } from 'react-redux';
import { __deleteComment, __getComments, __updateComment } from '../../modules/comment';

import "./commentBox.scss"

function CommentBox({ comment }) {
    const dispatch = useDispatch();

    const onDeleteComment = (e) => {
        e.preventDefault();
        dispatch(__deleteComment(comment.id));
        console.log("comment id:",comment.id)
        dispatch(__getComments());
        // 위 코드 나중에 수정하기 (bad code)
    }

    const onEditComment = (e) => {

    }
    


    return (
        <div>
        <div className='comment_box'>
        <div className='comment_writer'>구장우</div>
        <div className='comment_text'>{ comment.message }</div>
        <div>
        <button>edit</button>
        <button
        onClick = {onDeleteComment}
        >delete</button>
        </div>
        </div>
        </div>
        
    );
}

export default CommentBox;
