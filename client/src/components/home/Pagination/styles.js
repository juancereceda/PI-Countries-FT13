import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  button {
    border-radius: 100%;
    padding: 10px;
    margin: 2px;
    color: gray;
    background-color: #9fe2bf;
    &:hover,
    &:active {
      background-color: gray;
      color: #9fe2bf;
    }
  }
`;

export default Nav;
