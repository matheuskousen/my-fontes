import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline: 0;
    &:focus {
    outline: 0
  }
}
html,body{
    -webkit-font-smoothing: antialiased !important;
}
body{
    font-family: 'Lato', sans-serif;
    font-size:16px;
}
button,input{
    font-family: 'Lato', sans-serif;
}
a{
    text-decoration:none;
}
ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
