import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Section = styled.div`
  padding-bottom: 120px;
  max-width: 1024px;
  align-items: center;
  aling-content: center;

  @media (max-width: 1024px) {
    .container {
      width: 46;
      margin-left: 0;
    }
    max-width: 46%;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  img {
    max-width: 472px;
    max-height: 217px;
    width: 100%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`
