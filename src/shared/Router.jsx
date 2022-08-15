// shared/Router.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// ::: 페이지 연결
import DetailPage from '../detailPage/DetailPage';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;