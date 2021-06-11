import styled from "styled-components";

const Div = styled.div`
  display: flex;
  margin-top: 84px;
  .formContainer {
    background-color: #9fe2bf;
    padding-right: 1rem;
    margin-right: 3rem;
    margin-bottom: 3rem;
    color: gray;
    padding-top: 30px;
    padding-left: 1rem;
    .searchForm {
      display: flex;
      flex-direction: column;
      align-items: center;

      select {
        width: 100px;
      }

      select,
      input {
        background-color: #f8eded;
        color: gray;
      }

      label,
      button {
        margin: 3px;
      }

      input {
        height: 30px;
        margin-bottom: 30px;
      }
    }
  }
`;

export default Div;
