import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  position: relative;

  > main {
    margin-top: 11rem;
  }

  .section_promotion {
    display: grid;
    grid-template-areas:
        "title_section title_section"
        "card1 card2"
        "card3 none";
    justify-content: center;
    gap: 0.5rem 2rem;
    padding: 0 3rem;

    section {
      grid-area: title_section;
    }
  }

  .section_novelty {
    display: grid;
    grid-template-areas:
        "title_section title_section title_section"
        "main main card2"
        "card3 card4 card5";
    align-items: end;
    justify-content: center;
    column-gap: 2rem;
    row-gap: 3rem;

    > section {
      grid-area: title_section;
    }

    .main-card {
      grid-area: main;
    }

    .card2 {
      grid-area: card2;
    }

    .card3 {
      grid-area: card3;
    }

    .card4 {
      grid-area: card4;
    }

    .card5 {
      grid-area: card5;
    }
  }

  .section_extra {
    padding: 2rem;
  }

  .section_promotion, .section_novelty, .section_extra {
    margin-bottom: 3rem;
  }

  @media(min-width: 700px) {
    .section_promotion {
      grid-template-areas:
        "title_section title_section title_section"
        "card1 card2 card3";
    }

    .section_novelty {
      grid-template-areas:
        "title_section title_section title_section"
        "main card2 card3"
        "main card4 card5";
      column-gap: 4.5rem;
    }

    .section_extra {
      display: grid;
      grid-template-areas:
        "title_section title_section title_section"
        "card1 card2 card3";
      align-items: start;
      row-gap: 5rem;

      > section {
        grid-area: title_section;
      }

      .card1 {
        grid-area: card1;
      }

      .card2 {
        grid-area: card2;
      }

      .card13 {
        grid-area: card13;
      }

      .card4 {
        grid-area: card4;
      }
    }
  }

  @media(min-width: 1000px) {
    > main {
      margin-top: 11.9rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .section_promotion, .section_novelty, .section_extra {
      margin-bottom: 6rem;
    }

    .section_promotion {
      column-gap: 10rem;
    }

    .section_novelty {
      align-items: start;
    }

    .section_extra {
      justify-content: center;
      column-gap: 13rem;
    }

    footer {
      margin-top: 10rem;
    }
  }
`;

export const Aside = styled.aside`
  background: ${({ theme }) => theme.COLORS.BLACK};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 300;

  padding: 1.5rem;
  margin: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > span {
    font-size: 1.3rem;

    display: flex;
    gap: 0.5rem;
    grid-area: title;

    :first-child {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      font-weight: 500;
    }
  }

  @media(min-width: 1000px) {
    width: 111rem;

    > span {
      font-size: 2rem;
    }

    > p {
      font-size: 1.6rem;
    }
  }
`;