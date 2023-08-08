import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.WORDPRESS_API_URL,
  config: {
    skipTypename: true,
    enumsAsTypes: true,
    scalars: {
      numeric: "number",
    },
  },
  documents: "lib/queries/*",
  generates: {
    "lib/gql/": {
      preset: "client",
      config: {},
      plugins: [],
    },
  },
};

export default config;
