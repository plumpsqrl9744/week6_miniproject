import React from 'react';
import styled from 'styled-components';


function CommentForm() {
    return (
        <StCommentForm>
            <form class="form-inline">
            <div class="form-group">
                <label for="exampleInputEmail2"></label>
                <StCommentInput type="email" class="form-control" id="exampleInputEmail2" placeholder="댓글을 입력해 주세요!"/>
            </div>
            <button type="submit" class="btn btn-default">add</button>
            </form>
        </StCommentForm>
    );
}

export default CommentForm;

const StCommentForm = styled.div`
    height: 50px;

    margin-bottom : 200px;
`
const StCommentInput = styled.input`
    width : 80%;
`
