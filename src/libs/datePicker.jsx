import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Styles/model.css";
import Plus from "../assets/Plus.svg";
import Tick from "../assets/tick.svg";

const DateTimePicker = ({ onSelectedData, onClose, onColor }) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [inputDate, setInputDate] = useState();
  const [selectedColor, setSelectedColor] = useState(null);
  const inputHandler = (e) => {
    setInputDate(e.target.value);
  };
  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  const handleDaySelection = (day) => {
    const updatedDays = [...selectedDays];
    if (updatedDays.includes(day)) {
      // Deselect the day
      const index = updatedDays.indexOf(day);
      updatedDays.splice(index, 1);
    } else {
      // Select the day
      updatedDays.push(day);
    }
    setSelectedDays(updatedDays);
  };

  const isDaySelected = (day) => {
    return selectedDays.includes(day);
  };

  const handleAddPeriod = () => {
    const newPeriod = {
      startTime,
      endTime,
      fromDate,
      toDate,
      days: selectedDays,
      title: inputDate,
      color: selectedColor,
    };
    setSelectedData(newPeriod);
    onSelectedData(newPeriod);

    onClose();
    // Do something with the selected data (e.g., send it to an API, update the state of a parent component, etc.)
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    onColor(color); // Pass the selected color to the parent component
  };

  return (
    <>
      <div className="input_container">
        <span className="name">Period Name</span>
        <input
          className="input"
          placeholder="Enter Period Name"
          typeof="text"
          value={inputDate}
          onChange={inputHandler}
        ></input>
      </div>
      <div className="time_container">
        <div>
          <h3 className="name"> Start Time</h3>
          <DatePicker
            className="time-picker-container"
            selected={startTime}
            onChange={handleStartTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
        <div>
          <h3 className="name"> End Time</h3>
          <DatePicker
            className="time-picker-container"
            selected={endTime}
            onChange={handleEndTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
      </div>
      <div className="days_container">
        <div>
          <span className="name">Repeat on days</span>
        </div>
        <div className="day_container">
          <span
            className={`days ${isDaySelected("Sunday") ? "selected" : ""}`}
            onClick={() => handleDaySelection("Sunday")}
          >
            S
          </span>
          <span
            className={`days ${isDaySelected("Monday") ? "selected" : ""}`}
            onClick={() => handleDaySelection("Monday")}
          >
            M
          </span>
          <span
            className={`days ${isDaySelected("Tuesday") ? "selected" : ""}`}
            onClick={() => handleDaySelection("Tuesday")}
          >
            T
          </span>
          <span
            className={`days ${isDaySelected("Wednesday") ? "selected" : ""}`}
            onClick={() => handleDaySelection("Wednesday")}
          >
            W
          </span>
          <span
            className={`days ${isDaySelected("Thursday") ? "selected" : ""}`}
            onClick={() => handleDaySelection("Thursday")}
          >
            T
          </span>
          <span
            className={`days ${isDaySelected("Friday") ? "selected" : ""}`}
            onClick={() => handleDaySelection("Friday")}
          >
            F
          </span>
          <span
            className={`days ${isDaySelected("Saturday") ? "selected" : ""}`}
            onClick={() => handleDaySelection("Saturday")}
          >
            S
          </span>
        </div>
      </div>
      <div className="time_container">
        <div>
          <h3 className="name">From</h3>
          <DatePicker
            className="time-picker-container"
            selected={fromDate}
            onChange={handleFromDateChange}
          />
        </div>
        <div>
          <h3 className="name">To</h3>
          <DatePicker
            className="time-picker-container"
            selected={toDate}
            onChange={handleToDateChange}
          />
        </div>
      </div>
      <div className="add_container">
        <div className="contain_color">
          <span
            className={`color_1 ${
              selectedColor === "color_1" ? "selected" : ""
            }`}
            onClick={() => handleColorSelection("color_1")}
          >
            {selectedColor === "color_1" && <img src={Tick} alt="Tick icon" />}
          </span>
          <span
            className={`color_2 ${
              selectedColor === "color_2" ? "selected" : ""
            }`}
            onClick={() => handleColorSelection("color_2")}
          >
            {selectedColor === "color_2" && <img src={Tick} alt="Tick icon" />}
          </span>
          <span
            className={`color_3 ${
              selectedColor === "color_3" ? "selected" : ""
            }`}
            onClick={() => handleColorSelection("color_3")}
          >
            {selectedColor === "color_3" && <img src={Tick} alt="Tick icon" />}
          </span>
          <span
            className={`color_4 ${
              selectedColor === "color_4" ? "selected" : ""
            }`}
            onClick={() => handleColorSelection("color_4")}
          >
            {selectedColor === "color_4" && <img src={Tick} alt="Tick icon" />}
          </span>
        </div>
        <div className="Btn_container">
          <button className="Btn" onClick={handleAddPeriod}>
            <img src={Plus} alt="Plus icon" /> Add Period
          </button>
        </div>
      </div>
    </>
  );
};

export default DateTimePicker;
