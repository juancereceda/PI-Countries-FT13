import styled from "styled-components";

const Div = styled.div`
  margin-top: 200px;
  margin-left: 30px;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #444444;
  a {
    color: #444444;
  }
  .pern {
    display: flex;
    justify-content: space-evenly;
    &:hover .pernIcon:not(:hover) {
      filter: grayscale(100%);
    }
  }
`;

export default Div;
