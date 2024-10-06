import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.laranjaClaro};
  padding-top: 64px;
  padding-bottom: 40px;
  margin-bottom: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Corrigido aqui */

  a {
    color: ${cores.laranjaEscuro};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: space-between; /* Para espaçamento simétrico */
  align-items: center;
  margin-right: 171px;
  width: 100%; /* Ocupar a largura total para distribuir os itens */
`

export const LinkItem = styled.li`
  margin-right: 0; /* Corrigido aqui */
`

export const Titulo = styled.h1`
  font-size: 36px;
  color: ${cores.laranjaEscuro};
  padding-top: 110px;
  padding-bottom: 40px;
  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
`
