
import React from 'react'
import {Routes,BrowserRouter,Route} from "react-router-dom"
import Login from '../components/login/Login'
import Main from '../components/main/Main'
import Post from '../components/post/Post'
import DetailPage from '../detailPage/DetailPage'
import Signup from '../components/signup/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main></Main>}></Route>
        <Route path={"/:id"} element={<Main></Main>}></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/post"} element={<Post></Post>}></Route>
        <Route path={'/signup'} element={<Signup/>} />
        <Route path={'/detailpage/:id'} element={<DetailPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router