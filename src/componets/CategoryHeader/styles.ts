import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.corCabecalhoRodape};
  padding-top: 64px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    display: block;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
    margin-bottom: 40px;
  }

  a {
    color: ${cores.corFonteBotaoTag};
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

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`

export const LinkItem = styled.li`
  margin-right: 0; /* Corrigido aqui */

  a {
    cursor: pointer;
  }
`

export const Titulo = styled.h1`
  font-size: 36px;
  color: ${cores.corFonteBotaoTag};
  padding-top: 110px;
  padding-bottom: 40px;
  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
`

export const Image = styled.img`
  width: 100%;
  height: 280px;
  margin-top: 65px;
  @media (max-width: 768px) {
    height: 220px;
    margin-top: 80px;
  }
`

export const TopText = styled.div`
  position: absolute;
  top: 90px;
  left: 171px;
  font-size: 32px;
  color: ${cores.branca};
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 25px;
    padding-top: 50px;
  }
`

export const BottomText = styled.div`
  position: absolute;
  top: 270px; /* Ajuste conforme necessário */
  left: 171px;
  font-size: 32px;
  font-weight: bold;
  color: ${cores.branca};
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`
