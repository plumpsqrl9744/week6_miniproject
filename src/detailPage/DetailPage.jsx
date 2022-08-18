import React ,{useEffect,useState} from 'react';
import Header from '../components/header/Header';
import CommentList from '../components/commentList/CommentList';
import DetailBox from '../components/detailBox/DetailBox';
import { useNavigate ,useParams} from "react-router-dom";
import axios from "axios";
import "./detailPage.scss"

function DetailPage() {
    const navigate = useNavigate();
    const [userCheck,setUserCheck] = useState(false)
    const [data,setData] = useState(null)
    const id = useParams()
    const getting = async () => {
        try{
            let auth = localStorage.getItem("Authorization")
            let token = localStorage.getItem("Refresh-Token")
            const response = await axios.get(`/post/${id.id}`,{     // 게시글 조회
                headers:{
                    "Authorization": auth,
                    "Refresh-Token": token
                }
            },{withCredentials:true})
            setUserCheck((prev)=>!prev)
            setData(response.data.data)
            
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        if(localStorage.getItem("Authorization") !== null){
            console.log("로그인 세션 유지 중")
            getting()
        }else{
            alert("Please Login !")
            return navigate("/login")
        }
    },[])
    return (
        <div>
            <Header/>
                <div className='detail_page'>
                    <DetailBox comment={data} userCheck={userCheck}/>
                    <CommentList comment={data === null ? null : data}/>
                </div>
        </div>
    );
}

export default DetailPage;
