import React, { useEffect, useState } from "react";
import {
  getActivities,
  getCountries,
  setAscDes,
  setOrder,
} from "../../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

function SearchForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const [continent, setContinent] = useState(null);
  const [order, setOrd] = useState(null);
  const [asc, setAsc] = useState(true);
  const [activity, setActivity] = useState(null);
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getCountries(name, continent, activity));
    dispatch(getActivities());
    dispatch(setOrder(order));
    dispatch(setAscDes(asc));
    console.log(asc);
  }, [name, continent, activity, order, asc]);

  function handleNameChange(event) {
    let name = event.target.value;
    setName(name);
  }
  function handleContinentChange(event) {
    let cont = event.target.value;
    setContinent(cont === "Continent" ? null : cont);
  }

  function handleActivityChange(event) {
    let act = event.target.value;
    setActivity(act === "Activity" ? null : act);
  }

  function handleSortChange(event) {
    let sort = event.target.value;
    setOrd(sort === "Order by" ? null : sort);
  }

  function handleOrdChange(event) {
    setAsc(event.target.value === "true" ? true : false);
  }

  return (
    <div className="formContainer">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label>
          <input
            placeholder="Search by name..."
            autoComplete="off"
            value={name}
            type="text"
            onChange={(e) => handleNameChange(e)}
          ></input>
        </label>
        <label>
          Filters <br />
          <select onChange={(e) => handleContinentChange(e)}>
            <option>Continent</option>
            <option>Americas</option>
            <option>Europe</option>
            <option>Oceania</option>
            <option>Asia</option>
            <option>Africa</option>
          </select>
          <br />
          <select onChange={(e) => handleActivityChange(e)}>
            <option>Activity</option>
            {activities
              ? activities.map((el) => {
                  return <option>{el.name}</option>;
                })
              : ""}
          </select>
        </label>
        <label>
          Order <br />
          <select onChange={(e) => handleSortChange(e)}>
            <option>Order by</option>
            <option>Name</option>
            <option>Population</option>
            <option>Area</option>
          </select>
          <div onChange={(e) => handleOrdChange(e)}>
            ↑
            <input type="radio" name="ascDes" value={true} />
            ↓
            <input type="radio" name="ascDes" value={false} />
          </div>
        </label>
      </form>
    </div>
  );
}

export default SearchForm;
