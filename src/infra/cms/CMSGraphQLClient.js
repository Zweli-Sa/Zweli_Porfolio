import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

export const gql = GraphQLTag;

export function CMSGraphQLClient() {
   const TOKEN = process.env.REACT_APP_GRAPH_CMS_DATA;
   //console.log(process.env.REACT_APP_GRAPH_CMS_DATA)
  //const TOKEN = eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDQ4NDMyODIsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2Nrem1paDF3MjRnMTAwMXh6NGtpZzhoazIvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMjgxMjZhYjUtNjVmYi00ZmNhLWEzMTYtODRiYTlkZDlkZmMyIiwianRpIjoiY2t6bXA3emp2NHUxNDAxeG84MXI1NTF1eiJ9.pVIKeHuVVPNslZkKRw0l2dYHQPnHeNN-WzWSkOrAu9WNw6x07v-w-6Ce2DaovgWdL5FV2IsfJikA1jspKR1zFCZZ7AB3YgK601cuQ14CziVKRO--NQA4fWfjjxisUhAsctYOa8JCJyUA7WtKxNGmBAU4XccDMuZwvgeY2MkXOnp6Tl1jx1vWJGcGt2lJP0HgIoot86d-0Q1C4uyvqcuu4VLZDNpK5S2WQyiyHuOErFGmtUF1NlI8XBhBhXB7UxzdAVKg-LYTSl8nvF2f1YlsxtqCUhRsDSkYTQgQ8K-avyU6FPeLqf_WVQL6rrKBhchJys8bE340qzM0mtsLpsP4WEBNWGqwFJnZn0ZHcoON_d8l9uq-siX6gI_5uDOLMRYa8KFwuYOz0_hGe90wgqPpXOq57Anv5_GWGXm6IaAaBtACPKWoQ8jM-U0Pp0q18WSjgqcZlAMa9PbknyWsCEdCYsTSaHwgDsSC4Whu1pE706z1zEvClFs6vNAsTe2iR3wu52dZKLM2oe3Gm8pe305zWYnlzuAx4QYI_bOBEHcHvM-Gvia4me0BfUYXJs--V5zpImNaKVAMj8oM9OFgvMd5s0nn_TpW0F2MkU5ZPdL937-3vAR8q3OUPpN-MPRpDvkEIOzuypp6oT6ExGD5iehfDNwtTBDfuzY_WRvGkYW5_A0;
  const DatoCMSURL = 'https://api-sa-east-1.graphcms.com/v2/ckzmih1w24g1001xz4kig8hk2/master';
  const client = new GraphQLClient(DatoCMSURL, {
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
