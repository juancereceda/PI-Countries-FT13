import React from "react";

function Pagination({ countriesPerPage, totalCountries, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((el) => {
            return <button onClick={() => paginate(el)}>{el}</button>;
          })}
      </ul>
    </nav>
  );
}

export default Pagination;
