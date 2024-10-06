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

const CategoryHeader = () => (
  <HeaderBar>
    <nav>
      <Links>
        <LinkItem>
          <a href="#">Restaurantes</a>
        </LinkItem>
        <LinkItem>
          <Logo src={logo} alt="eFood" />
        </LinkItem>
        <LinkItem>
          <a href="#">0 - produto(s) disponíveis</a>
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

export default CategoryHeader
