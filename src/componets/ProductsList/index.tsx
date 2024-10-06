import Restaurant from '../models/restaurant'
import Product from '../Product'
import { List, Section } from './styles'

type Props = {
  restaurant: Restaurant[]
}

const ProductsList = ({ restaurant }: Props) => (
  <Section className="container">
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
  </Section>
)

export default ProductsList
