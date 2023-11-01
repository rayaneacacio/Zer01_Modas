import styled from "styled-components";

export const Container = styled.div`
  white-space: nowrap;
  padding: 0.5rem 0;

  .title {
    text-transform: uppercase;
  }

  .title, p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;