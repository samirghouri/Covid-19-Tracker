//importing the react and react hooks
import React, { useState, useEffect } from "react";
//importing the api function from the api folder
import { fetchDailyData } from "../../api";
// Getting the line and bar componenets from the chartjs files
import { Line, Bar } from "react-chartjs-2";
// importing styles from the modules
import styles from "Charts.modules.css";

const Charts = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);
  console.log(dailyData);

  const LineChart = dailyData[0] ? (
    <Line
      data={{
        labels: "",
        datasets: [{}, {}],
      }}
    />
  ) : null;
  return <div>Charts</div>;
};

export default Charts;
