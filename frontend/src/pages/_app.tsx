import "@/styles/globals.css";
import "@/styles/reset.css";
import "@/components/Header/header.css";
import "@/components/Country/country.css";
import "@/components/listCountries/listCountries.css";
import "@/pages/ViewCountry/viewCountry.css";

import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Header from "@/components/Header/Header";

const client = new ApolloClient({
  uri: "http://localhost:4010",
  cache: new InMemoryCache({ addTypename: false }),
});


function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  </>
  );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
