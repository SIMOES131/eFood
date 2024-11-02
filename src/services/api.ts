import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Restaurant from '../componets/models/restaurant'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<Restaurant, void>({
      query: () => 'restaurant'
    }),
    getRestaurat: builder.query<Restaurant, string>({
      query: (id) => `categories/${id}`
    })
  })
})

export const { useGetFeaturedRestaurantQuery, useGetRestauratQuery } = api

export default api
