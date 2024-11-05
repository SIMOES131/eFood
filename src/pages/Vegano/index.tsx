import Restaurant from '../../componets/models/restaurant'

import {
  CategoriesContainer,
  CategoriesGrid,
  CategoryCard,
  StyledButton
} from '../Categories/styles'
import { useState } from 'react'
import { Modal } from '../../componets/Modal'

const Vegano = () => {
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
      id: 20,
      title: 'Hambúrguer de Grão-de-Bico',
      description:
        'Nosso Hambúrguer de Grão-de-Bico é feito com grão-de-bico, cenoura, cebola e especiarias, servido em um pão vegano fresco com alface, tomate e nosso delicioso molho caseiro.',
      descriptionModal:
        'Nosso Hambúrguer de Grão-de-Bico é feito com grão-de-bico, cenoura, cebola e especiarias, servido em um pão vegano fresco com alface, tomate e nosso delicioso molho caseiro. Acompanha batatas rústicas assadas e uma salada fresca e colorida.',
      serveInfo: 'Serve: de pessoa',
      infos: ['Porguguesa'],
      image: 'https://fake-api-tau.vercel.app/efood/jardim_terra//1.webp',
      price: 38.9
    },
    {
      id: 21,
      description:
        'A Lasanha de Berinjela é uma opção saborosa e reconfortante, preparada com camadas de berinjela grelhada, molho de tomate caseiro e um creme de castanha-de-caju.S',
      descriptionModal:
        'A Lasanha de Berinjela é uma opção saborosa e reconfortante, preparada com camadas de berinjela grelhada, molho de tomate caseiro e um creme de castanha-de-caju. Assada até ficar dourada, esta lasanha vegana é a escolha perfeita para quem busca uma refeição saudável e deliciosa.',
      serveInfo: '1 a 2 pessoas',
      title: 'Lasanha de Berinjela',
      infos: ['Vegano'],
      image: 'https://fake-api-tau.vercel.app/efood/jardim_terra//2.jpeg',
      price: 42.9
    },
    {
      id: 21,
      description:
        'O Bowl de Cogumelos e Quinoa é uma combinação nutritiva e saborosa de quinoa cozida, cogumelos salteados, espinafre, abacate e tomates-cereja.',
      descriptionModal:
        'O Bowl de Cogumelos e Quinoa é uma combinação nutritiva e saborosa de quinoa cozida, cogumelos salteados, espinafre, abacate e tomates-cereja. Servido com um molho de ervas frescas e limão, este prato é ideal para quem busca uma refeição leve e saudável.',
      serveInfo: '1 pessoa',
      title: 'Bowl de Cogumelos e Quinoa',
      infos: ['Portuguesa'],
      image: 'https://fake-api-tau.vercel.app/efood/jardim_terra//3.jpg',
      price: 35.9
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

export default Vegano
