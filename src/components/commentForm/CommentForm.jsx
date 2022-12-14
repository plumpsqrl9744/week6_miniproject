import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import "./commentForm.scss"
import { useNavigate } from "react-router-dom";
function CommentForm({comment}) {
    const navigate = useNavigate();
    const postId = useParams();
    const [inputs, setInputs] = useState("") 
    const onChangeHandler = (e) => {
        setInputs(e.target.value);
    }

    const onCreateComment = async (event) => {
        event.preventDefault();
        if (comment !== null){
            var commentId = comment.id
        }
        // if (inputs.message === "" && inputs.message.length < 20) {
            // alert ("내용을 5~10 글자 이내로 입력해주세요!")
            try{
                let auth = localStorage.getItem("Authorization")
                let token = localStorage.getItem("Refresh-Token")
                await axios.post(`/comment/${commentId}`,{   // 댓글 작성                    
                    content:inputs
                },  
                {headers:{
                    "Authorization": auth,
                    "Refresh-Token": token
                }},
                {withCredentials:true})                
                window.location.href = `/detailpage/${commentId}`
                setInputs("")
            } catch(error){
                console.log(error)
            }
        }    
    return (
        <span className='comment_form'>
            <div className='comment_form_box'>
            <input className='commentBox'
                type='text' 
                name='message' 
                value={inputs} 
                onChange={onChangeHandler} 
                placeholder= "댓글을 입력해 주세요!"
                />
            <button 
                onClick = {onCreateComment}
                type="submit" 
                style={{color : "black"}}
                >
                추가
                </button>
            </div>
        </span>
    );
}

export default CommentForm;
