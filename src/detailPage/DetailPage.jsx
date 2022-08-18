import React ,{useEffect} from 'react';
import Header from '../components/header/Header';
import CommentList from '../components/commentList/CommentList';
import DetailBox from '../components/detailBox/DetailBox';
import { useNavigate } from "react-router-dom";
import "./detailPage.scss"

function DetailPage() {
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("Authorization") !== null){
            console.log("로그인 세션 유지 중")
        }else{
            alert("Please Login !")
            return navigate("/login")
        }
    },[])
    return (
        <div>
            <Header/>
                <div className='detail_page'>
                    <DetailBox/>
                    <CommentList/>
                </div>
        </div>
    );
}

export default DetailPage;
