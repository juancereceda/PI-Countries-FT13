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

    box-shadow: 10px 10px 5px grey;
  }
  .detailContainer {
    width: 1100px;
    background-color: rgba(210, 210, 210, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space evenly;
  }
  .country {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;
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
      max-width: 280px;
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
