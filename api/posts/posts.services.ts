import {
  GetPostByIdDocument,
  GetPostsListDocument,
  SearchPostsDocument,
} from "@/lib/gql/graphql";
import { gqlClient } from "../graphql-client";

export const getPosts = async () => {
  const data = await gqlClient.query({
    query: GetPostsListDocument,
    fetchPolicy: "no-cache",
  });
  return data?.data?.posts?.edges;
};

export const getPostById = async (id: string) => {
  const data = await gqlClient.query({
    query: GetPostByIdDocument,
    variables: { id },
  });
  return data?.data.post?.content;
};

export const searchPosts = async (value: string) => {
  const data = await gqlClient.query({
    query: SearchPostsDocument,
    variables: { value },
  });
  return data?.data?.posts?.edges;
};
