import React from "react";
import mrp from "./price.module.css";
import Pricing from "../../../component/Pricing Structure/Pricing";

export default function Price() {
  return (
    <div className={mrp.main_container}>
      <h4>OUR PLAN</h4>
      <h1>
        <span> Best </span> price options
      </h1>
      <div className={mrp.pricingmain}>
        <Pricing />
        <Pricing />
        <Pricing />
      </div>
    </div>
  );
}
