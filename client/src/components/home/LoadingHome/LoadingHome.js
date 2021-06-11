import React from "react";
import skeleton from "../../../cardSkeleton.png";
import StyledSkeleton from "./styles";

function Loading({ countriesPerPage }) {
  let array = [];
  for (let i = 0; i < countriesPerPage; i++) {
    array.push(i);
  }
  return (
    <StyledSkeleton>
      {array.map((el) => {
        return <img src={skeleton} />;
      })}
    </StyledSkeleton>
  );
}

export default Loading;
