import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 6rem;

  border-bottom: 1px solid;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 11.4rem;

  > :first-child {
    padding-left: 2rem;
  }

  button {
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-size: 1.5rem;
  }
`;