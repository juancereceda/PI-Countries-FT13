import React, { useEffect, useState } from "react";
import { getCountries } from "../../actions/actions";
import { connect } from "react-redux";
import { capitalize, sortByProp } from "./functions";

export function Home(props) {
  const [state, setState] = useState({
    name: null,
    continent: null,
    order: null,
    asc: true,
  });

  const order = state.order.toLowerCase();

  useEffect(() => {
    props.getCountries(state.name, state.continent);
    console.log(state);
  }, [state]);

  function handleNameChange(event) {
    event.target.value === ""
      ? setState({
          ...state,
          name: null,
        })
      : setState({
          ...state,
          name: event.target.value,
        });
  }
  function handleContinentChange(event) {
    event.target.value === "Continent"
      ? setState({
          ...state,
          continent: null,
        })
      : setState({
          ...state,
          continent: event.target.value,
        });
  }

  function handleSortChange(event) {
    event.target.value === "None"
      ? setState({
          ...state,
          order: null,
        })
      : setState({
          ...state,
          order: event.target.value,
        });
  }

  function sorted(array) {
    if (order) {
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

  function handleOrdChange(event) {
    var ord = event.target.value === "true" ? true : false;
    setState({
      ...state,
      asc: ord,
    });
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
      {props.countries.length < 1 ? (
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCountries: (name, continent) => dispatch(getCountries(name, continent)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
