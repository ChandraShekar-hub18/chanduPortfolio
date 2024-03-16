import styled from "styled-components";

export const StyledIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem auto;
  gap: 2rem;
  line-height: 0;
  row-gap: 0;
  list-style: none;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
