import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tools-shop-server.vercel.app/api/',
    // prepareHeaders: headers => {
    //   headers.set('Authorization', 'Bearer your-token');
    //   return headers;
    // },
  }),
  tagTypes: ['Tools', 'Users', 'Stores'],
  endpoints: builder => ({
    getTools: builder.query({
      query: params => {
        return { url: `tools`, params };
      },
      providesTags: ['Tools'],
    }),
    getToolById: builder.query({
      query: toolId => ({
        url: `tools/byId`,
        params: { toolId },
      }),
      providesTags: ['Tools'],
    }),
    signupUser: builder.mutation({
      query: userInfo => ({
        url: `users/signup`,
        method: 'POST',
        body: userInfo,
      }),
      invalidatesTags: ['Users'],
    }),
    reVerification: builder.mutation({
      query: userInfo => ({
        url: `users/verify`,
        method: 'POST',
        body: userInfo,
      }),
      invalidatesTags: ['Users'],
    }),
    loginUser: builder.mutation({
      query: userInfo => ({
        url: `users/login`,
        method: 'POST',
        body: userInfo,
      }),
      invalidatesTags: ['Users'],
    }),
    logoutUser: builder.mutation({
      query: token => ({
        url: `users/logout`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Users'],
    }),
    getCurrentUser: builder.mutation({
      query: token => ({
        url: `users/currentUser`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Users'],
    }),
    changePassword: builder.mutation({
      query: email => ({
        url: `users/changePasswordRequest`,
        method: 'PATCH',
        body: { email },
      }),
      invalidatesTags: ['Users'],
    }),
    getAllStores: builder.query({
      query: token => ({
        url: `stores/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Stores'],
    }),
    // loginUser: builder.mutation({
    //   query: userInfo => ({
    //     url: `users/login`,
    //     method: 'POST',
    //     body: userInfo,
    //   }),
    //   // invalidatesTags: ['Contacts'],
    // }),
    // logoutUser: builder.mutation({
    //   query: () => ({
    //     url: `users/logout`,
    //     method: 'POST',
    //   }),
    //   // invalidatesTags: ['Contacts'],
    // }),
    // getUser: builder.query({
    //   query: () => `users/current`,
    //   // invalidatesTags: ['Contacts'],
    // }),
    // getAllContacts: builder.query({
    //   query: () => `contacts`,
    //   providesTags: ['Contacts'],
    // }),
    // addContact: builder.mutation({
    //   query: newContact => ({
    //     url: `contacts`,
    //     method: 'POST',
    //     body: newContact,
    //   }),
    //   invalidatesTags: ['Contacts'],
    // }),
    // deleteContact: builder.mutation({
    //   query: contactId => ({
    //     url: `contacts/${contactId}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Contacts'],
    // }),
    // updateContact: builder.mutation({
    //   query: (contactId, updateContact) => ({
    //     url: `contacts/${contactId}`,
    //     method: 'PATCH',
    //     body: updateContact,
    //   }),
    //   invalidatesTags: ['Contacts'],
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetToolsQuery,
  useGetToolByIdQuery,
  useSignupUserMutation,
  useReVerificationMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetCurrentUserMutation,
  useChangePasswordMutation,
  useGetAllStoresQuery,
  //   useLoginUserMutation,
  //   useLogoutUserMutation,
  //   useGetUserQuery,
  //   useAddContactMutation,
  //   useGetAllContactsQuery,
  //   useDeleteContactMutation,
  //   useUpdateContactMutation,
} = api;

// {phone: '+380638273948', email: 'tarassirenko71@gmail.com', password: '24cfbg09'}
