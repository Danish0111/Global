import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css"; // Ensure global styles are imported for the loader

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true); // Show loader on route change start
    const handleComplete = () => setLoading(false); // Hide loader on route change complete

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && <div className="loader">Loading...</div>} {/* Your Loader */}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
