import React, {useState} from 'react';
import { customAlphabet } from "nanoid";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { __addComment } from '../modules/comment';

import styled from 'styled-components';


function CommentForm() {
    const nanoid = customAlphabet("01234567899abcedf", 6);
    const postId = useParams();
    const id = nanoid();
    const  dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        id : 0,
        writer : "",
        message : "",
        posId : 0,
    }) 
    
    const { message } = inputs;
    const onChangeHandler = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
        console.log([name], value)
    }

    const onCreateComment = (event) => {
        event.preventDefault();
        if (inputs.message === "" && inputs.message.length < 20) {
            alert ("내용을 5~10 글자 이내로 입력해주세요!")
            //   validationText.current.innerText = '성함과 5~10 글자 이상의 내용을 입력해주세요';
         } else {
          const newComment = {
            id: id,
            postId: parseInt(postId.postId),
            writer: inputs.writer,
            message: inputs.message
          }
          console.log({newComment})
          dispatch(__addComment(newComment));
          
          setInputs({
            id : 0,
            writer : "",
            message: "",
            postId : ""
          })
        //   validationText.current.innerText = '';
         }
        
      }

    return (
        <StCommentForm>
            <StCommentFormBox>
            <input className='commentBox'
                type='text' 
                name='message' 
                value={message} 
                onChange={onChangeHandler} 
                placeholder= "댓글을 입력해 주세요!"
                />


            <button 
                onClick = {onCreateComment}
                type="submit" 
                style={{color : "#A4A4A4"}}
                >
                add
                </button>
            </StCommentFormBox>
        </StCommentForm>
    );
}

export default CommentForm;

const StCommentForm = styled.span`
    height: 50px;

    margin-bottom : 30px;

    .commentBox {
        width : 450px;

        border : 0px;
    }
`

const StCommentFormBox = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-around;

`