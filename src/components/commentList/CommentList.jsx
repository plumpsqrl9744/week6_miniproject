import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentBox from '../commentBox/CommentBox';
import CommentForm from '../commentForm/CommentForm';
import { useSelector, useDispatch } from 'react-redux';
import { __getComments } from '../../modules/comment';
import "./commentList.scss"



function CommentList() {
    const dispatch = useDispatch();
    const commentList = useSelector((state) => state.commentReducer)
    console.log ( "commentList",commentList)
    const postId = useParams();

    useEffect(() => {
        dispatch(__getComments());
      }, [dispatch]);

    return (
        <div className='comment_list'>
            <CommentForm/>
            {commentList.map((comment) => (
                //// Number(postId.postId) === comment.postId &&
                <CommentBox
                key = {comment.id}
                comment = {comment}
                />
            ))}
            
        </div>
    );
}

export default CommentList;
