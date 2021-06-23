import styled from "styled-components";

const Div = styled.div`
position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  img {
    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }
`

export default Div;