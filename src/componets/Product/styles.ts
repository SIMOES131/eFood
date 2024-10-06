import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.laranjaClaro};
  border: 1px solid ${cores.laranjaEscuro};
  position: relative;
  padding-bottom: 8px;

  ${TagContainer} {
    margin-rigth: 16px;
  }

  ${ButtonLink} {
    margin-top: 8px;
    margin-left: 8px;
    margin-bottom: 16px;
`
export const Avaliacao = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: ${cores.laranjaEscuro};
  margin-bottom: 16px;
  margin-top: 8px;
  margin-right: 8px;
  margin-left: 8px;
  display: flex;
  column-gap: 8px;

  h1 {
    font-size: 18px;
  }
  img {
    width: 21px;
    height: 20px;
  }
`

export const Titulo = styled.h2`
  font-size: 18px;
  line-height: 21px;
  color: ${cores.laranjaEscuro};
  margin-bottom: 16px;
  margin-top: 8px;
  margin-right: 8px;
  margin-left: 8px;
`

export const NotaTitulo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.laranjaEscuro};
  margin-left: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  column-gap: 8px;
`
