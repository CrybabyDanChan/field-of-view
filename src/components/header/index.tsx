import React from 'react';
import Link from 'next/link';

import HeaderWrapper from '@/components/header/header.style';
import {HOME, COMPONENTS} from '@/routes';

const Header = () => {
  return <HeaderWrapper>
    <header className="header">
      <nav className="header__menu">
        <div className="header__menu-item">
          <Link href={HOME}>Home</Link>
        </div>
        <div className="header__menu-item">
          <Link href={COMPONENTS}>Components</Link>
        </div>
      </nav>
    </header>
  </HeaderWrapper>;
};

export default Header;
