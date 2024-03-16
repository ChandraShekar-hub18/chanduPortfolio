import styled from "styled-components";

export const StyledImg = styled.img`
  /* max-width: 50%; */
  max-width: 50%;
  height: auto;

  max-width: ${(props) => (props.size ? `${props.size}rem` : "50%")};
  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;
