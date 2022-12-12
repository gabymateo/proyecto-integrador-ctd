import { set } from "date-fns";
import { React, useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "../../../node_modules/react-date-range/dist/styles.css"; // main css file
import "../../../node_modules/react-date-range/dist/theme/default.css"; // theme css file

export const Calendar = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);

    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  const [openDate, setOpenDate] = useState(false);
  // {const [date, setDate] = useState([
  //   { startDate: new Date(), endDate: new Date(), key: "selection" },
  // ]);}
  // console.log(props.placeholder);
  return (
    <>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => props.setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        months={windowWidth < 550 ? 1 : 2}
        ranges={props.date}
        minDate={new Date()}
        showDateDisplay={false}
        rangeColors={["#FBC02D", "#FBC02D", "#FBC02D"]}
        className="date"
        direction="horizontal"
        disabledDates={props.disabledDates}
        
      />
    </>
  );
};
