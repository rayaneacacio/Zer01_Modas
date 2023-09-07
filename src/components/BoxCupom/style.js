import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BLACK};

  padding: 1rem;

  display: grid;
  grid-template-areas: "title button span_area" "subtitle button none";
  align-items: center;

  margin: 0.2rem 0 0.5rem 0;
  
  position: relative;

  h3, span {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  h3 {
    grid-area: title;
  }

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    grid-area: subtitle;
  }

  button {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    font-size: 1.4rem;
    width: 7.5rem;

    grid-area: button;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  }

  span {
    font-size: 0.8rem;
    grid-area: span_area;
    position: absolute;
    right: 0;
  }
`;