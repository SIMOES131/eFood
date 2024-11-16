import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { close as closeCard } from '../../store/reducers/card'
import { open as openCart, close as closeCart } from '../../store/reducers/cart'
import { openPay } from '../../store/reducers/pay'
import {
  CardContainer,
  FistData,
  Overlay,
  SecondData,
  Complement,
  SidebarCard,
  SendOrBack as SandBack
} from './styles'

import CardPay from '../CardPay'
import classNames from 'classnames'

const Card = () => {
  const { isOpen: isCardOpen } = useSelector((state: RootReducer) => state.card)
  const { isOpen: isCardPayOpen } = useSelector(
    (state: RootReducer) => state.pay
  )

  const { isOpen: isCartOpen } = useSelector((state: RootReducer) => state.cart)

  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const closeCardAndOpenCart = () => {
    dispatch(closeCard())
    dispatch(openCart())
  }

  const closeCardCartAndOpenCardPay = () => {
    dispatch(closeCard())
    dispatch(openPay())
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
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(7, 'O código postal precisa ter pelo menos 8 caracteres')
        .max(8, 'O código postal precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        3,
        'O nome precisa ter pelo menos 3 caracteres'
      ),
      number: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caractere')
        .required('O campo é obrigatório'),
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
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isIvalid = fieldName in form.errors
    return isTouched && isIvalid ? 'error' : ''
  }

  return (
    <form onSubmit={form.handleSubmit}>
      {isCardPayOpen ? (
        <CardPay />
      ) : (
        <CardContainer className={isCardOpen ? 'is-open' : ''}>
          <Overlay onClick={() => dispatch(closeCard())} />{' '}
          <SidebarCard>
            <h2>Entrega</h2>
            <FistData>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
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
            <SecondData>
              <div>
                <label htmlFor="zipCode">CEP</label>
                <InputMask
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={classNames('base-class', {
                    error: checkInputHasError('zipCode')
                  })}
                  mask="99999999"
                />
              </div>
              <div>
                <label htmlFor="number">Número</label>
                <InputMask
                  id="number"
                  type="text"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={classNames('base-class', {
                    error: checkInputHasError('number')
                  })}
                  mask="999.999.999"
                />
              </div>
            </SecondData>
            <Complement>
              <label htmlFor="complement">Complemento</label>
              <input
                id="complement"
                type="text"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={classNames('base-class', {
                  error: checkInputHasError('complement')
                })}
              />
            </Complement>
            <SandBack>
              <button
                title="Clique aqui para continuar com o pagamento"
                type="submit"
                onClick={closeCardCartAndOpenCardPay}
              >
                Continuar com o pagamento
              </button>
              <button
                title="Clique aqui para voltar para o carrinho"
                type="button"
                onClick={closeCardAndOpenCart}
              >
                Voltar para o carrinho
              </button>
            </SandBack>
          </SidebarCard>
        </CardContainer>
      )}
    </form>
  )
}

export default Card
