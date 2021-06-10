import React, { useEffect, useState } from "react";
import { getActivities, getCountries } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Countries from "./Countries/Countries";
import Pagination from "./Pagination/Pagination";
import Loading from "../loading/Loading";
import StyledHome from "./styles";

export function Home() {
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const [continent, setContinent] = useState(null);
  const [order, setOrder] = useState(null);
  const [asc, setAsc] = useState(true);
  const [activity, setActivity] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = sorted(countries).slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  useEffect(async () => {
    setLoading(true);
    await dispatch(getCountries(name, continent, activity));
    dispatch(getActivities());
    setLoading(false);
  }, [name, continent, activity]);

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
    setOrder(sort === "None" ? null : sort);
  }

  function handleOrdChange(event) {
    setAsc(event.target.value === "true" ? true : false);
  }

  function sorted(array) {
    if (order) {
      let ord = order.toLowerCase();
      return array.sort(function (a, b) {
        if (a[ord] > b[ord]) {
          return asc ? 1 : -1;
        }
        if (a[ord] < b[ord]) {
          return asc ? -1 : 1;
        }
        return 0;
      });
    }
    return array;
  }

  function renderPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <StyledHome>
      <div className="formContainer">
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
          <label>
            Search by name: <br />
            <input
              placeholder="Search..."
              autoComplete="off"
              value={name}
              type="text"
              onChange={(e) => handleNameChange(e)}
            ></input>
          </label>
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
            {activities
              ? activities.map((el) => {
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
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="resultsContainer">
          <Countries countries={currentCountries} />
          <Pagination
            countriesPerPage={countriesPerPage}
            totalCountries={countries.length}
            paginate={renderPage}
          />
        </div>
      )}
    </StyledHome>
  );
}
export default Home;
