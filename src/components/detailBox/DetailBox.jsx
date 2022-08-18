import React,{useEffect, useState} from 'react';
import "./detailBox.scss";
// import { useSelector, useDispatch } from 'react-redux';
import { __getComments } from '../../modules/comment';
import axios from "axios";
import { useNavigate ,useParams } from 'react-router-dom';
import { BsSuitHeartFill,BsSuitHeart } from "react-icons/bs";

const DetailBox = () => {
    const [userCheck,setUserCheck] = useState(false)
    const [data,setData] = useState(null)
    // const dispatch = useDispatch();
    // const commentList = useSelector((state) => state.commentReducer)
    const navigate = useNavigate();
    const id = useParams()

    const getting = async () => {
        try{
            let auth = localStorage.getItem("Authorization")
            let token = localStorage.getItem("Refresh-Token")
            const response = await axios.get(`/post/${id.id}`,{     // 게시글 조회 예시
                headers:{
                    "Authorization": auth,
                    "Refresh-Token": token
                }
            },{withCredentials:true})
            console.log("쇼미",response)
            setUserCheck((prev)=>!prev)
            setData(response.data.data)
        } catch(error){
            console.log(error)
        }
    }
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
        } catch(error){
            console.log(error)
        }
    }
    const updateHandle = (e) => {
        e.preventDefault();
        navigate("/post",{state:data})
    }
    useEffect(()=>{
        getting()
    },[])
    return (
        <div className='detail_box'>
            <div className='post_writer_box'> 
                {data === null ? "" : <strong>{data.title}</strong>}
                {userCheck ? <div>
                                <a href='/post' onClick={updateHandle}><button className='update-btn'>수정</button></a>
                                <button onClick={deleteHandle}>삭제</button>
                            </div>
                        : null}
            </div>
            <div className='img_box'>
                {data === null ? "" : <img className='deatil_img' src = {data.imageUrl}/> }
            </div>
                <div className='heart-check'>
                    <BsSuitHeart style={{fontSize:"23px" ,color:"red"}}></BsSuitHeart><div className='hearts-count'>25</div>
                </div>
                <span className='post_text'>    
                {data === null ? "" : <strong>{data.content}</strong>}
            </span>
        </div>
    );
}

export default DetailBox;
