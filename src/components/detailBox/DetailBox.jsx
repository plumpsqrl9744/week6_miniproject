import React from 'react';
import "./detailBox.scss"


function DetailBox() {
    return (
        <div className='detail_box'>
            <div className='post_writer_box'> 
            <img className='user_img' src = ' https://www.urbanbrush.net/web/wp-content/uploads/edd/2020/11/urbanbrush-20201104103659627968.jpg' /><strong>jangwoo_Koo</strong>
            </div>

            <div className='img_box'>
            <img className='deatil_img' src = ' https://i.pinimg.com/474x/d9/25/bc/d925bc22fec48387535d0189f29a6b9d.jpg' />   
            </div>
            
            <span className='post_text'>    
            <strong>jangwoo_Koo</strong>&nbsp;&nbsp;괭이 귀여워!!!
            </span>
        </div>
    );
}

export default DetailBox;
