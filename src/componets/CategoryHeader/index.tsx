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

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const CategoryHeader = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // Navegar para a página anterior
  }

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
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
          <LinkItem onClick={openCart}>
            <a href="#"> {items.length}- produto(s) disponíveis</a>
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
