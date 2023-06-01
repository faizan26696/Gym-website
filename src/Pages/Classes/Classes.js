import React from "react";
import Background from "../../component/backround/Background";
import cls from "../../component/images/class.jpg";
import styles from "./Classes.module.css";
import {CgProfile} from 'react-icons/cg'
import {BiTimeFive} from 'react-icons/bi'
import { useEffect } from "react";
import { isRefresh} from "../../Recoil";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
export default function Classes() {
  const nav =useNavigate()
  const Login = useRecoilValue(isRefresh)
   useEffect(()=>{
    if(!Login){
      nav ("/")
    }
   })
  const data = [
    {
      id: "1",
      title: "Power Lifting",
      name: "Yarian Yate",
      time: "Monday 10:00 AM",
    },
    {
      id: "2",
      title: "Power Lifting",
      name: "pranav",
      time: " Tuesday 10:00 AM",
    },
    {
      id: "3",
      title: "Power Lifting",
      name: "karan",
      time: "Wednesday 10:00 AM",
    },
    {
      id: "4",
      title: "Power Lifting",
      name: "Jay",
      time: "Thursday 10:00 AM",
    },
 
  ];
  return (
  
    <div>
      <Background
        url={cls}
        heading="Classes"
        desc="Join Our Classes to be Fit "
      />
      <div className={styles.class}>
        <h1>Class Timing & Programms</h1>
        <hr></hr>
        <p>Find the class timetable for your local club or find out when and where you can do a specific class.</p>
        </div>
      <div className={styles.container}>
        {data.map((item,id) => {
          return (
            <div key={id} className={styles.card}>
              <div className={styles.card_title}></div>
              <div className={styles.card_body}>
                <h4>{item.title}</h4>
                <div className={styles.content}>
                  <h5><CgProfile/>{item.name}</h5>
                  <h5><BiTimeFive/>{item.time}</h5>
                </div>
                <button id={styles.btn1}>Join Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
