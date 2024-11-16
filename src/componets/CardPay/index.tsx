import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close as closeCard, open as openCard } from '../../store/reducers/card'
import { open as openCart, close as closeCart } from '../../store/reducers/cart'
import { openPay, closePay } from '../../store/reducers/pay'
import { openOrder, closeOrder } from '../../store/reducers/order'
import {
  PayContainer,
  Overlay,
  SidebarPay,
  FistData,
  SecondData,
  BackSand
} from './styles'

import { getTotalPrice } from '../../utils'

import Cart from '../Cart'
import Pay from '../CardPay'
import Card from '../Card'
import Order from '../CardOrder'
import classNames from 'classnames'

const CardPay = () => {
  const { isOpen: isCardOpen } = useSelector((state: RootReducer) => state.card)
  const { isOpen: isCardPayOpen } = useSelector(
    (state: RootReducer) => state.pay
  )

  const { isOpen: isCartOpen, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const { isOpen: isOrderOpen } = useSelector(
    (state: RootReducer) => state.order
  )

  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const closePayAndOpenOrder = () => {
    dispatch(closePay())
    dispatch(openCard())
  }

  const closePayCardCartAndOpenOrder = () => {
    dispatch(openOrder())
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      complement: '',
      number: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },

    validationSchema: Yup.object({
      cardNumber: Yup.string().when((values, schema) =>
        schema.required('O campo é obrigatório')
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        schema.required('O campo é obrigatório')
      ),
      expiresYear: Yup.string().when((values, schema) =>
        schema.required('O campo é obrigatório')
      ),
      cardCode: Yup.string().when((values, schema) =>
        schema.required('O campo é obrigatório')
      )
    }),

    onSubmit: (values) => {
      console.log('Submetendo o formulário com os dados:', values)
      purchase({
        items: [],
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            cardNumber: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
            }
          }
        }
      })
        .then((response) => {
          console.log('Resposta da API:', response)
        })
        .catch((error) => {
          console.error('Erro ao fazer a compra:', error)
        })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isIvalid = fieldName in form.errors
    return isTouched && isIvalid ? 'error' : ''
  }

  return (
    <form onSubmit={form.handleSubmit}>
      {isOrderOpen ? (
        <Order />
      ) : (
        <PayContainer className={isCardPayOpen ? 'is-open' : ''}>
          <Overlay onClick={() => dispatch(closePay())} />
          <SidebarPay>
            <h2>
              Pagamento - Valor a pagar R$ {getTotalPrice(items).toFixed(2)}
            </h2>
            <FistData>
              <label htmlFor="cardDisplayName">Nome no cartão</label>
              <input
                id="cardDisplayName"
                type="text"
                name="cardDisplayName"
                value={form.values.cardDisplayName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={classNames('base-class', {
                  error: checkInputHasError('cardDisplayName')
                })}
              />
            </FistData>
            <SecondData>
              <div>
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={classNames('base-class', {
                    error: checkInputHasError('cardNumber')
                  })}
                  mask="9999 9999 9999 9999"
                />
              </div>
              <div>
                <label htmlFor="cardCode">CVV</label>
                <InputMask
                  id="cardCode"
                  type="text"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={classNames('base-class', {
                    error: checkInputHasError('cardCode')
                  })}
                  mask="999"
                />
              </div>
            </SecondData>
            <SecondData>
              <div>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <InputMask
                  id="expiresMonth"
                  type="text"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={classNames('base-class', {
                    error: checkInputHasError('expiresMonth')
                  })}
                  mask="99"
                />
              </div>
              <div>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <InputMask
                  id="expiresYear"
                  type="text"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={classNames('base-class', {
                    error: checkInputHasError('expiresYear')
                  })}
                  mask="999"
                />
              </div>
            </SecondData>
            <BackSand>
              <button
                title="Clique aqui para continuar com o pagamento"
                type="button"
                onClick={closePayCardCartAndOpenOrder}
              >
                Finalizar pagamento
              </button>
              <button
                title="Clique aqui para voltar para o endereço"
                type="button"
                onClick={closePayAndOpenOrder}
              >
                Voltar para edição de endereço
              </button>
            </BackSand>
          </SidebarPay>
        </PayContainer>
      )}
    </form>
  )
}

export default CardPay
