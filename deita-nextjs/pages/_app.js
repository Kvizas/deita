import MeilisearchContextProvider from "../contexts/meilisearch-context/meilisearch-context";
import UserContextProvider from "../contexts/user-context/user-context";
import { ApolloProvider } from '@apollo/client';
import apollo from "../helpers/apollo-client";
import "../sass/index.sass";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apollo}>
      <UserContextProvider>
        <MeilisearchContextProvider>
          <Component {...pageProps} />
        </MeilisearchContextProvider>
      </UserContextProvider>
    </ApolloProvider>
  )
}
