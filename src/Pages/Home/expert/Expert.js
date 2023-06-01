import React from "react";
import team from "./expert.module.css";
import tr1 from '../../../component/images/daizy.jpg'
import tr2 from '../../../component/images/sam.jpg'
import tr3 from '../../../component/images/adam.jpg'
import tr4 from '../../../component/images/mark.jpg'

export default function Expert() {
  return (
    <div className={team.main_container}>
        <h4>OUR TEAM</h4>
        <h1>
          <span> Meet </span> our expert
        </h1>
     
      <div className={team.row}>
        <div className={team.trainer_col}>
          <img src={tr1} alt="trainer1" />
          <div className={team.layer}>
            <h2>Daizy</h2>
          </div>
        </div>
        <div className={team.trainer_col}>
          <img src={tr2} alt="trainer2" />
          <div className={team.layer}>
            <h2>Sam</h2>
          </div>
        </div>
        <div className={team.trainer_col}>
          <img src={tr3} alt="trainer3" />
          <div className={team.layer}>
            <h2>Adam</h2>
          </div>
        </div>
        <div className={team.trainer_col}>
          <img src={tr4} alt="trainer1" />
          <div className={team.layer}>
            <h2>Mark</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
