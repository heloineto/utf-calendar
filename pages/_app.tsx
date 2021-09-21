import { AppProps } from 'next/app';
import { useEffect } from 'react';

import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  /**
   * Removing the server side injected CSS to make material-ui work with
   * server-side generation
   */
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles?.parentElement)
      jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  // prettier-ignore
  return (<Component {...pageProps} />);
};

export default MyApp;
