import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBar = styled.footer`
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

export const P = styled.p`
  font-size: 10px;
  color: ${cores.laranjaEscuro};
  padding-top: 110px;
  padding-bottom: 40px;
  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
`
export const SocialMedia = styled.div`
  margin-top: 32px;
  margin-bottom: 50px;
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`
export const SocialMediaImage = styled.img`
  margin-right: 8px;
`
