import React from 'react';

import CompletedWrapper from '@/containers/completed/completed.style';

const Completed = () => {
  return <CompletedWrapper>
    <section className="completed">
      <img
        className="completed__img"
        src="/images/completed.svg"
        alt="completed"
      />
      <h1 className="completed__title">Отличная работа!</h1>
    </section>
  </CompletedWrapper>;
};

export default Completed;
