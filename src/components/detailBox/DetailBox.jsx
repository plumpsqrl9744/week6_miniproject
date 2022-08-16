import React from 'react';
import "./detailBox.scss"
import "./detailBox.scss";


function DetailBox() {
    return (
        <div className='detail_box'>
            <div className='post_writer_box'> 
                <strong>jangwoo_Koo</strong>
                <div>
                    <button className='update-btn'>수정</button>
                    <button>삭제</button>
                </div>
            </div>
            <div className='img_box'>
              <img className='deatil_img' src = 'https://i.pinimg.com/474x/d9/25/bc/d925bc22fec48387535d0189f29a6b9d.jpg' />   
            </div>
            
            <span className='post_text'>    
              <strong>jangwoo_Koo</strong>&nbsp;&nbsp;괭이 귀여워!!!
            </span>
        </div>
    );
}

export default DetailBox;
