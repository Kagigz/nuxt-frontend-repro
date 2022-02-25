// import { useQuery, useResult } from '@vue/apollo-composable'

// import { GET_TALKS } from './queries'

// export const getTalks = () => {
//   return useQuery(GET_TALKS)
// }

export const getTalks = async({ $axios }) => {
  const data = await $axios.$get('http://localhost:1337/talks')
  console.log(data)
}
