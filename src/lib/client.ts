import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { fragmentRegistry } from "./apollo-fragment-registry";

import { onError } from "@apollo/client/link/error";
import { GRAPHQL_API, GRAPHQL_API_KEY } from "../constants";

// 错误处理链接
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
  }
})

// HTTP 链接
const httpLink = new HttpLink({
  uri: GRAPHQL_API, // GraphQL 服务器地址
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${GRAPHQL_API_KEY}` // 从环境变量中获取 API Key
  }
})

// 创建 Apollo 客户端
const client = new ApolloClient({
  link: from([errorLink, httpLink]), // 组合链接
  cache: new InMemoryCache({
    fragments: fragmentRegistry
  }), // 缓存实现
})

class YeapClient {
  constructor() {

  }

  static setup(options: {
    uri: string,
    apiKey: string
  }) {
    // HTTP 链接
    const httpLink = new HttpLink({
      uri: options.uri, // GraphQL 服务器地址
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${options.apiKey}` // 从环境变量中获取 API Key
      }
    })

    // 创建 Apollo 客户端
    const client = new ApolloClient({
      link: from([errorLink, httpLink]), // 组合链接
      cache: new InMemoryCache({
        fragments: fragmentRegistry
      })
    })

    return client
  }
}

export { client,YeapClient }
