import Restaurant from '../../componets/models/restaurant'

import {
  CategoriesContainer,
  CategoriesGrid,
  CategoryCard,
  StyledButton
} from '../Categories/styles'
import { useState } from 'react'
import { Modal } from '../../componets/Modal'

const Japonesa = () => {
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
      id: 11,
      title: 'Sushi e Sashimi Combinado',
      description:
        'escricao": "O Sushi e Sashimi Combinado é uma seleção de peças cuidadosamente elaboradas por nossos sushimen, incluindo atum, salmão, peixe branco, camarão e outros frutos do mar frescos.',
      descriptionModal:
        'escricao": "O Sushi e Sashimi Combinado é uma seleção de peças cuidadosamente elaboradas por nossos sushimen, incluindo atum, salmão, peixe branco, camarão e outros frutos do mar frescos.',
      serveInfo: 'Serve: de 1 a 2 pessoas',
      infos: ['Porguguesa'],
      image: 'https://fake-api-tau.vercel.app/efood/sakura_sushi_house//1.jpg',
      price: 89.9
    },
    {
      id: 12,
      description:
        'O Tempura de Legumes e Camarão é uma opção deliciosa e crocante, composta por uma variedade de legumes e camarões frescos empanados em uma massa leve e frita até a perfeição.',
      descriptionModal:
        'O Tempura de Legumes e Camarão é uma opção deliciosa e crocante, composta por uma variedade de legumes e camarões frescos empanados em uma massa leve e frita até a perfeição.',
      serveInfo: '1 a 2 pessoas',
      title: 'Tempura de Legumes e Camarão',
      infos: ['Japonesa'],
      image: 'https://fake-api-tau.vercel.app/efood/sakura_sushi_house//2.jpg',
      price: 79.9
    },
    {
      id: 13,
      description:
        'descricao": "O Teishoku de Tonkatsu é um prato tradicional japonês composto por uma fatia de lombo de porco empanado e frito, servido com arroz japonês, misoshiru (sopa de pasta de soja) e tsukemono (legumes em conserva).',
      descriptionModal:
        'descricao": "O Teishoku de Tonkatsu é um prato tradicional japonês composto por uma fatia de lombo de porco empanado e frito, servido com arroz japonês, misoshiru (sopa de pasta de soja) e tsukemono (legumes em conserva).',
      serveInfo: '1 pessoa',
      title: 'Teishoku de Tonkatsu',
      infos: ['Japonesa'],
      image: 'https://fake-api-tau.vercel.app/efood/sakura_sushi_house//3.jpg',
      price: 69.9
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

export default Japonesa
