import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  display: flex;
  flex-direction: column;
  gap: 4rem;

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
      height: 3rem;
      margin-top: 1rem;
    }
  }

  @media(min-width: 1000px) {
    display: grid;
    grid-template-areas: 
      "name name name"
      "category price promotion"
      "colors details modelDetails"
      "description description description";
    grid-template-columns: 50% 22% 22%;
    align-items: center;
    
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

    .colors, .details, .modelDetails {
      height: 25rem;
      overflow-y: auto;
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
  }
`;