import styled from "styled-components";

const div = styled.div`
  margin-top: 150px;
  margin-left: 50px;
  padding-bottom: 80px;
  margin-bottom: 50px;
  width: 500px;
  border-radius: 15px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  input,
  datalist,
  select {
    font-family: "Questrial", sans-serif;
    margin-top: 10px;
    border: 1px solid #9fe2bf;
    color: gray;
  }

  .add {
    margin-left: 3px;
    border-radius: 3px;
    background-color: #9fe2bf;
    color: gray;
    border: 1px solid gray;
    &:hover {
      background-color: #7eb799;
    }
  }
  .submitBtn {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #9fe2bf;
    border: 1px solid gray;
    height: 30px;
    border-radius: 8px;
    &:hover {
      background-color: #7eb799;
    }
  }

  form {
    margin-top: 20px;
  }

  .countriesCnt {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .countryDiv {
      margin-bottom: 5px;
      margin-right: 5px;
      background-color: #eff0f1;
      border: 1px solid #7eb799;
      button {
        background-color: #eff0f1;
        border: 0px;
        &:hover {
          background-color: #d7d7d7;
        }
      }
    }
  }
`;

export default div;
