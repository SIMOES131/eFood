import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonLink } from '../Button/styles'
import { Links } from '../Header/styles'

export const Card = styled.div`
  background-color: ${cores.corDeFundoCard};
  border: 1px solid ${cores.corFonteBotaoTag};
  position: relative;
  padding-bottom: 8px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 400px;

    p {
    margin-right: 8px;
    }

   img {
    width: 398px;
    height: 182px;
  }
  }

  ${TagContainer} {
    margin-rigth: 16px;
  }

${Links} {
padding-bottom: 8px;
}

  ${ButtonLink} {

    margin-left: 8px;
    padding-top: 4px 6px;
`
export const Avaliacao = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: ${cores.corDeFundoCard};
  margin-bottom: 16px;
  margin-top: 8px;
  margin-right: 8px;
  margin-left: 8px;
  display: flex;
  column-gap: 8px;

  h1 {
    font-size: 18px;
    color: ${cores.corFonteBotaoTag};
  }
  img {
    width: 21px;
    height: 20px;
  }
`

export const Titulo = styled.h2`
  font-size: 18px;
  line-height: 21px;
  color: ${cores.corFonteBotaoTag};
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
  color: ${cores.corFonteBotaoTag};
  margin-left: 8px;
  padding-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  column-gap: 8px;
`
