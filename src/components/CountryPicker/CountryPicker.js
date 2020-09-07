import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api/";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    const fetchedCountries = async () => {
      setCountryData(await fetchCountries());
    };
    fetchedCountries();
  }, [setCountryData]);
  console.log(countryData);
  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          onChange={(event) => handleCountryChange(event.target.value)}
        >
          <option value="">Global</option>
          {countryData.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
