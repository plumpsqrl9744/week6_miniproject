import React,{useEffect, useState} from 'react';
import "./detailBox.scss";
import axios from "axios";
import { useNavigate ,useParams } from 'react-router-dom';
import { BsSuitHeartFill,BsSuitHeart } from "react-icons/bs";

const DetailBox = ({comment,userCheck}) => {
    const [check,setCheck] = useState(false)
    // const dispatch = useDispatch();
    // const commentList = useSelector((state) => state.commentReducer)
    const navigate = useNavigate();
    const id = useParams()
    const deleteHandle = async (e) => {
        e.preventDefault()
        try{
            let auth = localStorage.getItem("Authorization")
            let token = localStorage.getItem("Refresh-Token")
            const response = await axios.delete(`/post/${id.id}`,{     // 게시글 삭제
                headers:{
                    "Authorization": auth,
                    "Refresh-Token": token
                },
            },{withCredentials:true})
            console.log(response.data)
            setCheck((prev)=>!prev)
            navigate("/")
        } catch(error){
            console.log(error)
        }
    }
    const updateHandle = (e) => {
        e.preventDefault();
        navigate("/post",{state:comment})
    }
    // useEffect(()=>{
    //     
    // },[])
    return (
        <div className='detail_box'>
            <div className='post_writer_box'> 
                {comment === null ? "" : <strong>{comment.title}</strong>}
                {userCheck ? <div>
                                <a href='/post' onClick={updateHandle}><button className='update-btn'>수정</button></a>
                                <button onClick={deleteHandle}>삭제</button>
                            </div>
                        : null}
            </div>
            <div className='img_box'>
                {comment === null ? "" : <img className='deatil_img' src = {comment.imageUrl}/> }
            </div>
                <div className='heart-check'>
                    <BsSuitHeart style={{fontSize:"23px" ,color:"red"}}></BsSuitHeart>
                </div>
                <span className='post_text'>    
                {comment === null ? "" : <strong>{comment.content}</strong>}
            </span>
        </div>
    );
}

export default DetailBox;
