import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  .list {
    margin: 0;
    padding: 0;
    list-style: none;
    flex-flow: row;
  }
  button {
    border-radius: 100%;
    padding: 10px;
    margin: 2px;
    color: gray;
    background-color: #9fe2bf;
    font-family: "Questrial", sans-serif;
    &:hover,
    &:active {
      background-color: gray;
      color: #9fe2bf;
    }
  }
`;

export default Nav;
