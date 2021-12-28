import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { realmApp } from "./realm";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_REALM_GRAPHQL_URI,
});

const authLink = setContext(async (operation, prevContext) => {
  if (prevContext.refreshToken) {
    await realmApp.currentUser?.refreshCustomData();
  }

  return {
    headers: {
      ...prevContext.headers,
      Authorization: `Bearer ${realmApp.currentUser?.accessToken}`,
    },
  };
});

const errorLink = onError(({ networkError, operation, forward }) => {
  if ((networkError as any)?.statusCode === 401) {
    operation.setContext({ refreshToken: true });
    return forward(operation);
  }
});

const apolloClient = new ApolloClient({
  link: from([authLink, errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export { apolloClient };
