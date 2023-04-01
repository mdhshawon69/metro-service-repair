import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "aos/dist/aos.css";
import "@splidejs/react-splide/css";
import Aos from "aos";
import localFont from "@next/font/local";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const noirrit = localFont({
  src: [
    {
      path: "../public/assets/fonts/Li Ador Noirrit A-V1 Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/assets/fonts/Li Ador Noirrit A-V1 Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-noirrit",
});

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
      <main className={`${noirrit.variable} font-sans`}>
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
