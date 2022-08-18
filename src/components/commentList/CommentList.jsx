import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentBox from '../commentBox/CommentBox';
import CommentForm from '../commentForm/CommentForm';
import { __getComments } from '../../modules/comment';
import "./commentList.scss"

function CommentList() {
    const postId = useParams();

    // const dispatch = useDispatch();
    // const commentList = useSelector((state) => state.commentReducer)
    // useEffect(() => {
    //     dispatch(__getComments());
    //   }, [dispatch]);
    useEffect(() => {
        
    },[]);
    return (
        <div className='comment_list'> 
            <div>댓글들</div>
            {/* <CommentForm/> */}
            {/* {commentList.map((comment) => (
                //// Number(postId.postId) === comment.postId &&
                <CommentBox
                key = {comment.id}
                comment = {comment}
                />
            ))} */}
            
        </div>
    );
}

export default CommentList;
