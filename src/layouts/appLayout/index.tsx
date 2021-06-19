import React, {FC} from 'react';

import Header from '@/components/header';
import HeaderProps from '@/types/header.type';
import AppLayoutWrapper from '@/layouts/appLayout/appLayout.style';

const AppLayout: FC<HeaderProps> = (props: HeaderProps) => {
  const {children} = props;

  const input: Array<{ from: string, to: string }> = [
    {from: 'a', to: 'c'},
    {from: 'c', to: 'b'},
    {from: 'b', to: 'd'},
    {from: 'd', to: 'e'},
  ];

  const generateTrack = (data: Array<{ from: string, to: string }>) => {
    const track = [];
    const trackList = data.map(({from, to}) => ({[from]: to}));
  };

  generateTrack(input);

  return <AppLayoutWrapper>
    <section className="app-layout">
      <Header />
      <main className="app-layout__main">
        {children}
      </main>
    </section>
  </AppLayoutWrapper>;
};

export default AppLayout;
