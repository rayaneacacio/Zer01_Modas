import styled from "styled-components";

export const Container = styled.button`
  background: ${({ $background_color }) => $background_color};
  color: ${({ theme }) => theme.COLORS.BLACK};
  padding: 0.5rem 1rem;
`;