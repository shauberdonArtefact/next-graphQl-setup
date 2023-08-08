import { gqlClient } from "../graphql-client";
import { GET_POSTS, GET_POST } from "./posts.queries";

export const getPosts = async () => {
  const data = await gqlClient.request(GET_POSTS);
  return data;
};

export const getPostById = async (id: string) => {
  const data = await gqlClient.request(GET_POST);
  return data;
};
