import React, {useRef, useState} from 'react';
import "./Signup.scss"
import axios from "axios"
import {useNavigate} from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { __checkUser } from '../../modules/signUP';
// import { __addUser } from '../../modules/signUP';

function Signup() {
    // const dispatch = useDispatch();
    const [navigates,setNavigates] = useState(false)
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        userId : "",
        nickname : "",
        password : "",
        passwordConfirm : "",
    }) 
    
    const { userId, password, passwordConfirm, nickname } = inputs;

    const onChangeHandler = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
        console.log([name], value)
        console.log({...inputs})
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.post("/signup",{
            memberId : inputs.userId,
            nickname : inputs.nickname,
            password : inputs.password,
        })
        setNavigates(true)
        // const newUser = {
        //     userId : inputs.userId,
        //     nickname : inputs.nickname,
        //     password : inputs.password,
        //     passwordConfirm : inputs.passwordConfirm
        // }
        // dispatch(__addUser(newUser));
        // console.log("확인 :",newUser)
        setInputs({
            userId : "",
            nickname : "",
            password : "",
            passwordConfirm : "",
        })
    }

    const doubleCheckHandler = (e) => {
        e.preventDefault();
        const userCheck = {
            userId : inputs.userId
        }
        // dispatch(__checkUser(userCheck));
        console.log("유저첵",userCheck)
    }
    if(navigates===true){
        console.log("SignUp Success !")
        alert("SignUp Success !")
        return navigate("/login")
    }
    return (
    <div className='signup'>
        <img className='signup_img' src={"https://raw.githubusercontent.com/plumpsqrl9744/week6_miniproject/seo/src/logo/logo2.png"}></img>
        <div className='sigup_wrap'>
            <div className='project_name'>
            </div>
            <div className='signup_item'>
                <div className='item_title'>아이디</div>
                <input 
                className='textbox'
                type='text' 
                name='userId' 
                value={userId} 
                onChange={onChangeHandler}
                placeholder = "아이디를 입력해주세요"
                />
            </div>
            <div className='signup_item'>
                <div className='item_title'>닉네임</div>
                <input 
                className='textbox'
                type='text' 
                name='nickname' 
                value={nickname} 
                onChange={onChangeHandler}
                placeholder = "닉네임을 입력해주세요"
                />
            </div>
            <div className='signup_item'>
                <div className='item_title'>비밀번호</div>
                <input 
                className='textbox'
                type='password' 
                name='password' 
                value={password} 
                onChange={onChangeHandler}
                placeholder = "패스워드를 입력해주세요"
                />
            </div>
            <div className='signup_item'>
                
                <div className='item_title'>비밀번호 재확인</div>
                <input 
                className='textbox'
                type='password' 
                name='passwordConfirm' 
                value={passwordConfirm} 
                onChange={onChangeHandler}
                placeholder = "패스워드를 입력해주세요"
                />
            </div>
            <button
            className='signup_button'
            onClick = {submitHandler}
            >
            Sign up
            </button>

        </div>
    </div>
    );
}

export default Signup;

