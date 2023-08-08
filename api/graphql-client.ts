import { GraphQLClient } from "graphql-request";

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL ?? "";

export const gqlClient = new GraphQLClient(WORDPRESS_API_URL, { fetch });
