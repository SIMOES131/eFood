import {
  ButtonContinuar,
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
import { open as openCard } from '../../store/reducers/card'
import { openPay } from '../../store/reducers/pay'
import { getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen: isCartOpen, items } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const closeCartAndOpenPay = () => {
    dispatch(close())
    dispatch(openPay())
  }

  /*const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.price!)
    }, 0)
  }*/

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      <CartContainer className={isCartOpen ? 'is-open' : ''}>
        <Overlay onClick={() => dispatch(close())} />
        <Sidebar>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.image} alt={item.title} />
                <Info>
                  <h3>{item.title}</h3>
                  <p>R$ {item.price}</p>
                </Info>
                <button type="button" onClick={() => removeItem(item.id)}>
                  <img src={lixeira} alt="Remover item" />
                </button>
              </CartItem>
            ))}
          </ul>
          <Prices>
            Valor Total <span>R$ {getTotalPrice(items).toFixed(2)}</span>
          </Prices>

          <ButtonContinuar
            onClick={closeCartAndOpenPay}
            title="Clique aqui para continuar com a compra"
            type="submit"
          >
            Continuar com a entrega
          </ButtonContinuar>
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Cart
