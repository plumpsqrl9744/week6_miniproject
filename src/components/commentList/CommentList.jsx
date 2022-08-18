import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentBox from '../commentBox/CommentBox';
import CommentForm from '../commentForm/CommentForm';
// import { __getComments } from '../../modules/comment';
import axios from 'axios';
import "./commentList.scss"

function CommentList({comment}) {
    const postId = useParams();
    // const [comments,setComments] = useState(comment)
    // console.log("ㅇㅈ?",comment.commentList)
    // const comments = comment.id

    // const dispatch = useDispatch();
    // const commentList = useSelector((state) => state.commentReducer)
    // useEffect(() => {
    //     dispatch(__getComments());
    //   }, [dispatch]);
    const getComments = async () => {
        try{
          let auth = localStorage.getItem("Authorization")
          let token = localStorage.getItem("Refresh-Token")
          const response = await axios.get(`/comment/5`,{      // 댓글들 조회
            headers:{
              "Authorization": auth,
              "Refresh-Token": token
            },
          }
          ,{withCredentials:true})
          console.log(response)    
        } catch(error){
            console.log(error)
        }
      }
    useEffect(() => {
        // getComments()
        
    },[]);
    return (
        <div className='comment_list'> 
            <CommentForm comment={comment}></CommentForm>
            {comment === null || "" || undefined ? "" : comment.commentList.map((comments)=>{
                return(
                    <CommentBox key={comments.id} comment={comments} id = {comment.id}></CommentBox>
                )
            })}
        </div>
    );
}
{/* <div key={comments.id}>{comments.content}</div> */}
export default CommentList;
