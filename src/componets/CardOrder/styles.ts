import styled from 'styled-components'

import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #000;
  opacity: 0.7;
`

export const OrderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 5;

  &.is-open {
    display: flex;
  }
`
export const SidebarOrder = styled.aside`
  background-color: ${cores.corFonteBotaoTag};
  z-index: 1;
  width: 360px;
  height: 100%;
  padding: 32px 8px 16px 8px;

  button {
    background-color: ${cores.corDeFundoCard};
    color: ${cores.corFonteBotaoTag};
    width: 100%;
    border: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    padding: 4px 4px;
    margin-top: 24px;
  }
`

export const Order = styled.div`
  h2 {
    color: ${cores.corDeFundoCard};
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 16px;
  }

  p {
    color: ${cores.corDeFundoCard};
    font-size: 14px;
    line-height: 22px;
  }
`
