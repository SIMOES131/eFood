import Restaurant from '../../componets/models/restaurant'

import {
  CategoriesContainer,
  CategoriesGrid,
  CategoryCard,
  StyledButton
} from '../Categories/styles'
import { useState } from 'react'
import { Modal } from '../../componets/Modal'

const Italiana = () => {
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
      id: 1,
      title: 'Ravioli al Tartufo Nero',
      description:
        'O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana. ',
      descriptionModal:
        'O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana',
      serveInfo: 'Serve: de 1 a 2 pessoas',
      infos: ['Italiana'],
      image:
        'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//1.webp',
      price: 69.9
    },
    {
      id: 2,
      description:
        'O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino.',
      descriptionModal:
        'O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino.',
      serveInfo: '1 a 2 pessoas',
      title: 'Spaghetti alla Carbonara',
      infos: ['Italiana'],
      image:
        'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//2.jpg',
      price: 56.9
    },
    {
      id: 3,
      description:
        'O Risotto ai Funghi Porcini é uma iguaria italiana feita com arroz Arborio de alta qualidade e cogumelos porcini secos, que são reidratados para liberar seu sabor intenso e terroso.',
      descriptionModal:
        'O Risotto ai Funghi Porcini é uma iguaria italiana feita com arroz Arborio de alta qualidade e cogumelos porcini secos, que são reidratados para liberar seu sabor intenso e terroso.',
      serveInfo: '1 a 2 pessoas',
      title: 'Risotto ai Funghi Porcini',
      infos: ['Italiana'],
      image:
        'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//3.jpg',
      price: 74.9
    },
    {
      id: 4,
      title: 'Ossobuco alla Milanese',
      description:
        'O Ossobuco alla Milanese é um tradicional prato italiano, originário de Milão, que consiste em um suculento pedaço de vitela cozido lentamente em um molho à base de tomate, vinho branco e legumes.',
      descriptionModal:
        'O Ossobuco alla Milanese é um tradicional prato italiano, originário de Milão, que consiste em um suculento pedaço de vitela cozido lentamente em um molho à base de tomate, vinho branco e legumes.',
      serveInfo: 'Serve: de 1 a 2 pessoas',
      infos: ['Italiana'],
      image:
        'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//4.jpg',
      price: 89.9
    },
    {
      id: 5,
      description:
        'Melanzane alla Parmigiana é um delicioso prato à base de berinjelas, em camadas com molho de tomate caseiro, queijo muçarela e parmesão, assado até ficar dourado e borbulhante.',
      descriptionModal:
        'Melanzane alla Parmigiana é um delicioso prato à base de berinjelas, em camadas com molho de tomate caseiro, queijo muçarela e parmesão, assado até ficar dourado e borbulhante.',
      serveInfo: '1 a 2 pessoas',
      title: 'Melanzane alla Parmigiana',
      infos: ['Italiana'],
      image:
        'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//5.jpg',
      price: 62.9
    },
    {
      id: 6,
      description:
        'O Frutti di Mare Linguine é uma verdadeira celebração dos sabores do mar, apresentando uma generosa mistura de frutos do mar frescos, como camarões, lulas, mariscos e vieiras, combinados com massa linguine al dente e um saboroso molho de tomate e vinho branco.',
      descriptionModal:
        'O Frutti di Mare Linguine é uma verdadeira celebração dos sabores do mar, apresentando uma generosa mistura de frutos do mar frescos, como camarões, lulas, mariscos e vieiras, combinados com massa linguine al dente e um saboroso molho de tomate e vinho branco.',
      serveInfo: '1 a 2 pessoas',
      title: 'Frutti di Mare Linguine',
      infos: ['Italiana'],
      image:
        'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//6.jpg',
      price: 84.9
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

export default Italiana
