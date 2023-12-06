import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  
  > img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: none;
  }

  > h2 {
    font-size: 1.6rem;
    font-weight: 500;
    padding-top: 1rem;
  }

  @media(min-width: 700px) {
    width: 13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > img {
      display: block;
    }

    > h2 {
      text-align: center;
    }
  }
  
  @media(min-width: 1000px) {
    > img {
      width: 13rem;
      height: 13rem;
    }
  }
`;