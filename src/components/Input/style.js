import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  width: 100%;
  height: 6rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};

  h3 {
    font-weight: 400;
  }

  > input {
    width: 100%;
    padding: 1rem 0;
  }
`;