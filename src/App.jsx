import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header.jsx";
import Planing from "./components/planing";
import Event from "./components/Event";

function App() {
  const [selectedData, setSelectedData] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };
  const handleSelectedData = (data) => {
    setSelectedData((prevData) => [...prevData, data]);
  };
  useEffect(() => {
    console.log(selectedData, "in change");
  }, [selectedData]);
  return (
    <>
      <Header></Header>
      <Planing
        onSelectedData={handleSelectedData}
        onColorSelection={handleColorSelection}
      ></Planing>
      <Event selectedData={selectedData} selectedColor={selectedColor} />
    </>
  );
}

export default App;
