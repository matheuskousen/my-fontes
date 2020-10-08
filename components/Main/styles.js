import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  margin-top: 4em;
  min-height: 100vh;
  padding-bottom: 1em;
`;

export const Section = styled.section`
  .split {
    .infos {
      background: var(--wrapper);
      display: flex;
      margin: 1em 2em;

      a,
      p {
        background: var(--button);
        height: 37px;
        font-weight: 500;
        width: 130px;
        text-align: center;
        color: var(--wrapper);
        line-height: 37px;
        padding: 0 5px;
        text-transform: uppercase;
        font-size: 12px !important;
      }

      a {
        margin-left: 7px;
      }
    }

    .thumbnail {
      margin: 1em 2em;
    }
  }
`;
