import styled from 'styled-components'
import { cores } from '../../styles'

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza a seção no container */
  padding-top: 80px;
  padding-bottom: 120px;
  width: 100%; /* Garante que o container ocupe toda a largura */
`

export const CategoriesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas na página Categories */
  column-gap: 32px;
  row-gap: 32px;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding-left: 25%;
    grid-template-columns: 1fr;
    width: 100%;
    margin: 0 auto;
  }
`

export const CategoryCard = styled.li`
  background-color: ${cores.corFonteBotaoTag};
  width: 320px;
  height: 338px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;

  img {
    width: 100%;
    height: auto;
  }

  h2 {
    color: ${cores.corDeFundoCard};
    font-size: 16px;
  }

  p {
    font-size: 14px;
    color: ${cores.corDeFundoCard};
  }
`

export const StyledButton = styled.button`
  background-color: ${cores.corDeFundoCard};
  color: ${cores.corFonteBotaoTag};
  border: none;
  font-weight: bold;
  font-size: 14px;
  padding-top: 4px;
  padding-bottom: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${cores.corDeFundoCard};
  }
`
