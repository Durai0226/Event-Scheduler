import React, { useState } from "react";
import "../Styles/model.css";
import Close from "../assets/Close.svg";
import DateTimePicker from "../libs/datePicker";
const AddPeriod = ({ setOpenModal, onSelectedData, onColor }) => {
  const handleModalClose = () => {
    setOpenModal(false); // Close the modal manually
  };

  return (
    <div className="modelBackground">
      <div className="modelContainer">
        {" "}
        <div className="Logo1">
          <div className="contain">
            <span className="text1">Add Period</span>
          </div>
          <div className="close" onClick={handleModalClose}>
            <img src={Close} alt="close" />
          </div>
        </div>
        <DateTimePicker
          onSelectedData={onSelectedData}
          onClose={handleModalClose}
          onColor={onColor}
        ></DateTimePicker>
      </div>
    </div>
  );
};

export default AddPeriod;
