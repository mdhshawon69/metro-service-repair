import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }

  if (typeof window !== "undefined") {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
