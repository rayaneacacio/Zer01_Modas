import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  display: flex;
  flex-direction: column;
  gap: 4rem;

  > div, > label {
    position: relative;
  }

  > div > p {
    font-size: 1.6rem;
    margin: 1rem 0;
  }

  > label {
    font-size: 1.6rem;;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  }

  .label_select {
    padding-bottom: 2rem;
  }

  select {
    width: 35%;
    margin-left: 1rem;
    cursor: pointer;
  }

  .tags {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .textarea {
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    textarea {
      font-size: 1.6rem;
      width: 100%;
      height: 7rem;
      margin-top: 1rem;
    }
  }

  > button, .buttons > button {
    background: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1rem;
    justify-self: end;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 2rem;

    > button {
      width: 50%;
    }
      
    > button:last-of-type {
      background: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }

  @media(min-width: 1000px) {
    display: grid;
    grid-template-areas: 
      "name name name"
      "description description description"
      "category price promotion"
      "colors details modelDetails"
      "none button button";
    grid-template-columns: 50% 22% 22%;
    align-items: center;
    row-gap: 4rem;
    
    > div:first-of-type {
      grid-area: name;
    }

    #inputPrice {
      grid-area: price;
    }

    #inputPromotion {
      grid-area: promotion;
    }

    .label_select {
      margin-top: 3.3rem;
    }

    #categoryLabel {
      grid-area: category;
    }

    .colors {
      grid-area: colors;
    }

    .details {
      grid-area: details;
    }

    .modelDetails {
      grid-area: modelDetails;
    }

    .tags {
      height: 20rem;
      overflow-y: auto;
      align-self: self-start;
    }

    .details > div, .modelDetails > div {
      gap: 4rem;
    }

    .textarea {
      grid-area: description;
      font-size: 1.7rem;

      textarea {
        font-size: 1.7rem;
      }
    }
    
    > label, > div > p {
      font-size: 1.7rem;
    }

    > button, .buttons {
      grid-area: button;
    }

    > button {
      width: 50%;
    }
  }
`;