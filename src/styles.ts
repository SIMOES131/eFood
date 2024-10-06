import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  preta: '#111',
  cinza: '#333',
  verde: '#10ACB4',
  cinzaClaro: '#A3A3A3',
  laranjaEscuro: ' #E66767',
  laranjaClaro: '#ffebd9',
  corDeFundo: '#fff8f2'
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
  padding-top: 80px;

  .container {
  width: 1024px;
  margin-left: 171px;
  }
}
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
