import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.laranjaEscuro};
  color: ${cores.laranjaClaro};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-align: center;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.laranjaEscuro};
  color: ${cores.laranjaClaro};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-align: center;
  text-decoration: none;
`
