import styled from "styled-components";

const Div = styled.div`
  margin-top: 200px;
  width: 500px;
  margin-left: 30px;
  .contactDiv {
    a {
      color: rgb(10, 10, 10);
      text-decoration: none;
    }
    .tag {
      &:hover {
        transform: scale(1.05);
        transition: 0.5s;
      }
    }
    .contactInfo {
      width: fit-content;
      img {
        margin-top: 14px;
        margin-right: 7px;
      }
      display: flex;
    }
  }
`;

export default Div;
