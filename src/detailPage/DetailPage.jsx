import React from 'react';
import Header from '../components/header/Header';
import CommentList from '../components/commentList/CommentList';
import DetailBox from '../components/detailBox/DetailBox';
import "./detailPage.scss"

function DetailPage() {
    return (
        <div>
            <Header/>
                <div className='detail_page'>
                    <DetailBox/>
                    <CommentList/>
                </div>
        </div>
    );
}

export default DetailPage;
