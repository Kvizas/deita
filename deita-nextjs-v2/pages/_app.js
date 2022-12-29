import MeilisearchContextProvider from "../contexts/meilisearch-context/meilisearch-context";
import UserContextProvider from "../contexts/user-context/user-context";
import "../sass/index.sass";

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <MeilisearchContextProvider>
          <Component {...pageProps} />
      </MeilisearchContextProvider>
    </UserContextProvider>
  )
}
