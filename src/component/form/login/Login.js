import React, { useState, useEffect } from "react";
import style from "./Login.module.css";
import CustomInput from "../../custom/customInputs/CustomInput";
import CustomButton from "../../custom/customButtons/CustomButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import log from '../../../component/images/login.jpg'
import { useSetRecoilState } from "recoil";
import { isRefresh } from "../../../Recoil";




export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);
  const nav = useNavigate();
  const setLogin =useSetRecoilState(isRefresh)
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userData"));
    setUserList(data);
  }, []);
  
  function handleLogin() {
    if (email === "" || password === "") {
      alert("FIll the form first");
    } else if (userList !== null) {
      const userFind = userList.find(
        (x) =>
          (x.email === email || x.email === "") &&
          (x.password === password || x.password === "")
      );

      if (!userFind) {
        alert("No user found. Please sign up!! 😥😥");
        setEmail("");
        setPassword("");
      } else {
        alert(`${userFind.userName} you are successfully  login 🎉🎉`);
        setLogin(true)
        nav("/home");
       
      }
    } else {
      alert("Please Signup first 😊😊");
    }
    
  }

  return (
    <div className={style.main_container}>
      <img src={log} alt="logImage" />
      <div className={style.heading}>
        <h1>LOGIN PAGE</h1>
        <p>Login to get Updated </p>
      </div>
      <div className={style.wrap}>
        <h3>Login </h3>
        <CustomInput
          className={style.email}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onClick={handleLogin}
          btntxt="Login"
        />
        <p>
          Not registered yet? <Link to="/signup"> Signup</Link>
        </p>
      </div>
    </div>    
  );
}
