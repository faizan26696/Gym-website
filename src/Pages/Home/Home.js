import React, { useEffect } from 'react'
import Conslutant from './consultant/Conslutant'
import Background from '../../component/backround/Background'
import back from "../../component/images/back.jpg";
import BMI from './bmi/BMI';
import Expert from './expert/Expert';
import Price from './price/Price';
import Clientstories from './client stories/Clientstories';
import { useRecoilValue } from 'recoil';
import { isRefresh } from '../../Recoil';
import { useNavigate } from 'react-router-dom';
export default function Home() {

  const nav =useNavigate()
  const Login = useRecoilValue(isRefresh)
  console.log();
  useEffect(()=>{
 if(!Login){
   nav ("/")
 }
 },[])




  return (
    <div>
      <Background  
      url={back}
      heading="Online Personal Training"
      desc="Maximum Results in Minimum Time, no matter your location"
      />
      <Conslutant/>
      <BMI/>
      <Expert/>
      <Price/>
      <Clientstories/>
    </div>
  )
}
