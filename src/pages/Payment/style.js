import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  > nav {
    display: none;
  }

  button {
    font-size: 1.3rem;
  }

  dialog {
    background: rgba(8, 8, 8, 0.64);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 2;

    .body-modal-address > :first-child, form {
      transform: translateY(2rem);
      animation: toTop 0.3s forwards;
    }

    .body-modal-address > :first-child {
      background: ${({ theme }) => theme.COLORS.BLACK};
      height: 12rem;
      padding-top: 5rem;
      position: relative;

      h3 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: normal;
        text-align: center;
      }

      > button {
        background: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        position: absolute;
        top: 4.5rem;
        right: 2rem;
        border: none;
      }
    }

    > h3, form {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    form {
      background: white;
      padding: 3rem;
      padding-bottom: 10rem;
      display: flex;
      flex-direction: column;
      gap: 4rem;

      > div {
        position: relative ;
      }

      > button {
        background: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.WHITE};
        height: 3.5rem;
        margin-top: 2rem;
      }
    }
  }

  @media(min-width: 1000px) {
    > nav {
      display: flex;
      margin-top: 12rem;
    }

    .body-modal-address {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .body-modal-address > :first-child {
      width: 70rem;
      height: 7rem !important;
      padding-top: 3rem !important;

      > button {
        top: 2.5rem !important;
      }
    }

    .body-modal-address > form {
      width: 70rem;
      height: 60%;
      padding: 4.5rem 8rem;
      overflow: auto;
      display: grid;
      grid-template-areas:
        "addresse addresse addresse"
        "cep street number"
        "complement distrit state"
        "city landmark none"
        "button button button";
      column-gap: 4rem;
    	row-gap: 3rem;
      
      > div:first-of-type {
        grid-area: addresse;
      }

      > button {
        grid-area: button;
        margin-top: 4rem;
        height: 4rem;
      }
    }
  }

  @media(min-width: 1400px) {
    .body-modal-address > :first-child, .body-modal-address > form {
      width: 100rem;
    }
  }
`;

export const Main = styled.main`
  margin-top: 11rem;
  
  > div {
    margin: 0 3rem 2rem 3rem;

    > h3 {
      color: ${({ theme }) => theme.COLORS.PURPLE};
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .payment-methods {
    padding-top: 3rem;
  }

  .address {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > button {
      background: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.WHITE};
      height: 3rem;
    }
  }

  .address > h3, .items > h3 {
    font-weight: normal;
  }

  .items, .total {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div {
      display: flex;
      justify-content: space-between;

      > p:first-of-type {
        width: 15rem;
      }
    }
  }

  .total {
    font-weight: 500;
    border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    padding-top: 1rem;
  }

  #frete {
    color: ${({ theme }) => theme.COLORS.GREEN};
  }

  .boxAddresses {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
  }

  @media(min-width: 1000px) {
    height: calc(100% - 21rem);
    margin-top: 4rem;
    display: grid;
    grid-template-areas:
      "payment_methods pack"
      "footer footer";
    grid-template-columns: 1fr 1fr;
    column-gap: 10rem;
    font-size: 1.5rem;

    .payment-methods {
      grid-area: payment_methods;
      margin: 0 0 0 26rem;
    }

    .pack {
      grid-area: pack;
      padding-top: 3rem;
      margin: 0 30rem 0 0;
    }

    > div {
      gap: 3rem;

      > h3 {
        font-size: 1.8rem;
      }
    }

    .address, .items {
      gap: 2rem;

      h3 {
       font-size: 1.6rem; 
      }
    }

    .address > button {
      font-size: 1.5rem;
      height: 3.5rem;
    }

    .items > div > p:first-of-type {
      width: 20rem;
    }

    > footer {
      grid-area: footer;
    }
  }
  
  @media(min-width: 1400px) {
    .items > div > p:first-of-type {
      width: 30rem;
    }
  }
`;