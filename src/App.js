import React, { useEffect, useState } from "react";
import { Cards, Charts, CountryPicker } from "./components/index";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaimage from "./external-content.duckduckgo.com.jpeg";

const App = () => {
  const [data, setData] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchingData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    fetchingData();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaimage} alt="Corona-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={data} country={country} />
    </div>
  );
};

export default App;
