import { ApolloClient, InMemoryCache } from "@apollo/client";

export const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL!;

export const gqlClient = new ApolloClient({
  uri: WORDPRESS_API_URL,
  cache: new InMemoryCache(),
});
