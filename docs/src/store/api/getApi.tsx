import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface DummyGetUsers {
  id: string;
  name: string;
  username: string,
  email: string,
  address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
      lat: string,
      lng: string
      }
  }
}[]

export const dummyApi = createApi({
  reducerPath: 'dummyDataApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getDummyList: builder.query<any, string>({
      query: (list) => `${list}`,
    }),
  }),
})

export const { useGetDummyListQuery } = dummyApi