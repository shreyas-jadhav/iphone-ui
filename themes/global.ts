import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

`;
export const transiton = (element = `all`, ms = 300) => `transition: ${element} ${ms}ms ease`;
export const boxShadow = () => `1px 1px 4px 4px rgba(0,0,0,0.2)`;
export default GlobalStyle;
