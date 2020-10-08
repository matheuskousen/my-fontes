import styled from "styled-components";

export const Container = styled.main `
  background: var(--wrapper);
  .hero {
    background: var(--button);
    color: var(--wrapper);
    padding: 2rem;

    .container {
      h1,
      p {
        margin: 0;
        padding: 0;
      }
      h1 {
        font-size: 4em;
      }
      a {
        font-size: 1.6rem;
        margin-left: 0.39em;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 700 !important;
      }
    }
  }
  .results-thumb {
    height: 100%;
    padding: 2rem;
    img {
      width: 100%;
    }
  }
`;