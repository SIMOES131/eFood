import styled from 'styled-components'
import { cores } from '../../styles'

// Container da página Categories
export const CategoriesContainer = styled.div`
  padding: 171px;
`

// Estilo do grid específico para a página Categories
export const CategoriesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas na página Categories */
  column-gap: 20px;
  row-gap: 20px;
`

// Estilo específico para os cards na página Categories
export const CategoryCard = styled.li`
  background-color: ${cores.laranjaEscuro};
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
    color: ${cores.laranjaClaro};
    font-size: 16px;
  }

  p {
    font-size: 14px;
    color: ${cores.laranjaClaro};
  }
`

export const StyledButton = styled.button`
  background-color: ${cores.laranjaClaro};
  color: ${cores.laranjaEscuro};
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${cores.corDeFundo};
  }
`
