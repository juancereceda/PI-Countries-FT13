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
    img {
      &:hover {
        transform: scale(1.1);
        transition: 0.5s;
      }
    }
  }
`;

export default Div;
