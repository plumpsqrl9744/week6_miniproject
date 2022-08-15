import React from 'react'
import {Routes,BrowserRouter,Route} from "react-router-dom"
import Main from '../components/main/Main'
import Post from '../components/post/Post'
import DetailPage from '../detailPage/DetailPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/detailpage' element={<DetailPage></DetailPage>}></Route>
        <Route path={"/:id"} element={<Main></Main>}></Route>
        <Route path={"/"} element={<Main></Main>}></Route>
        <Route path={"/post"} element={<Post></Post>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router