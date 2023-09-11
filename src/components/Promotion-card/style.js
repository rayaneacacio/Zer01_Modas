import styled from "styled-components";

export const Container = styled.button`
  position: relative;

  > img {
    width: 15rem;
    height: 21rem;
  }

  > div {
    background: rgba(0, 0, 0, 0.85);
    color: ${({ theme }) => theme.COLORS.WHITE};

    width: 15rem;
    height: 6rem;

    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 0.5rem;

    h2 {
      font-size: 1.4rem;
      white-space: nowrap;
    }
  }
`;