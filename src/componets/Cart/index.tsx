import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Info,
  Overlay,
  Prices,
  Sidebar
} from './styles'

import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'

import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.price!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.title} />
              <Info>
                <h3>{item.title}</h3>
                <p>R$ {item.price}</p>
              </Info>
              <button type="button">
                <img src={lixeira} onClick={() => removeItem(item.id)} />
              </button>
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor Total <span>R$ {getTotalPrice().toFixed(2)}</span>
        </Prices>

        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
