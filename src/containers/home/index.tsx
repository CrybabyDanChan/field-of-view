import React, {FC} from 'react';

import HomeWrapper from '@/containers/home/home.style';

type HomeProps = {
  children?: never,
  numberWords: number,
  numberLetters: number,
  speed: number,
  startingDistance: number,
  distance: number,
}

const Home: FC<HomeProps> = (props: HomeProps) => {
  console.log();
  return <HomeWrapper>
    <section className="home">
      home
    </section>
  </HomeWrapper>;
};

export default Home;
