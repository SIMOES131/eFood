import Restaurant from '../../componets/models/restaurant'

import {
  CategoriesContainer,
  CategoriesGrid,
  CategoryCard,
  StyledButton
} from './styles'
import { useState } from 'react'
import { Modal } from '../../componets/Modal'

const Categories = () => {
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
      title: 'Bella Tavola Italiana',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      descriptionModal:
        'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
      serveInfo: 'Serve: de 2 a 3 pessoas',
      infos: ['Destaque da semana', 'Japonesa'],
      image:
        'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//1.webp',
      price: 60.9
    },
    {
      id: 2,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      descriptionModal:
        'O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino. Um prato saboroso e reconfortante que leva você diretamente para a Itália.',
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
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      descriptionModal:
        'O Risotto ai Funghi Porcini é uma iguaria italiana feita com arroz Arborio de alta qualidade e cogumelos porcini secos, que são reidratados para liberar seu sabor intenso e terroso. O arroz é cozido lentamente em um caldo de legumes, com vinho branco e queijo parmesão, resultando em um risoto cremoso e delicioso.',
      serveInfo: '1 a 2 pessoas',
      title: 'Risotto ai Funghi Porcini',
      infos: ['Destaque da semana', 'Japonesa'],
      image:
        'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//3.jpg',
      price: 74.9
    },
    {
      id: 4,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      descriptionModal:
        'O Ossobuco alla Milanese é um tradicional prato italiano, originário de Milão, que consiste em um suculento pedaço de vitela cozido lentamente em um molho à base de tomate, vinho branco e legumes. O prato é acompanhado por uma porção de polenta cremosa ou risoto alla Milanese, feito com açafrão.',
      serveInfo: '1 a 2 pessoas',
      title: 'Ossobuco alla Milanese',
      infos: ['Italiana'],
      image:
        'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//4.jpg',
      price: 89.9
    },
    {
      id: 5,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      descriptionModal:
        'Melanzane alla Parmigiana é um delicioso prato à base de berinjelas, em camadas com molho de tomate caseiro, queijo muçarela e parmesão, assado até ficar dourado e borbulhante. Uma opção saborosa e reconfortante, perfeita para os amantes de legumes e queijo.',
      serveInfo: '1 a 2 pessoas',
      title: 'Melanzane alla Parmigiana',
      infos: ['Destaque da semana', 'Japonesa'],
      image:
        'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//5.jpg',
      price: 62.9
    },
    {
      id: 6,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      descriptionModal:
        'O Frutti di Mare Linguine é uma verdadeira celebração dos sabores do mar, apresentando uma generosa mistura de frutos do mar frescos, como camarões, lulas, mariscos e vieiras, combinados com massa linguine al dente e um saboroso molho de tomate e vinho branco. Uma opção deliciosa para os amantes de frutos do mar.',
      serveInfo: 'Serve: de 2 a 3 pessoas',
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

export default Categories
