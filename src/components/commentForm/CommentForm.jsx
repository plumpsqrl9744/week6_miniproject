import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { __addComment } from '../../modules/comment';
import axios from "axios"
import "./commentForm.scss"

function CommentForm() {
    const postId = useParams();
    const  dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        id : 0,
        writer : "",
        message : "",
        postId : 0,
    }) 
    
    const { writer ,message } = inputs;
    const onChangeHandler = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
        console.log([name], value)
    }

    const onCreateComment = async (event) => {
        event.preventDefault();
        // if (inputs.message === "" && inputs.message.length < 20) {
        if (true) {
            // alert ("내용을 5~10 글자 이내로 입력해주세요!")
            //   validationText.current.innerText = '성함과 5~10 글자 이상의 내용을 입력해주세요';
            try{
                let auth = localStorage.getItem("Authorization")
                let token = localStorage.getItem("Refresh-Token")
                const response = await axios.post(`/comment/${4}`,{   // 댓글 작성                    
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
        } else {
          const newComment = {
            postId: parseInt(postId.postId),
            writer: inputs.writer,
            message: inputs.message
          }
          console.log({newComment})
        
        
          //   dispatch(__addComment(newComment));
          
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
        <span className='comment_form'>
            <div className='comment_form_box'>
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
                추가
                </button>
            </div>
        </span>
    );
}

export default CommentForm;
