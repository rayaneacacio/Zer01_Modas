import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  position: relative;

  .emptyBox {
    height: 19.3rem;
  }

  > main {
    height: 100%;
    overflow: auto;
  }

  .section_promotion {
    display: grid;
    grid-template-areas:
        "title_section title_section"
        "card1 card2"
        "card3 none";
    justify-content: center;
    gap: 0.5rem 3.5rem;

    section {
      grid-area: title_section;
    }
  }

  .section_novelty {
    display: grid;
    /* grid-template-areas:
      "title_section title_section title_section"
      "main card2 card3"
      "main card4 card5";
    column-gap: 5rem;
    row-gap: 3rem; */

    grid-template-areas:
        "title_section title_section title_section"
        "main main card2"
        "card3 card4 card5";
    align-items: end;
    justify-content: center;
    column-gap: 2rem;
    row-gap: 3rem;

    > :first-child {
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
    height: 50rem;
  }

  .section_promotion, .section_novelty, .section_extra {
    margin-bottom: 3rem;
  }
`;