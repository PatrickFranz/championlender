import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
  //COLORS
  --primary: #005f4f;
  --secondary: #a58d4d;
}

body{
  box-sizing: border-box;
}

a{
  text-decoration: none;
  color: initial;
}

h1, h2, h3, h4, h5, h6{
  margin: 0;
}
`
