import type {AppProps} from 'next/app';
import {FC} from 'react';
import {createGlobalStyle} from 'styled-components';
import styledNormalize from 'styled-normalize';

import '../styles/globals.css';
import AppLayout from '@/layouts/appLayout';
import {wrapper} from '@/store';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`;

const MyApp: FC<AppProps> = (props: AppProps) => {
  const {Component, pageProps} = props;

  return <AppLayout>
    <GlobalStyle />
    <Component {...pageProps} />
  </AppLayout>;
};

export default wrapper.withRedux(MyApp);

