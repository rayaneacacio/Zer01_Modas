import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .button-section-payment {
    background: none;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 1.6rem;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .make-payment {
    display: none;
    transform: translateY(-1rem);
    animation: toTop 0.2s forwards;
    flex-direction: column;
    gap: 2rem;

    > button {
      background: ${({ theme }) => theme.COLORS.BLUE};
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.4rem;
      height: 3rem;
    }
  }

  @media(min-width: 1000px) {
    font-size: 1.6rem;
    
    .make-payment {
      padding-top: 0.5rem;
      gap: 3rem;
      
       > button {
        font-size: 1.6rem;
        height: 3.7rem;
      }
    }
  }
`;