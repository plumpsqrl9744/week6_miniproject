import React ,{useEffect} from 'react'
import logo from "../../logo/logo2.png"
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import "./Login.scss"

const Login = () => {
  return (
    <div className='login'>
        <div className='login-container'>
            <div className='row-group'>
                <img src={logo}></img>
            </div>
            <div>
                <label>아이디</label>
                <input className='input-item' type="text" placeholder="아이디를 입력하세요."></input>
            </div>
            <div>
                <label>비밀번호</label>
                <input className='input-item' type="text" placeholder="패스워드를 입력하세요."></input>
            </div>
                <a href='/'><button>로그인</button></a>
                <a href='/signup'><button>회원가입</button></a>
        </div>
    </div>
  )
}

export default Login