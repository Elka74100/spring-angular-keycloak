import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../../app/store'


export const homeApiSlice = createApi({
    reducerPath: 'fooApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8081/api/',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).token.value
            if (token) {
              headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
          },
    }),
    tagTypes: [],
    endpoints: builder => ({})

})

