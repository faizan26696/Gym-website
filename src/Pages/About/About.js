import React from "react";
import Headings from "./Headings/Headings";
import MiddleSection from "./MiddleSection/MiddleSection";
import BottomSection from "./BottomSection/BottomSection";
import Videosection from "./VideoSection/Videosection";
import Background from "../../component/backround/Background";
import man from "../../component/images/man.jpg";
import { useEffect } from "react";
import { isRefresh} from "../../Recoil";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";


export default function About() {
  const nav =useNavigate()
  const Login = useRecoilValue(isRefresh)
   useEffect(()=>{
    if(!Login){
      nav ("/")
    }
   },[])

   
  return (
    <div>
      <Background
        url={man}
        heading="About Us"
        desc="To Know More About Us Visit"
      />
      <Headings />
      <MiddleSection />
      <BottomSection />
      <Videosection />
    </div>
  );
}
