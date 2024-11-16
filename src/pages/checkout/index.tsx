import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'
import * as Yup from 'yup'

import { useSelector } from 'react-redux'

export const Checkout = () => {
  const [purchase] = usePurchaseMutation()

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
        .min(8, 'O código postal precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        3,
        'O nome precisa ter pelo menos 3 caracteres'
      ),
      number: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caractere')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O mês precisa ter 2 dígitos')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(4, 'O ano precisa ter 4 dígitos')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O código precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório')
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

  return <form onSubmit={form.handleSubmit}>{/* Campos do formulário */}</form>
}
