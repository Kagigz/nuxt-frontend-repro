// import fetch from 'isomorphic-fetch'

// import {
//   ApolloClient,
//   InMemoryCache,
//   createHttpLink,
// } from '@apollo/client/core'
// import { DefaultApolloClient } from '@vue/apollo-composable'
// import { defineNuxtPlugin } from '#app'

// export default defineNuxtPlugin((nuxtApp) => {
//   const apolloClient = new ApolloClient({
//     cache: new InMemoryCache(),
//     uri: process.env.API_ENDPOINT ?? 'http://localhost:1337/graphql',
//   })
//   nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
// })
// const provideApollo = (nuxtApp) => {
//   const httpLink = createHttpLink({
//     uri: process.env.API_ENDPOINT ?? 'http://localhost:1337/graphql',
//     fetch: (uri, options) => {
//       return fetch(uri, options)
//     },
//   })

//   const apolloClient = new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache(),
//   })

//   nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
//   nuxtApp.provide('apollo', apolloClient)
// }

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.hook('app:rendered', () => {
//     provideApollo(nuxtApp)
//   })
// })
