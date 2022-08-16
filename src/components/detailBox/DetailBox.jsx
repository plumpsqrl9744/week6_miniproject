import React,{useEffect, useState} from 'react';
import "./detailBox.scss";
import { useSelector, useDispatch } from 'react-redux';
import { __getComments } from '../../modules/comment';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const DetailBox = () => {
    const [data,setData] = useState(null)
    const dispatch = useDispatch();
    const commentList = useSelector((state) => state.commentReducer)
    const navigate = useNavigate();
    // console.log ( "commentList",commentList)

    const getting = async () => {
        try{
            const response = await axios.get("http://localhost:8080/api/v1/todos/" // 게시글 조회 예시
            )
            console.log(response.data)
            setData(response.data)
        } catch(error){
            console.log(error)
        }
    }
    const deleteHandle = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.delete("http://localhost:8080/api/v1/todos/",{ // 게시글 삭제
                id:data, // 예시입니다
                content:data // 예시입니다
            })
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
                <strong>jangwoo_Koo</strong>
                <div>
                    <a href='/post' onClick={updateHandle}><button className='update-btn'>수정</button></a>
                    <button onClick={deleteHandle}>삭제</button>
                </div>
            </div>
            <div className='img_box'>
            <img className='deatil_img' src = 'https://i.pinimg.com/474x/d9/25/bc/d925bc22fec48387535d0189f29a6b9d.jpg' />   
            </div>
            
            <span className='post_text'>    
            <strong>jangwoo_Koo</strong>&nbsp;&nbsp;괭이 귀여워!!!
            </span>
        </div>
    );
}

export default DetailBox;
