import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;

  .results {
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-bottom: 30px;
    margin-right: 25px;

    width: 300px;
    border: 5px solid #9fe2bf;
    text-align: center;
    height: 270px;
    font-size: 10px;
    color: gray;
    img {
      border: 2px solid #9fe2bf;
      width: 300px;
      height: 200px;
      object-fit: cover;
    }
  }
  &:hover .result:not(:hover) {
    filter: grayscale(100%);
  }
`;

export default Div;
