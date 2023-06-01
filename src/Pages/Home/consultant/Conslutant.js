import React from "react";
import cons from "./consultant.module.css";
import girl from "../../../component/images/girl.png";
import girrl from "../../../component/images/girl2.png";

export default function Conslutant() {
  return (
    <div className={cons.main_container}>
      <div className={cons.left_container}>
        <h1>
          Call now for a <br />
          <span>FREE</span> <br /><strong> one-on-one <br /> Conslutation!</strong>
        </h1>
        <img src={girl} alt="girl" />
      </div>
      <div className={cons.right_container}>
        <div className={cons.image_right}>
          <img src={girrl} alt="girl2" />
        </div>
        <div className={cons.right_sub}>
          <h1>
            Fitness <span>Trainer</span>
          </h1>
          <p>
            For more information on <br /> fitness programs call or text <br />
            us at <strong>568-898-8977</strong>
          </p>
          <h2>
            In Your Home <br /> Or at The GYM
          </h2>
        </div>
      </div>
    </div>
  );
}
