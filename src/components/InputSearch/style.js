import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};

  width: 100%;
  height: 4.2rem;

  padding: 1.3rem 1.5rem 1.3rem 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;