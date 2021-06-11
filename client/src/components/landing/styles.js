import styled from "styled-components";

const Div = styled.div`
  width: 500px;
  margin-left: 30px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  color: #9a9a9d;
  font-size: 20px;
  text-align: center;
  .button {
    background-color: #9fe2bf;
    width: 80px;
    display: flex;
    justify-content: center;
    align-self: center;
    color: white;
    text-decoration: none;
    border-radius: 15px;
    &:hover {
      background-color: #94ceaf;
      color: #f3f3f3;
    }
  }
`;

export default Div;
