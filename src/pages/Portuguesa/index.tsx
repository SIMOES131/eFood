import Restaurant from '../../componets/models/restaurant'
import { RestaurantePortugues } from '../RestaurantList'

import {
  CategoriesContainer,
  CategoriesGrid,
  CategoryCard,
  StyledButton
} from '../Categories/styles'
import { useState } from 'react'
import { Modal } from '../../componets/Modal'
import { useGetFeaturedRestauratPortuguesQuery } from '../../services/api'

const Portuguesa = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Restaurant | null>(
    null
  )

  const {
    data: RestaurantePortugues,
    isLoading,
    isError,
    error
  } = useGetFeaturedRestauratPortuguesQuery()

  console.log('isLoading:', isLoading)
  console.log('isError:', isError)
  console.log('RestaurantePortugues:', RestaurantePortugues)
  if (isError) {
    console.log('Erro detalhado:', error)
  }

  const handleAddToCart = (item: Restaurant) => {
    setSelectedProduct(item)
    setShowModal(true)
  }

  if (isLoading) return <div>Carregando...</div>
  if (isError) return <div>Erro ao carregar dados!</div>

  return (
    <CategoriesContainer>
      <CategoriesGrid className="container">
        {RestaurantePortugues?.map((item) => (
          <CategoryCard key={item.id}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <StyledButton onClick={() => handleAddToCart(item)}>
              Adicionar ao carrinho
            </StyledButton>
          </CategoryCard>
        ))}
      </CategoriesGrid>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        productData={selectedProduct}
      />
    </CategoriesContainer>
  )
}

export default Portuguesa
