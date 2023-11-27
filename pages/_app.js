import { appWithTranslation } from 'next-i18next';
import Layout from '@/components/layout/Layout';
import { Provider } from 'react-redux';
import store from '@/global/store';
import '@/styles/globals.css'
function App ( { Component, pageProps } )
{
  return (
    <Provider store={ store }>
      <Layout>
        <Component { ...pageProps } />
      </Layout>
    </Provider>
  );
}

export default appWithTranslation( App );