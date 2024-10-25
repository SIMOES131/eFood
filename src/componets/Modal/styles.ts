import styled from 'styled-components'
import { cores } from '../../styles'
import { StyledButton } from '../../pages/Categories/styles'

export const ModalBackground = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`

export const ModalContent = styled.div`
  position: relative;
  background: ${cores.corFonteBotaoTag};
  display: flex;
  max-width: 1024px;
  max-height: 344px;
  margin: 50px auto;
  padding-left: 32px;
  padding-top: 32px;
  padding-bottom: 32px;
  z-index: 1.01;

  div {
    margin-left: 24px;
    height: 280px;
  }

  img {
    max-width: 280px;
    max-height: 280px;
  }

  h2 {
    color: ${cores.laranjaClaro};
    font-size: 18px;
    padding-bottom: 16px;
  }

  p {
    color: ${cores.laranjaClaro};
    font-size: 14px;
    line-height: 22px;
    padding-bottom: 16px;
  }

  ${StyledButton} {
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
  }
`

export const CloseButton = styled.button`
  color: ${cores.laranjaClaro};
  background-color: ${cores.corFonteBotaoTag};
  font-size: 16px;
  border: none;
  position: absolute;
  width: 16px;
  height: 16px;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
