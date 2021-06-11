import styled from "styled-components";

const Div = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  width: 200px;
  height: 300px;
  background-color: #e6e6e6d0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #9fe2bf;
  border-radius: 20px;
  .iconedProp {
    img {
      margin-top: 22px;
      margin-right: 7px;
    }
    display: flex;
    margin-bottom: 10px;
  }
  &:hover {
    background-color: rgba(200, 200, 200, 0.8);
  }
  .cross {
    margin: 2px;
  }
`;

export default Div;
