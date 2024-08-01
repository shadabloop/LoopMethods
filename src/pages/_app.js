import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import { useRouter } from "next/router";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  // for animation 
  useEffect(() => {
    aos.init();
  }, []);
  // List of routes that should not include the Layout
  const noLayoutRoutes = ['/404', '/500','/contact-us'];

  // Check if the current route matches any route in noLayoutRoutes
  const isNoLayoutRoute = noLayoutRoutes.includes(router.pathname);

  return (
    <>
      {isNoLayoutRoute ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
