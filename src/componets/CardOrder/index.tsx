import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close as closeCard, open as openCard } from '../../store/reducers/card'
import { open as openCart, close as closeCart } from '../../store/reducers/cart'
import { openPay, closePay } from '../../store/reducers/pay'
import { openOrder, closeOrder } from '../../store/reducers/order'
import { Order, OrderContainer, Overlay, SidebarOrder } from './styles'

import Cart from '../Cart'
import Pay from '../CardPay'
import Card from '../Card'

const CardOrder = () => {
  const { isOpen: isOrderOpen } = useSelector(
    (state: RootReducer) => state.order
  )
  const { isOpen: isCardOpen } = useSelector((state: RootReducer) => state.card)
  const { isOpen: isCardPayOpen } = useSelector(
    (state: RootReducer) => state.pay
  )
  const { isOpen: isCartOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeOrderAndOpenCard = () => {
    dispatch(closeOrder())
    dispatch(openPay())
  }

  const closePayCardCartAndOpenCart = () => {
    dispatch(closeOrder())
    dispatch(closePay())
    dispatch(closeCard())
    dispatch(closeCart())
  }

  return (
    <>
      <OrderContainer className={isCardPayOpen ? 'is-open' : ''}>
        <Overlay onClick={() => dispatch(closePay())} />
        <SidebarOrder>
          <Order>
            <h2>Pedido realizado - ORDER_ID </h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.{' '}
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição. <br /> <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </Order>
          <button
            title="Clique aqui para voltar para o carrinho"
            type="button"
            onClick={closePayCardCartAndOpenCart}
          >
            Finalizar
          </button>
        </SidebarOrder>
      </OrderContainer>
    </>
  )
}

export default CardOrder
