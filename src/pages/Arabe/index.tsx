import Restaurant from '../../componets/models/restaurant'

import {
  CategoriesContainer,
  CategoriesGrid,
  CategoryCard,
  StyledButton
} from '../Categories/styles'
import { useState } from 'react'
import { Modal } from '../../componets/Modal'

const Arabe = () => {
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
      id: 8,
      title: 'Mezze Platter',
      description:
        'O Mezze Platter é uma seleção de aperitivos tradicionais árabes, incluindo homus, babaganush, tabule, falafel, azeitonas e pão pita fresco. Uma combinação deliciosa de sabores e texturas que proporciona uma experiência gastronômica única e diversificada.',
      descriptionModal:
        'O Mezze Platter é uma seleção de aperitivos tradicionais árabes, incluindo homus, babaganush, tabule, falafel, azeitonas e pão pita fresco. Uma combinação deliciosa de sabores e texturas que proporciona uma experiência gastronômica única e diversificada.',
      serveInfo: 'Serve: de 2 a 4 pessoas',
      infos: ['Arabe'],
      image:
        'https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//1.jpg',
      price: 49.9
    },
    {
      id: 9,
      description:
        'O Kebab de Cordeiro é feito com pedaços de cordeiro marinados em especiarias e ervas, grelhados à perfeição e servidos com arroz basmati perfumado, salada e molho de iogurte. Uma opção saborosa e suculenta para quem aprecia a autêntica cozinha árabe.',
      descriptionModal:
        'O Kebab de Cordeiro é feito com pedaços de cordeiro marinados em especiarias e ervas, grelhados à perfeição e servidos com arroz basmati perfumado, salada e molho de iogurte. Uma opção saborosa e suculenta para quem aprecia a autêntica cozinha árabe.',
      serveInfo: '1 a 2 pessoas',
      title: 'Kebab de Cordeiro',
      infos: ['Arábe'],
      image: 'https://fake-api-tau.vercel.app/efood/cantinho_lusitano//2.jpg',
      price: 54.9
    },
    {
      id: 10,
      description:
        'O Shawarma de Frango é preparado com finas fatias de frango marinadas em uma mistura de especiarias e grelhadas lentamente. Servido com pão pita, salada e molho tahine.',
      descriptionModal:
        'O Shawarma de Frango é preparado com finas fatias de frango marinadas em uma mistura de especiarias e grelhadas lentamente. Servido com pão pita, salada e molho tahine, este prato é uma opção saborosa e satisfatória para quem deseja saborear a autêntica comida de rua árabe.',
      serveInfo: '1 pessoa',
      title: 'Shawarma de Frang',
      infos: ['Arabe'],
      image:
        'https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//3.webp',
      price: 45.9
    },
    {
      id: 8,
      title: 'Mezze Platter',
      description:
        'O Mezze Platter é uma seleção de aperitivos tradicionais árabes, incluindo homus, babaganush, tabule, falafel, azeitonas e pão pita fresco. Uma combinação deliciosa de sabores e texturas que proporciona uma experiência gastronômica única e diversificada.',
      descriptionModal:
        'O Mezze Platter é uma seleção de aperitivos tradicionais árabes, incluindo homus, babaganush, tabule, falafel, azeitonas e pão pita fresco. Uma combinação deliciosa de sabores e texturas que proporciona uma experiência gastronômica única e diversificada.',
      serveInfo: 'Serve: de 2 a 4 pessoas',
      infos: ['Arabe'],
      image:
        'https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//1.jpg',
      price: 49.9
    },
    {
      id: 9,
      description:
        'O Kebab de Cordeiro é feito com pedaços de cordeiro marinados em especiarias e ervas, grelhados à perfeição e servidos com arroz basmati perfumado, salada e molho de iogurte. Uma opção saborosa e suculenta para quem aprecia a autêntica cozinha árabe.',
      descriptionModal:
        'O Kebab de Cordeiro é feito com pedaços de cordeiro marinados em especiarias e ervas, grelhados à perfeição e servidos com arroz basmati perfumado, salada e molho de iogurte. Uma opção saborosa e suculenta para quem aprecia a autêntica cozinha árabe.',
      serveInfo: '1 a 2 pessoas',
      title: 'Kebab de Cordeiro',
      infos: ['Arábe'],
      image: 'https://fake-api-tau.vercel.app/efood/cantinho_lusitano//2.jpg',
      price: 54.9
    },
    {
      id: 10,
      description:
        'O Shawarma de Frango é preparado com finas fatias de frango marinadas em uma mistura de especiarias e grelhadas lentamente. Servido com pão pita, salada e molho tahine.',
      descriptionModal:
        'O Shawarma de Frango é preparado com finas fatias de frango marinadas em uma mistura de especiarias e grelhadas lentamente. Servido com pão pita, salada e molho tahine.',
      serveInfo: '1 pessoa',
      title: 'Shawarma de Frang',
      infos: ['Arabe'],
      image:
        'https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//3.webp',
      price: 45.9
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

export default Arabe
