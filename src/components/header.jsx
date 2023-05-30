import React from "react";
import D_arrow from "../assets/D-arrow.svg";
import Alert from "../assets/Bell.svg";
import Doc from "../assets/Doc.svg";
import Edit from "../assets/Edit.svg";
import Search from "../assets/Search.svg";

import Avatar from "../assets/Avatar.svg";
import Plan from "../assets/Plan.svg";
import "../Styles/header.css";
function Header() {
  return (
    <div className="Container">
      <div className="header_Container">
        <div className="select_Container">
          <div className="Selector">
            <h4 className="heading">Educator</h4>
            <span className="select_name">Arthshala</span>
          </div>

          <div className="select_name_Container">
            <img src={D_arrow}></img>
          </div>
        </div>
        <div className="planing_container">
          <div className="planing">
            <img src={Plan}></img>
            <span className="heading_text">Planning</span>
          </div>
          <div className="planing">
            <img src={Edit}></img>
            <span className="heading_text">Documentation</span>
          </div>
          <div className="planing">
            <img src={Doc}></img>
            <span className="heading_text">Housekeeping</span>
          </div>
        </div>
        <div className="Avatar_container">
          <div className="Avatar">
            <img src={Search}></img>
            <img src={Alert}></img>
            <img src={Avatar}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
