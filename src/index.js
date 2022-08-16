import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './modules/config';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./axiosSet"

// ::: 전역저장관리공간(리덕스, 스토어) 연결

// ::: 전역 스타일 적용
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

