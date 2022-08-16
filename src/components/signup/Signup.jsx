import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { __checkUser } from '../../modules/signUP';
import { __addUser } from '../../modules/signUP';
import "./SignUp.scss"


function Signup() {
    const dispatch = useDispatch();

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

    const submitHandler = (e) => {
        e.preventDefault();
        // if ( inputs.id === "" )
        const newUser = {
            userId : inputs.userId,
            nickname : inputs.nickname,
            password : inputs.password,
            passwordConfirm : inputs.passwordConfirm
        }
        dispatch(__addUser(newUser));
        console.log("확인 :",newUser)

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
        dispatch(__checkUser(userCheck));
        console.log("유저첵",userCheck)

    }


    return (<div>
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
                <button 
                 className='user_check_button'
                onClick = {doubleCheckHandler}
                >중복확인</button>
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
                type='text' 
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
                type='text' 
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

