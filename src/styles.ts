import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  corFonteBotaoTag: ' #E66767',
  laranjaClaro: '#ffffff',
  corCabecalhoRodape: '#FFEBD9',
  corDeFundoCard: '#ffffff',
  corDeFundo: '#FFF8F2'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
list-style: none;
text-decoration: none;
}

body {
  background-color: ${cores.corDeFundo};
  padding-top: 0px;
  padding-left: 0px;

  .container {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
  max-width: 80%;
  }
  }
}
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`
