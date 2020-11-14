import React, { Fragment } from 'react'
import { AppProps } from 'next/app';
import PropTypes from 'prop-types';
import '../styles/globals.css'
import '../styles/tailwind.css'
import Header from '../components/navigators/Header';
import AuthProvider from '../src/auth/AuthProvider';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <AuthProvider>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </AuthProvider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App
