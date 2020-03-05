import { API, graphqlOperation } from 'aws-amplify'
import gql from 'graphql-tag'

export const get = (query, variables, alias) => {
  return API.graphql(graphqlOperation(gql(query), variables))
    .then(res => {
      const data = Object.values(res.data)[0]
      if(!alias) return data

      return {
        [alias]: data.items ? data.items : data
      }
    })
}

export const post = (mutation, input) => {
  return API.graphql(graphqlOperation(gql(mutation), {
    input
  }))
}

export const subscribe = (subscription, alias = 'data', callback) => (
  API.graphql(graphqlOperation(gql(subscription))).subscribe({
    next: data => {
      callback(data);
    }
  })
)