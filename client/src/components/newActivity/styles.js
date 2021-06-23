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
  .addEditCnt {
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
  }

  .addEditButton {
    width: 70px;
    height: 40px;
    color: rgb(40, 40, 40);
    font-family: "Questrial", sans-serif;
    font-weight: bold;
    background-color: #9fe2bf;
    border: 1px solid #686868;
    border-radius: 5px;
    &:hover {
      transform: scale(1.1);
    }
  }

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
  .minutes {
    font-size: 13px;
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

  #infoEdit {
    font-style: italic;
  }

  .backImage {
    &:hover {
      transform: scale(1.1);
    }
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
