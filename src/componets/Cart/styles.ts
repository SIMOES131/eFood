import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.corFonteBotaoTag};
  z-index: 1;
  width: 360px;
  height: 100%;
  padding: 32px 8px 16px 8px;

  ${ButtonContainer} {
    background-color: ${cores.corDeFundoCard};
    color: ${cores.corFonteBotaoTag};
    width: 100%;
    border: none;
    cursor: pointer;
  }
`

export const Prices = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  color: ${cores.corDeFundo};
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`

export const CartItem = styled.li`
  width: 344px;
  height: 100px;
  display: flex;
  background-color: ${cores.corDeFundoCard};
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    heigth: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    color: ${cores.corFonteBotaoTag};
    line-height: 22px;
    font-weight: bold;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.corFonteBotaoTag};
    margin-top: 16px;
  }

  button {
    border: none;
    position: absolute;
    bottom: 8px;
    right: 0;
    background-color: ${cores.corDeFundoCard};
    cursor: pointer;

    img {
      width: 16px;
      heigth: 16px;
      background-color: ${cores.corDeFundoCard};
    }
  }
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ButtonContinuar = styled.button`
  background-color: ${cores.corDeFundoCard};
  color: ${cores.corFonteBotaoTag};
  width: 100%;
  border: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  padding: 4px 4px;
`
