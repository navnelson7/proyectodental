import { ApolloClient, InMemoryCache } from "@apollo/client";

import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from '@apollo/client/link/context';


const httpLink = new HttpLink({
  uri: process.env.REACT_APP_BACKEND_URL,
});

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_BACKEND_WS_URL,
  options: {
    reconnect: true,
    connectionParams: {
      "content-type": "application/json",
      "x-hasura-admin-secret": "Ejdental@@2020"
    },
  },
});

//AUTH
const authLink = setContext(() => {
  return {
    headers: {
      "x-hasura-admin-secret": "Ejdental@@2020"
    }
  }
});


const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);
export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})