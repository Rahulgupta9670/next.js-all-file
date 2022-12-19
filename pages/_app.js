import { SessionProvider } from "next-auth/react";
import "../styles/Home.module.css";
import "../styles/globals.css";
import { useState } from "react";
import Router from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(Router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    Router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    Router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      Router.events.off("routeChangeStart", hideContent);
      Router.events.off("routeChangeComplete", authCheck);
    };
    console.log("data", )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url) {
    const tokens = localStorage.getItem("jwt");
    // redirect to login page if accessing a private page and not logged in
    setUser(tokens);
    const publicPaths = ["/", "/"];
    const path = url.split("?")[0];
    if (!tokens && !publicPaths.includes(path)) {
      setAuthorized(false);
      Router.push({
        pathname: "/",
        query: { returnUrl: Router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }

  return <>{authorized && <Component {...pageProps} />}</>;
}
export default MyApp;
