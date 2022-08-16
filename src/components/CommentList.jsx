import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentForm from './CommentForm';
import { useSelector, useDispatch } from 'react-redux';
import { __getComments } from '../modules/comment';

function CommentList() {
    const dispatch = useDispatch();
    const commentList = useSelector((state) => state.commentReducer)
    console.log ( "commentList",commentList)
    const postId = useParams();

    useEffect(() => {
        dispatch(__getComments());
      }, [dispatch]);

    return (
        <StCommentList>
            <CommentForm/>
            {commentList.map((comment) => (
                // Number(postId.postId) === comment.postId &&
                <CommentBox
                key = {comment.id}
                comment = {comment}
                />
            ))}
            
        </StCommentList>
    );
}

export default CommentList;

const StCommentList = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : row;
    align-item : center;
    flex-wrap : wrap;

    background-color : white;
    font-size : 15px;

    border-radius : 3px;
`