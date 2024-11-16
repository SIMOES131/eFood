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

export const CardContainer = styled.div`
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
export const SidebarCard = styled.aside`
  background-color: ${cores.corFonteBotaoTag};
  z-index: 1;
  width: 360px;
  height: 100%;
  padding: 32px 8px 16px 8px;

  h2 {
    color: ${cores.corDeFundoCard};
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 16px;
  }

  label {
    color: ${cores.corDeFundoCard};
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 8px;
  }

  input {
    background-color: ${cores.corDeFundoCard};
    border: none;
    margin-bottom: 8px;
    height: 32px;
  }

  .error {
    border: 1px solid red;
    background-color: #ffe6e6;
  }
`

export const FistData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const SecondData = styled.div`
  display: flex;
  width: 100%;
  gap: 18px;
`

export const Complement = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`
export const SendOrBack = styled.div`
  display: flex;
  flex-direction: column;

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
    margin-bottom: 12px;
  }
`
