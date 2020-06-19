import { createGlobalStyle } from 'styled-components';
import bg from '../assets/bg.jpg';

export default createGlobalStyle`
  * {
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box;
   }
   *:focus {
     outline: 0;
   }
   html, body {
     height: 100%;
     background: #fff url(${bg}) no-repeat 70%;
    -webkit-font-smoothing: antialiased;
   }
   #root {
     min-height: 100%;
   }
   body {
     -webkit-font-smoothing: antialiased;
   }
   body, input, button {
     font: 15px  sans-serif;
   }
   a {
     text-decoration: none;
   }
   ul {
     list-style: none;
   }
   button {
     cursor: pointer;
   }
`;
