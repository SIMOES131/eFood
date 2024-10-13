import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBar = styled.footer`
  background-color: ${cores.corCabecalhoRodape};
  padding-top: 64px;
  padding-bottom: 40px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Corrigido aqui */

  @media (max-width: 1024px) {
    width: 100%;
  }

  a {
    color: ${cores.corFonteBotaoTag};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }
`

export const P = styled.p`
  font-size: 10px;
  color: ${cores.corFonteBotaoTag};
  padding-top: 110px;
  padding-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`

export const Logo = styled.img`
  width: 125px;
`
export const SocialMedia = styled.div`
  margin-top: 32px;
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
export const SocialMediaImage = styled.img`
  margin-right: 8px;
`
