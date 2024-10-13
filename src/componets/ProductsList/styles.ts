import styled from 'styled-components'

export const Section = styled.div`
  padding-bottom: 120px;
  max-width: 1024px;
  align-items: center;
  aling-content: center;

  @media (max-width: 1024px) {
    .container {
      width: 472px;
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

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`
