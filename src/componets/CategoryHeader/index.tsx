import {
  HeaderBar,
  LinkItem,
  Links,
  Logo,
  Image,
  TopText,
  BottomText,
  ImageContainer
} from './styles'

import logo from '../../assets/images/logo.png'
import image from '../../assets/images/LaDolceVita.png'
import { useNavigate } from 'react-router-dom'

type Props = {
  to?: string
  cartItemCount: number
}

const CategoryHeader = ({ to = '/', cartItemCount }: Props) => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // Navegar para a página anterior
  }

  return (
    <HeaderBar>
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Restaurantes</a>
          </LinkItem>
          <LinkItem>
            <Logo src={logo} alt="eFood" onClick={handleGoBack} />
          </LinkItem>
          <LinkItem>
            <a href="#">{cartItemCount} - produto(s) disponíveis</a>
          </LinkItem>
        </Links>
      </nav>
      <ImageContainer>
        <TopText>Italiana</TopText>
        <Image src={image} alt="Imagem" />
        <BottomText>La Dolce Vita Trattoria</BottomText>
      </ImageContainer>
    </HeaderBar>
  )
}

export default CategoryHeader
