import styled from "styled-components";
import Wooden from "../../shutterstock_527479444.jpg";

const Div = styled.div`
  display: flex;
  background-color: #9fe2bf;
  border-radius: 20px;
  justify-content: space-evenly;
  height: 60px;
  margin: 12px;
  .list-item {
    color: white;
    text-decoration: none;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    &:hover {
      color: gray;
    }
  }
`;

export default Div;
