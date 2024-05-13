import "@/styles/globals.css";
import "@/styles/reset.css";
import "@/components/Header/header.css";
import "@/components/Country/country.css";
import "@/components/listCountries/listCountries.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4010",
  cache: new InMemoryCache({ addTypename: false }),
  // defaultOptions: {
    // watchQuery: { fetchPolicy: "no-cache", nextFetchPolicy: "no-cache" },
  // },
});
interface ComponentWithTitle extends AppProps {
  Component: NextComponentType<NextPageContext, any, any> & {
    title?: string;
  };
}

function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  </>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
