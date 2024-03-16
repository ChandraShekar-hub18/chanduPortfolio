import styled from "styled-components";

export const StyledRow = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  justify-content: ${(props) =>
    props.spaceBetween ? "space-between" : "unset"};
  align-items: ${(props) => (props.alignCenter ? "center" : "unset")};
  gap: ${(props) => (props.gap ? `${props.gap}rem` : "0rem")};
`;
