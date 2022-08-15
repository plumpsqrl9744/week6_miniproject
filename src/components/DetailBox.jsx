import React from 'react';
import styled from 'styled-components';


function DetailBox() {
    return (
        <StDetailBox>
            <StPostWriterBox> 
            <StUserImg src = ' https://www.urbanbrush.net/web/wp-content/uploads/edd/2020/11/urbanbrush-20201104103659627968.jpg' /><strong>jangwoo_Koo</strong>
            </StPostWriterBox>

            <StImgBox>
            <StImg src = ' https://i.pinimg.com/474x/d9/25/bc/d925bc22fec48387535d0189f29a6b9d.jpg' />   
            </StImgBox>
            
            <StPostText>    
            <strong>jangwoo_Koo</strong>&nbsp;&nbsp;괭이 귀여워!!!
            </StPostText>
        </StDetailBox>
    );
}

export default DetailBox;

const StDetailBox = styled.div`
    display : flex;
    justify-content : space-around;
    flex-direction : column;

    border: 2px;

    margin-top : 10px;
    margin-bottom : 10px;

    height : 600px;
`
const StImg = styled.img`
    display : block;
    margin : 0px auto;

    width : 567px;
    height : 398px;
    
`
const StImgBox = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    width : 578px;
    height : 400px;
`
const StPostWriterBox = styled.div`
    margin-left : 10px;
    border-bottom : 1px solid #D8D8D8;
    padding-bottom : 20px;
`
const StPostText = styled.span`
    border-bottom : 1px solid #D8D8D8;
    
    margin : 11px;
    padding-top : 30px;
    padding-bottom : 30px;
`
const StUserImg = styled.img`
    width : 30px;
    height : 30px;
    border : 0.5px solid #E6E6E6k;
    margin-right : 10px;

`