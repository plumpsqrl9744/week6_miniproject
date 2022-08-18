import Header from '../header/Header';
import SlideCard from '../slider/Slider';
import Cards from "../cards/Cards";
import "./Main.scss";
import Pagination from 'react-bootstrap/Pagination';
import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios"

const pageNums = [1,2,3,4,5,6]

const Paging = () => {  
  return (
    <div className='paging'>
      <Pagination>
        {pageNums.map((num ,index)=>{
          return(
            <Pagination.Item key={index} href={`/${num}`}>{num}</Pagination.Item>
          )
        })}
      </Pagination>
    </div>
  );
}
const Main = () => { // 카드 페이징 get
  const navigate = useNavigate();
  const [hello, setHello] = useState('')

  const getPosts = async () => {
    try{
      let auth = localStorage.getItem("Authorization")
      let token = localStorage.getItem("Refresh-Token")
      // const response = await axios.get(`/posts`,{
      const response = await axios.get(`/posts?page=${1}`,{      // 게시글 조회
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
  // useEffect(()=>{
  //   if(localStorage.getItem("Authorization") !== null){
  //     console.log("로그인 세션 유지 중")
  //     getPosts();
  //   } else{
  //     console.log("로그인 세션 없음")
  //     alert("Please Login !")
  //     return navigate("/login")
  //   }
  // },[])
  return (
    <div className='main'>
      <Header></Header>
      <SlideCard></SlideCard>
      <Cards></Cards>
      <Paging></Paging>
    </div>
  )
}

export default Main