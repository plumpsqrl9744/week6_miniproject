// src/redux/modules/cards.js

// ::: axios(통신역할), Thunk(미들웨어), Reducer 연결
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ::: Thunk 생성 및 설정, Axios를 사용해 데이터 주고 받기 위해 설정
// ::: json server 포트 설정
const port = '3003';

// ::: [Thunk, Axios] 데이터 추가하기(post)
// :::: (post) 회원가입
export const __checkUser = createAsyncThunk("CHECK_USER", async (checkUser) => {
  const response = await axios.post(`http://localhost:${port}/users`,{
  userId : checkUser.userId,
  
});

console.log("post :",response.data)
  return response.data;

});


// ::: [Thunk, Axios] 데이터 추가하기(post)
// :::: (post) 댓글
export const __addUser = createAsyncThunk("ADD_USER", async (newUser) => {
  const respose = await axios.post(`http://localhost:${port}/users`, {
    id: newUser.id,
    nickname: newUser.nickname,
    password : newUser.password,
    passwordConfirm : newUser.passwordConfirm,
  });
  
  return respose.data;
  
});




// [Reducer]
// ::: 스토어 공간에서 어떤 작업을 진행해줄지
export const usersReducer = createSlice({
  name: 'user',
  initialState: [ ],
  reducers: { },
  extraReducers: { 
    // [__getUsers.fulfilled]: (state, { payload }) => {
    //   console.log("하이요")
    // },
    [__addUser.fulfilled]: (state, { payload }) => [...state, payload],
    [__checkUser.fulfilled]: (state, { payload }) => {
      console.log("hi:")
    }
  },
});


export default usersReducer.reducer