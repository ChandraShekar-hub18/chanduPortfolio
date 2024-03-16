import styled from "styled-components";

export const StyledSection = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  width: 100%;
  padding: 10rem 20rem;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  gap: 5rem;
  background-color: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor}` : "white"};

  @media (min-width: 800px) and (max-width: 1000px) {
    flex-direction: column;
    gap: 1rem;
    padding: 10rem 8rem;
    img {
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 1rem;
    padding: 10rem 8rem;
    /* h1 {
      font-size: 4rem;
    } */
    p {
      font-size: medium;
    }
  }
`;
