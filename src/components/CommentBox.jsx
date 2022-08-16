import React from 'react';
import { useDispatch } from 'react-redux';
import { __deleteComment, __getComments, __updateComment } from '../modules/comment';
import styled from 'styled-components';

function CommentBox({ comment }) {
    const dispatch = useDispatch();

    const onDeleteComment = (e) => {
        e.preventDefault();
        dispatch(__deleteComment(comment.id));
    }
    return (
        <div>
        <StCommentBox>
        <CommentWriter>구장우</CommentWriter>
        <CommentText>{ comment.message }</CommentText>
        <div>
        <button>edit</button>
        <button
        onClick = {onDeleteComment}
        >delete</button>
        </div>
        </StCommentBox>
        <StCommentBox>
        <CommentWriter>구장우</CommentWriter>
        <CommentText>qwjehqkjwehwqkjehqkejqhekqwjehwqkejhqekqjhekqj</CommentText>
        <div >
        <button>edit</button>
        <button>delete</button>
        </div>
        </StCommentBox>
        </div>
        
    );
}

export default CommentBox;

const StCommentBox = styled.div`
    display : flex;
    justify-content : space-between;
    flex-direction : row;
    align-item : center;
    flex-wrap : wrap;

    background color :#D8D8D8;

    font-size : 15px;

    margin : 10px auto;
    padding : 7px;

    

    
    

    height : 40px;

    border-radius : 5px;
    .buttomBox {
        font-size : 15px;
        font-weight : none; 
    
    }
    .editButtom {
        margin-right : 10px;
        border : 0px;
        magin : 5px 5px auto; 
    }
    .deleteButtom {
        border : 0px;
        magin : 5px 5px auto;  
    }
`

const CommentWriter = styled.div`
    font-weight : bold;

    width : 180px;
    text-align : center;

    margin-left : -50px;
    
`

const CommentText = styled.div`
    width : 250px;
`
