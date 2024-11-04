import Product from '../Product'
import { List, Section } from './styles'

import hiokiSushi from '../../assets/images/HiokiSushi.png'
import laDolceVita from '../../assets/images/LaDolceVita.png'

const restaurant = [
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
    price: 60.9,
    avaliation: 3.5
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
    image: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//2.jpg',
    price: 56.9,
    avaliation: 5.0
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
    image: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//3.jpg',
    price: 74.9,
    avaliation: 4.4
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
    image: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//4.jpg',
    price: 89.9,
    avaliation: 4.0
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
    image: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//5.jpg',
    price: 62.9,
    avaliation: 4.8
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
    image: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//6.jpg',
    price: 84.9,
    avaliation: 4.1
  }
]

const ProductsList = () => (
  <Section className="container">
    <List>
      {restaurant.map((restaurant) => (
        <Product
          key={restaurant.id}
          description={restaurant.description}
          image={restaurant.image}
          //to={restaurant.to}
          infos={restaurant.infos}
          title={restaurant.title}
          avaliation={restaurant.avaliation}
        />
      ))}
    </List>
  </Section>
)

export default ProductsList
