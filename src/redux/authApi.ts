import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface IUser {
    _id?: string
    name: string
    email: string
    phone: string
    password: string,
    role?: string,
    username?: string
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://micro-auth-backend-pu24.vercel.app/api", credentials: "include" }),
    tagTypes: ["auth"],
    endpoints: (builder) => {
        return {

            register: builder.mutation({
                query: userData => {
                    return {
                        url: "/register",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["auth"]
            }),
            login: builder.mutation({
                query: userData => {
                    return {
                        url: "/login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: (data: { result: IUser }) => {
                    localStorage.setItem("user", JSON.stringify(data.result))
                    return data.result
                },
                invalidatesTags: ["auth"]
            }),
            logout: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout",
                        method: "POST",
                        body: userData
                    }
                },
                // transformResponse:
                invalidatesTags: ["auth"]
            }),

        }
    }
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation
} = authApi
