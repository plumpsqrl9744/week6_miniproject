import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { commentReducer } from './comment';
import logger from 'redux-logger';
// import { loginReducer } from "./Login";

// ::: 여러개의 reducer 통합
const reducer = combineReducers({ 
  commentReducer: commentReducer.reducer,
  // loginReducer: loginReducer.reducer
})

// ::: 스토어 생성, 미들웨어 설정
export default configureStore({
  reducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

