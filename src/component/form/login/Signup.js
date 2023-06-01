import React, { useEffect, useState } from "react";
import CustomInput from "../../custom/customInputs/CustomInput";
import CustomButton from "../../custom/customButtons/CustomButton";
import style from "./Login.module.css";
import { Link , useNavigate } from "react-router-dom";
import sign from "../../images/signup.jpg";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setLocalStorageData(JSON.parse(data));
    }
  }, []);

  function handleSignUp() {
    const userInfo = {
      email: email,
      password: password,
      userName: userName,
    };
  
    // validation
  
  
    if (email.includes('@') && password.length >= 4 && password.length <= 8) {
      setLocalStorageData(prevData => [...prevData, userInfo]);
      console.log(localStorageData)
      if(localStorageData.find((user)=> user.email === email && user.userName === userName)){
  
      return alert("user already exist please choose another email and username")
  
    }
      
      localStorage.setItem('userData', JSON.stringify([...localStorageData, userInfo])) 
      alert('Succesfully Registered!!')
      navigate('/')
    }
     else {
      alert('Please enter valid details');
    }
  
    setEmail('');
    setPassword('');
    setUserName('');
  }
 

  return (
    <div className={style.main_container}>
      <img src={sign} alt="logImage" />
      <div className={style.heading}>
        <h1>SignUp PAGE</h1>
        <p>Join with us to be Fit</p>
      </div>
      <div className={style.wrap}>
        <h3>Signup</h3>
        <CustomInput
          className={style.email}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          className={style.password}
          type="text"
          placeholder="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <CustomInput
          className={style.password}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton
          style={style.button}
          onClick={handleSignUp}
          btntxt="SignUp"
        />
        <p>
          Already registered? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}