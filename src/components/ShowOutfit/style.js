import styled from "styled-components";

export const Container = styled.div`
  width: 15rem;
  position: relative;

  /* transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  } */

  > button {
    background: none;
    position: absolute;
    bottom: 3.5rem;
    right: 0;
  }

  > img {
    width: 15rem;
    height: 15rem;
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
  }
`;