import React, { useEffect, useState } from "react";
import {
  getCountries,
  addActivity,
  getActivities,
} from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import StyledForm from "./styles";

function NewActivity() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const [name, setName] = useState();
  const [difficulty, setDifficulty] = useState();
  const [duration, setDuration] = useState();
  const [season, setSeason] = useState();
  const [countriesActivities, setCountriesActivies] = useState([]);
  const [country, setCountry] = useState();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);

  function handleCountry(event) {
    setCountry(countries.find((el) => el.name === event.target.value));
  }

  function handleCountryAdd(e) {
    e.preventDefault();
    if (country) {
      setCountriesActivies([...countriesActivities, country]);
    }
    setCountry();
    let input = document.getElementById("dataInput");
    input.value = "";
  }

  function handleName(event) {
    setName(event.target.value);
  }
  function handleDuration(event) {
    setDuration(event.target.value);
  }
  function handleDifficulty(event) {
    let dif = event.target.value;
    setDifficulty(dif === "Difficulty" ? null : dif);
  }
  function handleSeason(event) {
    let seas = event.target.value;
    setSeason(seas === "Season" ? null : seas);
  }

  function removeCountry(country) {
    setCountriesActivies(countriesActivities.filter((el) => el !== country));
  }

  function handleSubmit(event) {
    if (activities.find((el) => el.name === name)) {
      event.preventDefault();
      return alert("An activity with that name already exists");
    }
    if (
      name &&
      countriesActivities.length > 0 &&
      difficulty &&
      duration &&
      season
    ) {
      addActivity(
        name,
        difficulty,
        duration,
        season,
        countriesActivities.map((el) => el.id)
      );
      alert("Tourism activity added succesfully!");
    } else {
      event.preventDefault();
      alert("You are missing something...");
    }
  }

  return (
    <StyledForm>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Add activity</h1>
        <input
          type="text"
          placeholder="Name of the activity..."
          onChange={(e) => handleName(e)}
        />
        <div>
          <label>
            <input
              type="number"
              placeholder="Duration..."
              onChange={(e) => handleDuration(e)}
            />
            <span className="minutes"> Minutes</span>
          </label>
          <br />
          <select onChange={(e) => handleDifficulty(e)}>
            <option>Difficulty</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select onChange={(e) => handleSeason(e)}>
            <option>Season</option>
            <option>Summer</option>
            <option>Winter</option>
            <option>Spring</option>
            <option>Autumn</option>
          </select>
        </div>
        <input
          type="text"
          list="data"
          id="dataInput"
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
        <button className="add" onClick={(e) => handleCountryAdd(e)}>
          +
        </button>
        <br />
        <button className="submitBtn" type="submit">
          Add Activity
        </button>
      </form>
      <div className="countriesCnt">
        {countriesActivities &&
          countriesActivities.map((el) => {
            return (
              <div className="countryDiv">
                <span>{el.name} |</span>
                <button className="removeBtn" onClick={() => removeCountry(el)}>
                  X
                </button>
              </div>
            );
          })}
      </div>
    </StyledForm>
  );
}

export default NewActivity;
