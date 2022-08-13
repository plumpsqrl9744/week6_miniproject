import React from 'react'
import {Routes,BrowserRouter,Route} from "react-router-dom"
import Main from '../main/Main'
import Post from '../post/Post'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main></Main>}></Route>
        <Route path={"/post"} element={<Post></Post>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router