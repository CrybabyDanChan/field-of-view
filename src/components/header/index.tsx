import React from 'react';
import Link from 'next/link';

import HeaderWrapper from '@/components/header/header.style';
import {useRouter} from 'next/router';
import {HOME} from '@/routes';

const logo = '/images/logo.svg';

const Header = () => {
  const {route} = useRouter();

  return <HeaderWrapper>
    <header className="header">
      <div className="header__item" />
      {route === HOME &&
      <div className="header__item">
        Тренажер «Поле зрения»
      </div>}
      <div className="header__item">
        <div className="header__link">
          <Link href={HOME}>
            <img className="header__img" src={logo} alt="logo"/>
          </Link>
        </div>
      </div>
    </header>
  </HeaderWrapper>;
};

export default Header;
