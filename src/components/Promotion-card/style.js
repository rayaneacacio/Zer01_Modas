import styled from "styled-components";

export const Container = styled.button`
  position: relative;
  > img {
    width: 14rem;
    height: 20rem;
  }

  > div {
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 14rem;
    height: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0.5rem;

    h2 {
      font-size: 1.3rem;
      white-space: nowrap;
    }
  }

  @media(min-width: 1000px) {
    > img {
      width: 26rem;
      height: 37rem;
    }

    > div {
      width: 26rem;
      
      h2 {
        font-size: 1.8rem;
      }
    }
  }
`;