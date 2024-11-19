import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Restaurant from '../componets/models/restaurant'

type Product = {
  id: 1
  price: 0
}

type PurchasePayload = {
  items: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: string
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      cardNumber: string
      code: string
      expires: {
        month: string
        year: string
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<Restaurant, void>({
      query: () => 'restaurantes'
    }),
    getFeaturedRestauratPortugues: builder.query<Restaurant[], void>({
      query: () => 'portugues'
    }),
    getFeaturedRestauratItaliano: builder.query<Restaurant[], void>({
      query: () => 'italiana'
    }),
    getFeaturedRestauratArabe: builder.query<Restaurant[], void>({
      query: () => 'arabe'
    }),
    getFeaturedRestauratJapones: builder.query<Restaurant[], void>({
      query: () => 'japonesa'
    }),
    getFeaturedRestauratPizzaria: builder.query<Restaurant[], void>({
      query: () => 'pizzaria'
    }),
    getFeaturedRestauratVegano: builder.query<Restaurant[], void>({
      query: () => 'vegano'
    }),
    getRestaurat: builder.query<Restaurant[], string>({
      query: (id) => `restaurant/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedRestaurantQuery,
  useGetFeaturedRestauratPortuguesQuery,
  useGetFeaturedRestauratItalianoQuery,
  useGetFeaturedRestauratArabeQuery,
  useGetFeaturedRestauratJaponesQuery,
  useGetFeaturedRestauratVeganoQuery,
  useGetFeaturedRestauratPizzariaQuery,
  useGetRestauratQuery,
  usePurchaseMutation
} = api

export default api
