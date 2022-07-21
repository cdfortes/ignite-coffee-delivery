import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
  }

  a{
    text-decoration: none ;
    cursor:pointer ;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${(props) => props.theme.backgroud};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  header{
    font-family: ${(props) => props.theme.fontHeader['font-family']};
  }
`
