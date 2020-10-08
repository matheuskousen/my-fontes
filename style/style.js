import {
  createGlobalStyle
} from "styled-components";

export const GlobalStyle = createGlobalStyle `
@font-face {
  font-family: 'Ailerons-Typeface';
  src: url("/assets/fonts/Ailerons-Typeface.otf");
}
html {

:root{
    font-size:60%;

    --button:#101010;
    --wrapper:#f2eeb3;

  --fontTitle:"Ailerons-Typeface";
--geraltext: 'Josefin Sans';

  
}

*{
  box-sizing:border-box;
}


  line-height: 1.15;
  -webkit-text-size-adjust: 100%; }

  body {
  margin: 0;
  padding: 0;
  background: var(--wrapper);

  font-weight: normal;
  line-height: 1.5;
  font-weight:500;
  font-family:var(--geraltext) !important;
  color: #0a0a0a;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

img {
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  -ms-interpolation-mode: bicubic; }


  a {
  background-color: transparent; text-decoration:none }


  div,
dl,
dt,
dd,
ul,
span,
button,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;

  font-weight:300 !important;
   }

p {
  margin-bottom: 0rem;
  font-size: inherit;
  line-height: 1.6;

  text-rendering: optimizeLegibility; }



button,input,p ,a{
  font-family:var(--geraltext) !important;
  font-weight:500;
}
em,
i {
  font-style: italic;
  line-height: inherit; }

strong,
b {
  font-weight: bold;
  line-height: inherit; }

small {
  font-size: 80%;
  line-height: inherit; }

h1, .h1,
h2, .h2,
h3, .h3,
h4, .h4,
h5, .h5,
h6, .h6 {
  font-family:"Ailerons-Typeface" !important;
  font-style: normal;
  font-weight: normal;
  color: inherit;
  text-rendering: optimizeLegibility; }
  h1 small, .h1 small,
  h2 small, .h2 small,
  h3 small, .h3 small,
  h4 small, .h4 small,
  h5 small, .h5 small,
  h6 small, .h6 small {
    line-height: 0;
    color: #cacaca; }

h1, .h1 {
  font-size: 1.5rem;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0.5rem; }

h2, .h2 {
  font-size: 1.25rem;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0.5rem; }

h3, .h3 {
  font-size: 1.1875rem;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0.5rem; }

h4, .h4 {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0.5rem; }

h5, .h5 {
  font-size: 1.0625rem;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0.5rem; }

h6, .h6 {
  font-size: 1rem;
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 0.5rem; }

@media print, screen and (min-width: 40em) {
  h1, .h1 {
    font-size: 3rem; }
  h2, .h2 {
    font-size: 2.5rem; }
  h3, .h3 {
    font-size: 1.9375rem; }
  h4, .h4 {
    font-size: 1.5625rem; }
  h5, .h5 {
    font-size: 1.25rem; }
  h6, .h6 {
    font-size: 1rem; } }

a {
  line-height: inherit;
  color: var(--wrapper);
  text-decoration: none;
  cursor: pointer; }
  a:hover, a:focus {
    color: #1468a0; }
  a img {
    border: 0; }



    .welcome{
      width:100%;
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      position:relative;
      overflow: hidden;

.logo{
  width:100px;
  position:relative;
  margin-bottom:2em;
 
 
}
      h1{
        position:static;
        font-size: 5rem;
    font-size: clamp(4rem, calc(5vw + 1rem), 5.5rem);
    text-align:center;

      }
    }

    
`;