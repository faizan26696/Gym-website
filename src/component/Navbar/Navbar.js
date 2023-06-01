import React, { useState } from "react";
import { Link } from "react-router-dom";
import nav from "./Navbar.module.css";
import { CgMenu, CgClose } from "react-icons/cg";
import logo from "../images/logo.png";
import CustomButton from "../custom/customButtons/CustomButton";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
      <nav className={nav.main}>
        <div className={nav.left}>
          <div className={nav.logogym}>
            <img className={nav.logo} src={logo} alt="logo" />
          </div>
        </div>
        <div className={`${show ? nav.Active_Links : nav.right} `}>
          <li className={nav.common}>
            <Link to="/home"> Home</Link>
          </li>
          <li className={nav.common}>
            <Link to="/about">About Us</Link>
          </li>
          <li className={nav.common}>
            <Link to="/classes">Classes</Link>
          </li>
          <li className={nav.common}>
            <Link to="/success">Success Story</Link>
          </li>
          <li className={nav.common}>
            <Link to="/contact">Contact</Link>
          </li>
          <div>
          <Link to="/"><CustomButton btntxt="Log In" style={nav.btnlog} /></Link>
          </div>
        </div>

        <div className={nav.mobile_navbar_btn}>
          <div>
            {show ? (
              <span className={nav.close} onClick={() => setShow(false)}>
                <CgClose />
              </span>
            ) : (
              <span className={nav.menu} onClick={() => setShow(true)}>
                <CgMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
  );
}
