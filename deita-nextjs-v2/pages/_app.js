import { MathJaxContext } from "better-react-mathjax";
import MeilisearchContextProvider from "../contexts/meilisearch-context/meilisearch-context";
import UserContextProvider from "../contexts/user-context/user-context";
import "../sass/index.sass";

export default function App({ Component, pageProps }) {
  const config = {
    "fast-preview": {
      disabled: true
    },
    tex2jax: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    },
    messageStyle: "none"
  };

  return (
    <UserContextProvider>
      <MeilisearchContextProvider>
        <MathJaxContext
          version={3}
          config={config}
        >
          <Component {...pageProps} />
        </MathJaxContext>
      </MeilisearchContextProvider>
    </UserContextProvider>
  )
}
