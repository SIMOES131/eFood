import Product from '../Product'
import { List, Section } from './styles'

const restaurant = [
  {
    id: 1,
    title: 'Bella Tavola Italiana',
    description:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.',
    descriptionModal:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    serveInfo: 'Serve: de 2 a 3 pessoas',
    infos: ['Italiana'],
    image:
      'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//capa.jpeg',
    price: 60.9,
    avaliation: 4.7,
    to: '/italiana'
  },
  {
    id: 2,
    description:
      'O Cantinho Lusitano é um charmoso e tradicional restaurante português, que celebra a rica herança culinária de Portugal. Neste aconchegante espaço, os visitantes podem desfrutar dos autênticos sabores portugueses, preparados com ingredientes frescos e de alta qualidade, respeitando as receitas clássicas.',
    descriptionModal:
      'O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino. Um prato saboroso e reconfortante que leva você diretamente para a Itália.',
    serveInfo: '1 a 2 pessoas',
    title: 'Cantinho Lusitano',
    infos: ['Português'],
    image: 'https://fake-api-tau.vercel.app/efood/cantinho_lusitano//capa.jpeg',
    price: 74.9,
    avaliation: 4.8,
    to: '/portuguesa'
  },
  {
    id: 3,
    description:
      'A Casa das Delícias Árabes é um acolhedor e autêntico restaurante árabe, localizado no coração da cidade, que proporciona uma verdadeira experiência culinária do Oriente Médio. O ambiente é decorado com elementos tradicionais e exóticos, criando uma atmosfera convidativa e confortável.',
    descriptionModal:
      'A Casa das Delícias Árabes é um acolhedor e autêntico restaurante árabe, localizado no coração da cidade, que proporciona uma verdadeira experiência culinária do Oriente Médio. O ambiente é decorado com elementos tradicionais e exóticos, criando uma atmosfera convidativa e confortável.',
    serveInfo: '1 a 2 pessoas',
    title: 'Casa das Delícias Árabes',
    infos: ['Árabe'],
    image:
      'https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//capa.jpeg',
    price: 74.9,
    avaliation: 4.8,
    to: '/arabe'
  },
  {
    id: 4,
    description:
      'A Sakura Sushi House é um sofisticado e autêntico restaurante japonês que oferece uma experiência culinária imersiva, transportando os visitantes diretamente para a Terra do Sol Nascente. O ambiente elegante é complementado por um belo jardim japonês, criando uma atmosfera tranquila e serena',
    descriptionModal:
      ' A Sakura Sushi House é um sofisticado e autêntico restaurante japonês que oferece uma experiência culinária imersiva, transportando os visitantes diretamente para a Terra do Sol Nascente. O ambiente elegante é complementado por um belo jardim japonês, criando uma atmosfera tranquila e serena',
    serveInfo: '1 a 2 pessoas',
    title: 'Sakura Sushi House',
    infos: ['Japonesa'],
    image:
      'https://fake-api-tau.vercel.app/efood/sakura_sushi_house//capa.jpeg',
    price: 89.9,
    avaliation: 4.9,
    to: '/japonesa'
  },
  {
    id: 5,
    description:
      'O Jardim da Terra é um restaurante vegano que se dedica a oferecer pratos deliciosos e criativos, utilizando apenas ingredientes frescos, orgânicos e sazonais. Nosso cardápio é cuidadosamente elaborado para proporcionar uma experiência culinária única, que celebra a diversidade e a riqueza dos alimentos à base de plantas.',
    descriptionModal:
      'O Jardim da Terra é um restaurante vegano que se dedica a oferecer pratos deliciosos e criativos, utilizando apenas ingredientes frescos, orgânicos e sazonais. Nosso cardápio é cuidadosamente elaborado para proporcionar uma experiência culinária única, que celebra a diversidade e a riqueza dos alimentos à base de plantas.',
    serveInfo: '1 a 2 pessoas',
    title: 'Jardim da Terra',
    infos: ['Vegano'],
    image: 'https://fake-api-tau.vercel.app/efood/jardim_terra//capa.png',
    price: 62.9,
    avaliation: 4.8,
    to: '/vegano'
  },
  {
    id: 6,
    description:
      'A Piazza del Forno é uma pizzaria acolhedora e autêntica que se orgulha de suas raízes italianas. Aqui, você encontrará pizzas artesanais preparadas com ingredientes frescos e assadas em forno a lenha, proporcionando sabores inigualáveis e uma crosta crocante e deliciosa.',
    descriptionModal:
      'A Piazza del Forno é uma pizzaria acolhedora e autêntica que se orgulha de suas raízes italianas. Aqui, você encontrará pizzas artesanais preparadas com ingredientes frescos e assadas em forno a lenha, proporcionando sabores inigualáveis e uma crosta crocante e deliciosa.',
    serveInfo: 'Serve: de 2 a 3 pessoas',
    title: 'Piazza del Forno',
    infos: ['Pizzaria'],
    image: 'https://fake-api-tau.vercel.app/efood/piazza//capa.png',
    price: 84.9,
    avaliation: 4.7,
    to: '/pizzaria'
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
          infos={restaurant.infos}
          title={restaurant.title}
          avaliation={restaurant.avaliation}
          to={restaurant.to}
        />
      ))}
    </List>
  </Section>
)

export default ProductsList
