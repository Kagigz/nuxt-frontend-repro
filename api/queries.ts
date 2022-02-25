import gql from 'graphql-tag'

export const GET_POSTS = gql`
  query posts {
    posts(first: 20) {
      id
      title
    }
  }
`

export const GET_TALKS = gql`
  query talks {
    talks {
      id
      attributes {
        title
        event
        date
        description
      }
    }
  }
`
