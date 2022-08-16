import React from 'react'
import HeroSlider , {Slide} from "hero-slider"
import { SliderData } from './SliceData'
import "./Slider.scss"; 

const SlideCard = () => {
  const url = process.env.PUBLIC_URL
  return (
    <div className='slide-card'>
      <HeroSlider
        slidingAnimation='left_to_right'
        orientation='horizontal'
        initialSlide={1}
        onBeforeChange={(previousSlide,nextSlide)=>{}}
        onChange={nextSlide=>{}}
        onAfterChange={nextSlide=>{}}
        style={{backgroundColor:'white' , borderRadius:"15px"}}
        settings={{
          slidingDuration:250,
          slidingDelay:100,
          shouldAutoplay:true,
          shouldDisplayButtons:true,
          autoplayDuration:4000,
          height:"470px",
          width:"630px",
        }}
        >
        {SliderData.map((slide,index)=>{
          return(
            <Slide key={index}
              background={{
                backgroundImage: url + slide.image,
                backgroundAttachment:"fixed"
                }}
            ></Slide>
          )
        })}
      </HeroSlider>
    </div>
  )
}

export default SlideCard