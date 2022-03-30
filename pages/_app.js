import '../styles/globals.css';
import { StoreProvider } from '../components/Store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import { useEffect } from 'react';
import { getSession, SessionProvider} from "next-auth/react"


Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const { data: session } = getSession()

MyApp.getInitialProps = async () => {

  return {
    pageProps: {
      session,
      commercePublicKey: process.env.COMMERCE_PUBLIC_KEY,
    },
  };
};


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <SessionProvider session={session}>
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
    </SessionProvider>
  );
}

export default MyApp;
