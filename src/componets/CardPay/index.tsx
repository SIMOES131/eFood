import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close as closeCard, open as openCard } from '../../store/reducers/card'
import {
  open as openCart,
  close as closeCart,
  remove
} from '../../store/reducers/cart'
import { closePay } from '../../store/reducers/pay'
import { openOrder } from '../../store/reducers/order'
import {
  PayContainer,
  Overlay,
  FistData,
  SecondData,
  BackSand,
  Finalizar,
  Sidebar
} from './styles'

import { getTotalPrice } from '../../utils'

import classNames from 'classnames'

const CardPay = () => {
  const [currentStep, setCurrentStep] = useState<
    'delivery' | 'payment' | 'order'
  >('delivery')

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

  const closePayAndOpenCart = () => {
    dispatch(closePay())
    dispatch(openCart())
  }
  const closeFinish = () => {
    dispatch(closePay())
  }

  const closePayCardCartAndOpenOrder = () => {
    dispatch(openOrder())
  }

  const handleNextStep = () => setCurrentStep('payment')
  const handlePreviousStep = () => setCurrentStep('delivery')
  const handleNextOrder = () => setCurrentStep('order')

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
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(3, 'O endereço precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O CEP precisa ter 8 caracteres')
        .max(8, 'O CEP precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caractere')
        .required('O campo é obrigatório'),
      cardDisplayName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
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
          closePayCardCartAndOpenOrder()
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
      <PayContainer className={isCardPayOpen ? 'is-open' : ''}>
        <Overlay onClick={() => dispatch(closePay())} />

        {currentStep === 'delivery' && (
          <Sidebar>
            <h2>Entrega</h2>
            <FistData>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                id="receiver"
                name="receiver"
                type="text"
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={classNames('base-class', {
                  error: checkInputHasError('receiver')
                })}
              />
              <label htmlFor="description">Endereço</label>
              <input
                type="text"
                id="description"
                name="description"
                value={form.values.description}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={classNames('base-class', {
                  error: checkInputHasError('description')
                })}
              />
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={classNames('base-class', {
                  error: checkInputHasError('city')
                })}
              />
            </FistData>
            <BackSand>
              <button
                type="button"
                onClick={handleNextStep}
                disabled={isLoading}
              >
                Continuar com o pagamento
              </button>
              <button
                onClick={closePayAndOpenCart}
                type="button"
                title="Voltar para o carrinho"
              >
                Voltar para o carrinho
              </button>
            </BackSand>
          </Sidebar>
        )}
        {currentStep === 'payment' && (
          <Sidebar>
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
                <label className="margin-bottom" htmlFor="cardNumber">
                  Número do cartão
                </label>
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
                <label className="margin-bottom" htmlFor="cardCode">
                  CVV
                </label>
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
                <label className="margin-bottom" htmlFor="expiresMonth">
                  Mês de vencimento
                </label>
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
                <label className="margin-bottom" htmlFor="expiresYear">
                  Ano de vencimento
                </label>
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
                  mask="9999"
                />
              </div>
            </SecondData>
            <BackSand>
              <button type="button" onClick={handleNextOrder}>
                Finalizar pagamento
              </button>
              <button type="button" onClick={handlePreviousStep}>
                Voltar para edição de endereço
              </button>
            </BackSand>
          </Sidebar>
        )}
        {currentStep === 'order' && (
          <Sidebar>
            <BackSand>
              <h2>Pedido realizado - ORDER_ID </h2>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.{' '}
                <br />
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
                <br />
                <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição. <br /> <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </BackSand>
            <Finalizar
              title="Clique aqui para finalizar"
              type="button"
              onClick={closeFinish}
            >
              Finalizar
            </Finalizar>
          </Sidebar>
        )}
      </PayContainer>
    </form>
  )
}

export default CardPay
