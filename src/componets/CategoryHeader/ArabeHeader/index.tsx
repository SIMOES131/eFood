import {
  HeaderBar,
  LinkItem,
  Links,
  Logo,
  Image,
  TopText,
  BottomText,
  ImageContainer
} from '../styles'

import logo from '../../../assets/images/logo.png'
import { useNavigate, useParams } from 'react-router-dom'
import { open } from '../../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'

const ArabeHeader = () => {
  const navigate = useNavigate()
  const { categoria } = useParams()

  const handleGoBack = () => {
    navigate(-1) // Navegar para a página anterior
  }

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const categoryData = {
    italiana: {
      topText: 'Italiana',
      image:
        'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//capa.jpeg',
      bottomText: 'La Dolce Vita Trattoria'
    },
    japonesa: {
      topText: 'Japonesa',
      image: 'https://fake-api-tau.vercel.app/efood/piazza//capa.png',
      bottomText: 'Sushi House'
    },
    portuguesa: {
      topText: 'Portuguesa',
      image:
        'https://fake-api-tau.vercel.app/efood/cantinho_lusitano//capa.jpeg',
      bottomText: 'Cantinho Lusitano'
    },
    vegano: {
      topText: 'Vegano',
      image: 'https://fake-api-tau.vercel.app/efood/jardim_terra/capa.png',
      bottomText: 'Jardim da Terra'
    },
    pizzaria: {
      topText: 'Pizzaria',
      image: 'https://fake-api-tau.vercel.app/efood/piazza//capa.png',
      bottomText: 'Pizzaria del Forno'
    },
    arabe: {
      topText: 'Árabe',
      image:
        'https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//capa.jpeg',
      bottomText: 'Casa das Delícias Árabe'
    }
  }

  const category =
    categoryData[categoria as keyof typeof categoryData] ||
    categoryData['arabe']

  return (
    <HeaderBar>
      <nav>
        <Links>
          <LinkItem>
            <a onClick={handleGoBack}>Restaurantes</a>
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
        <TopText>{category.topText}</TopText>
        <Image src={category.image} alt={`Imagem de ${category.topText}`} />
        <BottomText>{category.bottomText}</BottomText>
      </ImageContainer>
    </HeaderBar>
  )
}

export default ArabeHeader
