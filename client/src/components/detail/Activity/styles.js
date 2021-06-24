import styled from "styled-components";

const Div = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 10px;
  width: 200px;
  height: 300px;
  background-color: #e6e6e6d0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #9fe2bf;
  border-radius: 10px;
  box-shadow: 10px 10px 5px grey;
  #nombre {
    text-align: center;
  }
  .infoDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .iconedProp {
    img {
      margin-top: 22px;
      margin-right: 7px;
    }
    display: flex;
    margin-bottom: -10px;
  }
  &:hover {
    transform: scale(1.05);
  }
  .cross {
    margin: 2px;
  }
`;

export default Div;
