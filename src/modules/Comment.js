// src/redux/modules/cards.js

// ::: axios(통신역할), Thunk(미들웨어), Reducer 연결
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ::: Thunk 생성 및 설정, Axios를 사용해 데이터 주고 받기 위해 설정
// ::: json server 포트 설정
const port = '3003';

// ::: [Thunk, Axios] 데이터 받아오기(get)
// :::: (get) 댓글
export const __getComments = createAsyncThunk("GET_COMMENTS", async () => {
  const response = await axios.get(`http://localhost:${port}/comments/`);
  return response.data;
});


// ::: [Thunk, Axios] 데이터 추가하기(post)
// :::: (post) 댓글
export const __addComment = createAsyncThunk("ADD_COMMENT", async (newComments) => {
  const respose = await axios.post(`http://localhost:${port}/comments`, {
    message: newComments.message,
    writer: newComments.writer,
    id : newComments.id,
    postId : newComments.postId,
  });
  console.log("post :",respose.data)
  return respose.data;
  
});


// ::: [Thunk, Axios] 데이터 삭제하기(delete)
// :::: (delete) 댓글
export const __deleteComment = createAsyncThunk("DELETE_COMMENT", async (id) => {
  // eslint-disable-next-line
  const response = await axios.delete(`http://localhost:${port}/comments/${id}`)
  return id;
});


// ::: [Thunk, Axios] 데이터 수정하기(put)
// :::: (put) 댓글
export const __updateComment = createAsyncThunk("UPDATE_COMMENT", 
  async(updateComment) => {
    // eslint-disable-next-line
    const response = await axios.put(`http://localhost:${port}/comments/${updateComment.id}`, {
      writer: updateComment.writer,
      message: updateComment.message,
      postId: updateComment.postId,
      id: updateComment.id
      
    });
    
    return response.data;
  }
  
);


// [Reducer]
// ::: 스토어 공간에서 어떤 작업을 진행해줄지
export const commentReducer = createSlice({
  name: 'comments',
  initialState: [ ],
  reducers: { },
  extraReducers: { 
    [__getComments.fulfilled]: (state, { payload }) => [...payload],
    [__addComment.fulfilled]: (state, { payload }) => [...state, payload],
    [__deleteComment.fulfilled]: (state, { payload }) => {
      state.filter((comment) => comment !== payload)
    },
    [__updateComment.fulfilled]: (state, { payload }) => {
      return state.map((comment) => {
        if(comment.id === payload.id){
          return { ...comment, writer: payload.writer, message: payload.message };
        } else {
          return comment;
        }
      });
    }
  },
});


export default commentReducer.reducer