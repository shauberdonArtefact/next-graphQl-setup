import { GraphQLClient } from "graphql-request";

export const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL!;

export const gqlClient = new GraphQLClient(WORDPRESS_API_URL, {
  fetch,
  next: { revalidate: 10 },
});
