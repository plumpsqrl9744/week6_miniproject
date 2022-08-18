import React, { useEffect, useState } from 'react';
import logo from "../../logo/logo2.png";
import "./Login.scss";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [id,setId] = useState("")
    const [psword, setPsword] = useState("")
    const [navigates,setNavigates] = useState(false)
    const navigate = useNavigate();

    const onChange1 = (e) => {
        setId(e.target.value)
    }
    const onChange2 = (e) => {
        setPsword(e.target.value)
    }
    const sendRequstLogin = async (e) => {
        e.preventDefault();
        let reg1 = /^[A-Za-z0-9]{5,12}$/;
        let reg2 = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$/;
        if ( id === "" || psword ==="") {
            alert("아이디와 비밀번호를 정확히 입력해주세요.")
        }
        if (!reg1.test(id)){
            alert("아이디는 영문 대소문자와 숫자 5~12자리로 입력해야 합니다.")
        }
        if (!reg2.test(psword)){
            alert("비밀번호는 최소 특수문자 하나 숫자 하나 대소문자와 숫자로 8~20자리를 입력해야 합니다.")
        }
        try{
            const response = await axios.post("login",{ // 로그인
                id:id, 
                password:psword,
            }
            ,{withCredentials:true})
            localStorage.setItem("Authorization",response.data.data.Authorization)
            localStorage.setItem("Refresh-Token",response.data.data["Refresh-Token"])
            setNavigates(true)
            navigate("/")
        } catch(error){
            console.log(error)
        }
        // axios.defaults.headers.common["Authorization"] = `Bearer ${response['token']}`;
    }
    useEffect(()=>{
        if(localStorage.getItem("Authorization") !== null){
            return navigate("/")
        }
    },[])
  return (
    <div className='login'>
        <div className='login-container'>
            <div className='row-group'>
                <img src={logo}></img>
            </div>
            <div>
                <label className='id-label'>아이디</label>
                <input value={id} onChange={onChange1} className='input-item' type="text" placeholder="아이디를 입력하세요." pattern='^[A-Za-z0-9]{5,12}$'></input>
            </div>
            <div>
                <label className='id-label'>비밀번호</label>
                <input value={psword} onChange={onChange2} className='input-item' type="password" placeholder="패스워드를 입력하세요." pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$`}></input>
            </div>
                <a href='/'><button type='submit' onClick={sendRequstLogin} className='login-btn'>로그인</button></a>
                <a href='/signup'><button className='login-btn'>회원가입</button></a>
        </div>
    </div>
  )
}

export default Login