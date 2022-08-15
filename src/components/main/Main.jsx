import Header from '../header/Header';
import SlideCard from '../slider/Slider';
import Cards from "../cards/Cards";
import "./Main.scss";
import Pagination from 'react-bootstrap/Pagination';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
const Main = () => {
  const [hello, setHello] = useState('')
  useEffect(() => {
      const response = axios.get("https://run.mocky.io/v3/5b8dfb40-207d-4979-9acf-8c71943aed6a")
      console.log(response.data)
      return response.data
      // .then(response => setHello(response.data))
      // console.log(hello)
      // .catch(error => console.log(error))
  }, []);
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