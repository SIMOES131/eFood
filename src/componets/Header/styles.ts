import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.corCabecalhoRodape};
  padding-top: 64px;
  padding-bottom: 40px;
  margin-bottom: 80px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;

    margin-bottom: 40px;
    h1 {
      font-size: 25px;
      padding-bottom: 10px;
      padding-top: 30px;
    }
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
  justify-content: space-between;
  align-items: center;
  margin-right: 171px;
  width: 100%;
`

export const LinkItem = styled.li`
  margin-right: 0;
`

export const Titulo = styled.h1`
  font-size: 36px;
  line-height: 42px;
  color: ${cores.corFonteBotaoTag};
  padding-top: 110px;
  padding-bottom: 40px;
  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
`
