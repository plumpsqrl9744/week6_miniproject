import React from 'react';
import Header from '../components/header/Header';
import CommentList from '../components/CommentList';
import DetailBox from '../components/DetailBox';
import styled from 'styled-components';

function DetailPage() {
    return (
        <div>
            <Header/>
        <StDetailPage>
            <DetailBox/>
            <CommentList/>
        </StDetailPage>

        </div>
    );
}

export default DetailPage;
const StDetailPage = styled.div`
    position : absolute;
    left : 28%;

    display : flex;    
    flex-direction : column;
    justify-content : center;
    
    width : 600px;
    max-width : 1200px;
    border : 1px solid #D8D8D8;

    padding : 10px;
    margin-top : 20px;
`