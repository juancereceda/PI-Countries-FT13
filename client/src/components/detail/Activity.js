import React from "react";

function Activity({ name, duration, season, difficulty }) {
  let stars = [];
  for (let i = 1; i <= difficulty; i++) {
    stars.push(i);
  }
  return (
    <div>
      <h1>{name}</h1>
      <label>Duration: {duration}</label>
      <br />
      <label>Season: {season}</label>
      <div>
        <label>
          Difficulty
          {stars.map((el) => (
            <img
              src="https://image.flaticon.com/icons/png/512/1828/1828665.png"
              width="10"
              height="10"
            />
          ))}
        </label>
      </div>
    </div>
  );
}

export default Activity;
