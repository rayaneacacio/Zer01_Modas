import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.BLACK};
  width: ${({ $promotion }) => $promotion ? "18rem" : "17rem"};
  position: relative;

  > button {
    background: none;
    position: absolute;
    bottom: 3.5rem;
    right: 0;
  }

  > img {
    width: ${({ $promotion }) => $promotion ? "18rem" : "17rem"};
    height: ${({ $promotion }) => $promotion ? "20rem" : "18rem"};
    object-fit: cover;
  }

  > div {
    display: flex;
  }

  #promotion {
    text-decoration: line-through;
    width: 10rem;
  }

  #price {
    color: ${({ theme, $promotion }) => $promotion && theme.COLORS.PURPLE};
    font-size: 1.4rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.3rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: initial;
  }
`;