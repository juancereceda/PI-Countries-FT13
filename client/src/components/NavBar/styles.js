import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  display: flex;
  background-color: #9fe2bf;
  border-radius: 20px;
  justify-content: space-evenly;
  height: 60px;
  width: 98%;
  top: 0;
  left: 0;
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
