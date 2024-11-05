import Restaurant from '../../componets/models/restaurant'

import {
  CategoriesContainer,
  CategoriesGrid,
  CategoryCard,
  StyledButton
} from '../Categories/styles'
import { useState } from 'react'
import { Modal } from '../../componets/Modal'

const Portuguesa = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Restaurant | null>(
    null
  )

  const handleAddToCart = (item: Restaurant) => {
    setSelectedProduct(item)
    setShowModal(true)
  }

  const restaurante: Restaurant[] = [
    {
      id: 14,
      title: 'Bacalhau à Gomes de Sá',
      description:
        'O Bacalhau à Gomes de Sá é um prato tradicional português, que consiste em lascas de bacalhau cozido, batatas, cebola, alho, azeite e azeitonas pretas.',
      descriptionModal:
        'O Bacalhau à Gomes de Sá é um prato tradicional português, que consiste em lascas de bacalhau cozido, batatas, cebola, alho, azeite e azeitonas pretas.',
      serveInfo: 'Serve: de 1 a 2 pessoas',
      infos: ['Porguguesa'],
      image: 'https://fake-api-tau.vercel.app/efood/cantinho_lusitano//1.jpeg',
      price: 74.9
    },
    {
      id: 15,
      description:
        'O Arroz de Pato é um delicioso prato português, feito com arroz, carne de pato desfiada, chouriço e cenoura.',
      descriptionModal:
        'O Arroz de Pato é um delicioso prato português, feito com arroz, carne de pato desfiada, chouriço e cenoura.',
      serveInfo: '1 a 2 pessoas',
      title: 'Arroz de Pato',
      infos: ['Portuguesa'],
      image: 'https://fake-api-tau.vercel.app/efood/cantinho_lusitano//2.jpg',
      price: 64.9
    },
    {
      id: 16,
      description:
        'A Alheira de Mirandela é um emblemático prato português, que consiste em uma deliciosa alheira grelhada, acompanhada de batatas fritas, arroz e uma salada fresca.',
      descriptionModal:
        'A Alheira de Mirandela é um emblemático prato português, que consiste em uma deliciosa alheira grelhada, acompanhada de batatas fritas, arroz e uma salada fresca.',
      serveInfo: '1 pessoa',
      title: 'Alheira de Mirandela',
      infos: ['Portuguesa'],
      image: 'https://fake-api-tau.vercel.app/efood/cantinho_lusitano//3.png',
      price: 54.9
    }
  ]

  return (
    <CategoriesContainer>
      <CategoriesGrid className="container">
        {restaurante.map((item) => (
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
