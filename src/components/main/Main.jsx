import Header from '../header/Header';
import SlideCard from '../slider/Slider';
import Cards from "../cards/Cards";
import "./Main.scss";
import Pagination from 'react-bootstrap/Pagination';
import React, {useEffect, useState} from 'react';
import { useNavigate ,useParams} from "react-router-dom"
import axios from "axios"
import { act } from 'react-dom/test-utils';

const Paging = ({datas}) => {
    const param = useParams();
    if (datas !== null){
      var active = datas.totalPages
    }
    let items = [];
    for (let number = 1; number <= active; number++) {
      items.push(
        <a key={number} href={`/${number}`} onClick={()=>getPosts2}>
          <Pagination.Item key={number} active={number === active}>
            {number}
          </Pagination.Item>
        </a>
      );
    }
    const getPosts2 = async () => {
      try{
        let auth = localStorage.getItem("Authorization")
        let token = localStorage.getItem("Refresh-Token")
        // const response = await axios.get(`/posts`,{
        const response = await axios.get(`/posts?page=${param.id}`,{      // 게시글 조회
          headers:{
            "Authorization": auth,
            "Refresh-Token": token
          },
        }
        ,{withCredentials:true})
      } catch(error){
          console.log(error)
      }
    }
  return (
    <div className='paging'>
      <Pagination>{items}</Pagination>  
    </div>
  );
}
const Main = () => { // 카드 페이징 get
  const navigate = useNavigate();
  const [hello, setHello] = useState("")

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
      
      setHello(response.data.data)
    } catch(error){
        console.log(error)
    }
  }
  
  useEffect(()=>{
    if(localStorage.getItem("Authorization") === null){
      console.log("로그인 세션 없음")
      alert("Please Login !")
      return navigate("/login")
    } else{
      console.log("로그인 세션 유지 중")
      getPosts();
      
      
    }
  },[])
  return (
    <div className='main'>
      <Header></Header>
      <SlideCard></SlideCard>
      <Cards datas = {hello === "" ? null : hello}></Cards>
      <Paging datas = {hello === "" ? null : hello}></Paging>
    </div>
  )
}

export default Main