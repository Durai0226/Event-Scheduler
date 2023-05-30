import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const Event = ({ selectedData, selectedColor }) => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor =
      isSelected && selectedData && event.title === selectedData.title
        ? selectedColor
        : "";
    console.log(event, "in color");
    return {
      style: {
        color: "#000000",
        backgroundColor:
          event.color == "color_1"
            ? "#F8EBF1"
            : event.color == "color_2"
            ? "#E9E8FD"
            : event.color == "color_3"
            ? "#FFFBDA"
            : event.color == "color_4"
            ? "#CFFFF1"
            : "blue",
      },
    };
  };
  console.log(selectedColor);
  const generateEvents = () => {
    if (!selectedData) {
      return []; // No selected data, return an empty array
    }

    // Generate events based on the selected data
    // const { startTime, endTime, fromDate, toDate, days, title } = selectedData;
    const events = [];
    console.log(selectedData, "in sdds");
    for (let ev of selectedData) {
      const currentDate = moment(ev.fromDate);
      const endDate = moment(ev.toDate);

      while (currentDate.isSameOrBefore(endDate)) {
        if (ev.days.includes(currentDate.format("dddd"))) {
          const startDateTime = moment(currentDate).set({
            hour: ev.startTime.getHours(),
            minute: ev.startTime.getMinutes(),
          });
          const endDateTime = moment(currentDate).set({
            hour: ev.endTime.getHours(),
            minute: ev.endTime.getMinutes(),
          });

          events.push({
            start: startDateTime.toDate(),
            end: endDateTime.toDate(),
            title: ev.title,
            color: ev.color,
          });
        }
        currentDate.add(1, "day");
      }
    }

    return events;
  };

  return (
    <div style={{ paddingBottom: "5rem", marginTop: "3rem" }}>
      <Calendar
        localizer={localizer}
        events={generateEvents()}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter} // Set the eventStyleGetter prop
      />
    </div>
  );
};

export default Event;
