import React from "react";
import mass from "./bmi.module.css";
import CustomButton from "../../../component/custom/customButtons/CustomButton";

export default function BMI() {
  return (
    <div className={mass.main_container}>
      <div className={mass.heading}>
        <h1>Find your ideal weight:</h1>
        <div className={mass.button}>
          <CustomButton btntxt="FOR FEMALE" style={mass.btnFemale} />
          <CustomButton btntxt="FOR MALE" style={mass.btnMale} />
        </div>
        <div className={mass.index}>
            <h1>Your height, ft:</h1>
            <input type="text" placeholder="Input Height" />
            <h1><u>Lbs</u></h1>
        </div>
      </div>
    </div>
  );
}
