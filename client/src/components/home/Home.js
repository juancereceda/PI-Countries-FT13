import React, { useEffect, useState } from "react";
import { getActivities, getCountries } from "../../actions/actions";
import { connect } from "react-redux";
import { capitalize } from "./functions";

export function Home(props) {
  const [state, setState] = useState({
    name: null,
    continent: null,
    order: null,
    asc: true,
    activity: null,
  });

  useEffect(() => {
    props.getCountries(state.name, state.continent, state.activity);
    props.getActivities();
    console.log(state.activity);
  }, [state]);

  function handleNameChange(event) {
    let name = event.target.value;
    setState({
      ...state,
      name: name === "" ? null : name,
    });
  }
  function handleContinentChange(event) {
    let continent = event.target.value;
    setState({
      ...state,
      continent: continent === "Continent" ? null : continent,
    });
  }

  function handleActivityChange(event) {
    let act = event.target.value;
    setState({
      ...state,
      activity: act === "Activity" ? null : act,
    });
  }

  function handleSortChange(event) {
    let sort = event.target.value;
    setState({
      ...state,
      order: sort === "None" ? null : sort,
    });
  }

  function handleOrdChange(event) {
    setState({
      ...state,
      asc: event.target.value === "true" ? true : false,
    });
  }

  function sorted(array) {
    if (state.order) {
      let order = state.order.toLowerCase();
      return array.sort(function (a, b) {
        if (a[order] > b[order]) {
          return state.asc ? 1 : -1;
        }
        if (a[order] < b[order]) {
          return state.asc ? -1 : 1;
        }
        return 0;
      });
    }
    return array;
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Search..."
          autoComplete="off"
          value={state.name}
          type="text"
          onChange={(e) => handleNameChange(e)}
        ></input>
        <label>Filter by: </label>
        <select onChange={(e) => handleContinentChange(e)}>
          <option>Continent</option>
          <option>Americas</option>
          <option>Europe</option>
          <option>Oceania</option>
          <option>Asia</option>
          <option>Africa</option>
        </select>
        <select onChange={(e) => handleActivityChange(e)}>
          <option>Activity</option>
          {props.activities
            ? props.activities.map((el) => {
                return <option>{el.name}</option>;
              })
            : ""}
        </select>
        <label>
          Order by
          <select onChange={(e) => handleSortChange(e)}>
            <option>None</option>
            <option>Name</option>
            <option>Population</option>
            <option>Area</option>
          </select>
        </label>
        <div onChange={(e) => handleOrdChange(e)}>
          <label>
            Asc
            <input type="radio" name="ascDes" value={true} />
          </label>
          <label>
            Des
            <input type="radio" name="ascDes" value={false} />
          </label>
        </div>
        <button>Search</button>
      </form>
      {sorted(props.countries).length < 1 ? (
        <h1>No countries found</h1>
      ) : (
        sorted(props.countries).map((el) => {
          return (
            <div key={el.id}>
              <h1>
                {capitalize(el.name)} ({el.id})
              </h1>
              <h3>{el.continent}</h3>
              <img src={el.flag} width="150" height="90" />
            </div>
          );
        })
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    countries: state.countries,
    activities: state.activities,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCountries: (name, continent, activity) =>
      dispatch(getCountries(name, continent, activity)),
    getActivities: () => dispatch(getActivities()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
