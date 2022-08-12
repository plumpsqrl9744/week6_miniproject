import React from 'react';
import Header from '../header/Header';
import SlideCard from '../slider/Slider';
import Cards from "../cards/Cards";
import "./Main.scss";

const Main = () => {
  return (
    <div className='main'>
        <Header></Header>
        <SlideCard></SlideCard>
        <Cards></Cards>
    </div>
  )
}

export default Main