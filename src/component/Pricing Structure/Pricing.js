import React from "react";
import { BsCalendarCheck } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { ImFileVideo, ImNewspaper } from "react-icons/im";
import paisa from "./Pricing.module.css";
import CustomButton from "../custom/customButtons/CustomButton";

export default function Pricing() {

  function handleJoin(){
    if (window.confirm("Are you want to purchase the plan") === true) {
     alert("Plan Successfully added")
    } else {
     alert("You cancelled the plan")
    }
  }

  return (
    <div className={paisa.pricechart}>
      <div className={paisa.pricesection}>
        <div className={paisa.pricing}>
          <h1>₹ 1500</h1>
          <h4>
            1 <span>Month</span> TRAIL
          </h4>
        </div>
        <div className={paisa.heading}>
          <h4>₹ 3500 for 3 months thereafter and recurring</h4>
        </div>
        <div className={paisa.facility}>
          <p>
            <span>
              <BsCalendarCheck />
            </span>
            <span>
              4+2 <br />
              Training <br />
              Plans
            </span>
          </p>
          <p>
            <span>
              <ImFileVideo />
            </span>
            <span>
              80
              <br />
              How To
              <br />
              Videos
            </span>
          </p>
          <p>
            <span>
              <ImNewspaper />
            </span>
            <span>
              27
              <br />
              Plans
            </span>
          </p>
          <p>
            <span>
              <RiUser3Line />
            </span>
            <span>
              4+2 <br />
              Training <br />
              Plans
            </span>
          </p>
           <CustomButton btntxt="Buy Now" style={paisa.btnselect} onClick={handleJoin}/>
        </div>
        <div className={paisa.plan}>
          <p>1-month pre-pay plan</p>
        </div>
      </div>
    </div>
  );
}
