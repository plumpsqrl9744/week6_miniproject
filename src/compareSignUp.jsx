import React, { useState } from 'react';
import "./SignUp.css";
import {LoginBtn,LabelText,IDinput,LoginContainer} from "../Login/Login"
import { postLoginAsync } from "../../redux/modules/login";
import { useDispatch ,useSelector } from "react-redux";
import {Link} from "react-router-dom";
​
const SignUp = () => {
    const dispatch = useDispatch();
    const logins = useSelector((state) =>state.login);
​
    const [status, setStatus] = useState(false)
    const [id,setId] = useState("")
    const [pw,setPw] = useState("")
    const [pwCheck,setPwCheck] = useState("")
    const [mail,setMail] = useState("")
    const [name, setName] = useState("")
​
    const handleFocus = ({e}) =>{
        console.log(e)
        setStatus(true)
        console.log("빠뀜")
    }
    const idHandle = (e) =>{
        setId(e.target.value);
    }
    const nameHandle = (e) =>{
        setName(e.target.value)
    }
    const pwHandle = (e) =>{
        setPw(e.target.value)
    }
    const pwCheckHandle = (e) =>{
        setPwCheck(e.target.value);
    }
    const mailHandle = (e) =>{
        setMail(e.target.value);
    }
    const submitTodo = (e)=>{
        e.preventDefault();
        if (id==="" || pw==="" || pwCheck==="" || mail==="" || name===""){
            alert("모든 정보를 입력해주세요.")
        }
        if (pw !== pwCheck){
            console.log("비밀번호가 다릅니다.")
        }
        dispatch(
            postLoginAsync({
                user: id,
                name: name,
                email: mail,
                password: pw,
            })
        )
    }
    return (
    <div className='signup'>
        <LoginContainer className='sign-container'>
            <form method='post'>
                <div>
                    <LabelText>아이디</LabelText>
                    <IDinput value={id} onChange={idHandle} className={'input-item'} type= "text" placeholder = "아이디 입력"  pattern='^[A-Za-z0-9]{3,16}$' required/>
                    <span>아이디는 3~16 글자로 특수문자는 들어갈 수 없습니다.</span>
                </div>
                <div>
                    <LabelText>이름</LabelText>
                    <IDinput value={name} onChange={nameHandle} className='input-item' type= "text" placeholder = "이름 입력" />
                </div>
                <div>
                    <LabelText>비밀번호</LabelText>
                    <IDinput onChange={pwHandle} className='input-item' type= "password" placeholder = "비밀번호 입력" required pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$"/>
                    <span>비밀번호는 8~20글자로 특수문자 1개와, 숫자 1개 이상 들어가야 합니다.</span>
                </div>
                <div>
                    <LabelText>비밀번호 확인</LabelText>
                    <IDinput onChange={pwCheckHandle} className='input-item' type= "password" placeholder = "비밀번호 확인" required pattern={pw}/>
                    <span>비밀번호를 정확히 확인해주세요.</span>
                </div>
                <div className='margin-temp'>
                    <LabelText>E-mail</LabelText>
                    <IDinput onChange={mailHandle} className='input-item' type= "email" placeholder = "이메일 입력" required/>
                    <span>이메일 양식이 맞는지 확인해주세요.</span>
                </div>
                <Link to={"/login"}><LoginBtn className='signup-btn' onClick={submitTodo}>가입하기</LoginBtn></Link>
            </form>
        </LoginContainer>
    </div>
  )
}
​
export default SignUp