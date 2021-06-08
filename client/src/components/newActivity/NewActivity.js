import React, { useEffect, useState } from "react";
import { getCountries } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

function NewActivity() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [countriesActivities, setCountriesActivies] = useState([]);
  const [country, setCountry] = useState();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  function handleCountry(event) {
    setCountry(countries.find((el) => el.name === event.target.value));
  }

  function handleCountryAdd(e) {
    e.preventDefault();
    setCountriesActivies([...countriesActivities, country]);
    setCountry();
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Name of the activity..." />
        <br />
        <label>
          <input type="number" placeholder="Duration..." />
          Minutes
        </label>
        <br />
        <select>
          <option>Difficulty</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <select>
          <option>Season</option>
          <option>Summer</option>
          <option>Winter</option>
          <option>Spring</option>
          <option>Autumn</option>
        </select>
        <input
          type="text"
          list="data"
          placeholder="Select country..."
          onChange={(e) => handleCountry(e)}
        />
        <datalist id="data">
          {countries &&
            countries
              .filter((el) => !countriesActivities.includes(el))
              .sort((a, b) => {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              })
              .map((country) => {
                return <option key={country.id} value={country.name} />;
              })}
        </datalist>
        <button onClick={(e) => handleCountryAdd(e)}>Add</button>
        <br />
        <button type="submit">Add Activity</button>
      </form>
      {countriesActivities && countriesActivities.map((el) => {})}
    </div>
  );
}

export default NewActivity;
