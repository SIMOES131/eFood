import pizza from '../../assets/images/Pizza.png'

import Restaurant from '../../componets/models/restaurant'

import {
  CategoriesContainer,
  CategoriesGrid,
  CategoryCard,
  StyledButton
} from './styles'

const restaurante: Restaurant[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['Destaque da semana', 'Japonesa'],
    image: pizza
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['Italiana'],
    image: pizza
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['Destaque da semana', 'Japonesa'],
    image: pizza
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['Italiana'],
    image: pizza
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['Destaque da semana', 'Japonesa'],
    image: pizza
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: ['Italiana'],
    image: pizza
  }
]

const Categories = () => (
  <CategoriesContainer>
    <CategoriesGrid className="container">
      {restaurante.map((item) => (
        <CategoryCard key={item.id}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <StyledButton>Adicionar ao carrinho</StyledButton>
        </CategoryCard>
      ))}
    </CategoriesGrid>
  </CategoriesContainer>
)
export default Categories
