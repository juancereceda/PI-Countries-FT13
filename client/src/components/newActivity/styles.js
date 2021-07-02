import styled from "styled-components";

const div = styled.div`
  margin-top: 150px;
  margin-left: 120px;
  padding-bottom: 80px;
  margin-bottom: 50px;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  .addEditCnt {
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
    margin-right: 50px;
    img {
      &:hover {
        transform: scale(1.1);
        transition: 0.3s;
      }
    }
  }

  .cardContainer {
    display: flex;
  }

  input,
  datalist,
  select {
    font-family: "Questrial", sans-serif;
    margin-top: 10px;
    margin-right: 3px;
    border: 1px solid #9fe2bf;
    color: gray;
    height: 28px;
    width: 140px;
  }

  .add {
    margin-left: 3px;
    border-radius: 3px;
    background-color: #9fe2bf;
    color: gray;
    border: 1px solid gray;
    height: 32px;
    width: 32px;
    &:hover {
      background-color: #7eb799;
    }
  }
  .minutes {
    font-size: 15px;
  }
  .submitBtn {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #9fe2bf;
    border: 1px solid gray;
    height: 30px;
    border-radius: 3px;
    &:hover {
      background-color: #7eb799;
    }
  }

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 500px;
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
    width: 500px;
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
