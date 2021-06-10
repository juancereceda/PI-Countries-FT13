import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;

  .results {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    margin: 3px;
    width: 400px;
    padding-top: 20px;
    border: 5px solid #9fe2bf;
    text-align: center;
    height: 300px;
    border-radius: 100px;
    img {
      max-height: 300px;
      max-width: 380px;
    }
    &:hover {
      width: 520px;
      height: 405px;
    }
  }
`;

export default Div;
