import React from 'react';
import styled from 'styled-components';
import CommentBox from './CommentBox';

function CommentList() {
    return (
        <StCommentList>
            cmlist
            <CommentBox/>
        </StCommentList>
    );
}

export default CommentList;

const StCommentList = styled.div`
    background-color : yellow;
    
    height : 250px;
`