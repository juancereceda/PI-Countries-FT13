import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .countryName {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover .results:not(:hover) {
    filter: grayscale(100%);
  }

  .results {
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-bottom: 30px;
    margin-right: 35px;
    margin-left: 35px;
    width: 300px;
    border: 5px solid #9fe2bf;
    text-align: center;
    height: 270px;
    font-size: 10px;
    color: gray;
    box-shadow: 10px 10px 5px grey;
    &:hover {
      transform: scale(1.05);
      transition: 0.5s;
    }
    img {
      border: 2px solid #9fe2bf;
      width: 300px;
      height: 200px;
      object-fit: cover;
    }
  }
`;

export default Div;
