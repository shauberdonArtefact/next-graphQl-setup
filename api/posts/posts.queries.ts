export const GET_POSTS = `
  query getPostsList {
    posts {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;

export const GET_POST = `
  query getPostById($id: ID!) {
    post(id: $id, idType: SLUG) {
      content
    }
  }
`;
