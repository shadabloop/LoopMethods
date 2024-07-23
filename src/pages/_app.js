import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // List of routes that should not include the Layout
  const noLayoutRoutes = ['/404', '/500'];

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
