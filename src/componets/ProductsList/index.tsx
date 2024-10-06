import Restaurant from '../models/restaurant'
import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  restaurant: Restaurant[]
}

const ProductsList = ({ restaurant }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurant.map((restaurant) => (
          <Product
            key={restaurant.id}
            description={restaurant.description}
            image={restaurant.image}
            to={restaurant.to}
            infos={restaurant.infos}
            title={restaurant.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
