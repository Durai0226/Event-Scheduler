import React, { useState } from "react";
import Search from "../assets/Search_1.svg";
import "../Styles/header.css";
import Plus from "../assets/Plus.svg";
import Right from "../assets/Right.svg";
import Left from "../assets/Left.svg";
import AddPeriod from "./addPeriod";
const Planing = ({ onSelectedData, onColorSelection }) => {
  const [openModel, setOpenModel] = useState(false);

  return (
    <>
      {openModel && (
        <AddPeriod
          onSelectedData={onSelectedData}
          onColor={onColorSelection}
          setOpenModal={setOpenModel}
        ></AddPeriod>
      )}
      <div className="plan_container">
        <div className="select_planing">
          <span className="plan_text">Project Planning</span>
          <span className="plan_text">Weekly Planning</span>
          <span className="plan_text">Planning Insights</span>
        </div>
        <div className="search_container">
          <div className="input_container">
            <input
              className="input_text"
              placeholder="Search for projects"
              type="text"
            ></input>
            <div className="search">
              {" "}
              <img src={Search}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="period_container">
        <div className="date_container">
          <span className="date">April 10-17</span>
          <span className="day">
            <img src={Left}></img>Today<img src={Right}></img>
          </span>
        </div>
        <div className="Btn_container">
          <button
            className="Btn"
            onClick={(e) => {
              e.preventDefault();
              setOpenModel(true);
            }}
          >
            <img src={Plus}></img> Add Period
          </button>
        </div>
      </div>
    </>
  );
};

export default Planing;
