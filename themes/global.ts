import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  html {
    
    
  }
  body {
    overflow: hidden;
    border: 1px solid red;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: black;
    
  }

`;
export const transiton = (element = `all`, ms = 300) => `transition: ${element} ${ms}ms ease`;
export const boxShadow = () => `1px 1px 4px 4px rgba(0,0,0,0.2)`;
export default GlobalStyle;
