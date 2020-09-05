import React, { useEffect, useState } from "react";
import { Cards, Charts, CountryPicker } from "./components/index";
import styles from "./App.module.css";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchingData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    fetchingData();
  }, []);
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <Charts />
      <CountryPicker />
    </div>
  );
};

export default App;
