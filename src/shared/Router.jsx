// shared/Router.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// ::: 페이지 연결
import Login from '../components/login/Login';
import DetailPage from '../detailPage/DetailPage';
import Signup from '../components/signup/Signup';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/detailpage' element={<DetailPage />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;