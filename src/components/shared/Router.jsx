import React from 'react'
import {Routes,BrowserRouter,Route} from "react-router-dom"
import Main from '../main/Main'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main></Main>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router