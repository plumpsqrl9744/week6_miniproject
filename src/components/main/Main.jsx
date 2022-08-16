import Header from '../header/Header';
import SlideCard from '../slider/Slider';
import Cards from "../cards/Cards";
import "./Main.scss";
import Pagination from 'react-bootstrap/Pagination';
import React, {useEffect, useState} from 'react';
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
  const [hello, setHello] = useState('')
  useEffect(async () => {
    try{
      const response = await axios.delete("http://localhost:8080/api/v1/todos/" // 게시글 all 호출
      )
      console.log(response.data)    
    } catch(error){
        console.log(error)
    }
  })

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