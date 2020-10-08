import styled from "styled-components";

export const Container = styled.header `
  width: 100%;

  padding-bottom: 3em;
`;

export const Content = styled.div `
  width: 100%;
  max-width: 642px;
  margin: 0 auto;

  .primary-title {
    text-align: center;
    padding: 1em 0;
    font-size: 5rem;
    font-size: clamp(4rem, calc(5vw + 1rem), 5.5rem);
  }

  .options {
    width: 100%;

    max-width: 565px;
    height: 30px;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    button {
      border-radius: none;
      background: var(--button);
      border: none;
      color: var(--wrapper);
      font-size: 18px;
      width: 100%;
      max-width: 109px;

      margin: 5px;

      height: 30px;
    }
  }

  .search {
    width: 100%;

    max-width: 565px;

    margin: 120px auto 0 auto;

    @media print, screen and (max-width: 40em) {
      margin: 120px auto 0 auto;
      height: 44px;
      padding: 0 15px;
      input,
      button {
        height: 35px !important;
      }

      button {
        margin-left: 13px !important;
      }
    }
    display: flex;
    justify-content: center;

    input {
      width: 100%;
      max-width: 100%;
      height: 57px;
      background: transparent;
      border: 1px solid var(--button);
      font-size: 18px;
    }

    button {
      background: var(--button);
      border: none;
      width: 100%;

      max-width: 84px;
      height: 57px;
      display: block;
      img {
        width: 20px;
        margin: 0 auto;
        height: 20px;

        display: block;
      }
    }
  }

  .results {
    width: 92%;
    max-width: calc(294px + 84px + 19px);
    margin: 10px auto;
    background: var(--button);
    color: var(--wrapper);
    font-size: 16px;
    padding: 1em;
    a{
      width:100%;
 
      display:flex;
      height:100%;
    }
  }
`;