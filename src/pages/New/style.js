import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Main = styled.main`
  margin-top: 11rem;
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.COLORS.PURPLE};
    margin: 3rem 5rem;
  }

  > div {
    margin: 0 5rem;
  }

  @media(min-width: 1000px) {
    height: calc(100% - 15rem);
    margin-top: 15rem;

    > h3 {
      font-size: 2rem;
      margin-left: 10rem;
    }

    > div {
      margin: 0 15rem 0 26rem;
    }
  }
  
  @media(min-width: 1400px) {
    > h3 {
      margin-left: 26rem;
    }
  }
`;