import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "aos/dist/aos.css";
import "@splidejs/react-splide/css";
import Aos from "aos";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
    Aos.init();
  }, []);
  if (!showChild) {
    return null;
  }

  if (typeof window !== "undefined") {
    return (
      <main>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </main>
    );
  }
}

export default MyApp;
