import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

export const gql = GraphQLTag;

export function CMSGraphQLClient() {
   const TOKEN = process.env.REACT_APP_GRAPH_CMS_DATA;
 
  const DataCMSURL = 'https://api-sa-east-1.graphcms.com/v2/ckzmih1w24g1001xz4kig8hk2/master';
  const client = new GraphQLClient(DataCMSURL, {
    headers: {
         Authorization: `Bearer ${TOKEN}`
    },
  });

  return { 
    async query({ query }) {
      const messages = await client.request(query);

      return {
        data: {
          messages,
        },
      };
    },
  };
}
