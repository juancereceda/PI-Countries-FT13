import styled from "styled-components";
const Div = styled.div`
  margin-top: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  .detailedFlag {
    width: 390px;
    height: 250px;
    object-fit: cover;
  }

  .detailContainer {
    width: 1100px;
    background-color: rgba(210, 210, 210, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .country {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .activities {
    display: flex;
    flex-wrap: wrap;
  }

  .midCard {
    display: flex;
    width: 1100px;
    justify-content: space-evenly;
    .infoDiv {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .iconedDiv {
        img {
          margin-top: 22px;
          margin-right: 7px;
        }
        display: flex;
        margin-bottom: 10px;
      }
    }
  }
`;

export default Div;
