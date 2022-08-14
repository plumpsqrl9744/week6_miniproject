import React from 'react';
import Header from '../header/Header';
import SlideCard from '../slider/Slider';
import Cards from "../cards/Cards";
import "./Main.scss";
import Pagination from 'react-bootstrap/Pagination';
import {Link} from "react-router-dom"

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