import React, {FC} from 'react';

import Header from '@/components/header';
import HeaderProps from '@/types/header.type';
import AppLayoutWrapper from '@/layouts/appLayout/appLayout.style';

const AppLayout: FC<HeaderProps> = (props: HeaderProps) => {
  const {children} = props;

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
