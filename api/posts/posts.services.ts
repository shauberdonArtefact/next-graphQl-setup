import {
  GetPostByIdDocument,
  GetPostsListDocument,
  SearchPostsDocument,
} from "@/lib/gql/graphql";
import { gqlClient } from "../graphql-client";

export const getPosts = async () => {
  gqlClient.requestConfig.cache = "no-cache";
  const data = await gqlClient.request(GetPostsListDocument);
  return data?.posts?.edges;
};

export const getPostById = async (id: string) => {
  const data = await gqlClient.request(GetPostByIdDocument, { id });
  return data?.post?.content;
};

export const searchPosts = async (value: string) => {
  const data = await gqlClient.request(SearchPostsDocument, { value });
  return data?.posts?.edges;
};
