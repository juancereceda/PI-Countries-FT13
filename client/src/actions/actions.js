export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const ADD_ACTIVITY = "ADD_ACTIVITY";

export function getCountries(name, continent) {
  let route = "http://localhost:3001/countries?";
  if (name) {
    route += `name=${name}&`;
  }
  if (continent) {
    route += `continent=${continent}&`;
  }
  return function (dispatch) {
    fetch(route)
      .then((r) => r.json())
      .then((json) => dispatch({ type: GET_COUNTRIES, payload: json }));
  };
}
/* export function getCountryDetail() {}
export function addActivity() {} */
