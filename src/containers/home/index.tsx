import React, {FC} from 'react';
import {connect} from 'react-redux';
import {useRouter} from 'next/router';

import HomeWrapper from '@/containers/home/home.style';
import * as fieldOfViewActions from '@/store/action';
import {State} from '@/store/reducer';
import {
  SetDistanceAction,
  SetNumberLettersAction,
  SetNumberWordsAction,
  SetSpeedAction, SetStartingDistanceAction,
} from '@/store/types';
import Range from '@/components/range';
import Button from '@/components/button';
import Counter from '@/components/counter';

type HomeProps = {
  children?: never,
  numberWords: number,
  numberLetters: number,
  speed: number,
  startingDistance: number,
  distance: number,
  setNumberWords: (value: number) => SetNumberWordsAction,
  setNumberLetters: (value: number) => SetNumberLettersAction,
  setSpeed: (value: number) => SetSpeedAction,
  setStartingDistance: (value: number) => SetStartingDistanceAction,
  setDistance: (value: number) => SetDistanceAction
}

const Home: FC<HomeProps> = (props: HomeProps) => {
  const {
    numberWords,
    numberLetters,
    speed,
    startingDistance,
    distance,
    setDistance,
    setStartingDistance,
    setNumberWords,
    setNumberLetters,
    setSpeed,
  } = props;

  const {push: historyPush} = useRouter();

  return <HomeWrapper>
    <section className="home">
      <div className="home__item">
        <Range
          title="Сколько слов"
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          name="words"
          type="range"
          min="1"
          max="10"
          step="1"
          value={numberWords}
          handleRange={setNumberWords}
        />
      </div>
      <div className="home__item">
        <Range
          options={[5, 10, 15, 20, 25, 30, 35, 40]}
          name="letters"
          title="Стартовое расстояние"
          min="5"
          max="40"
          step="5"
          value={startingDistance}
          handleRange={setStartingDistance}
        />
      </div>
      <div className="home__item">
        <Range
          options={[3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          name="letters"
          title="Сколько букв в словах"
          min="3"
          max="13"
          step="1"
          value={numberLetters}
          handleRange={setNumberLetters}
        />
      </div>
      <div className="home__item">
        <Range
          options={[5, 10, 15, 20, 25, 30, 35, 40]}
          name="letters"
          title="Увеличение расстояние"
          min="5"
          max="40"
          step="5"
          value={distance}
          handleRange={setDistance}
        />
      </div>
      <div className="home__item">
        <Counter
          name="speed"
          title="Скорость"
          value={speed}
          step={0.5}
          handleCounter={setSpeed}
        />
      </div>
      <Button
        extends={{
          onClick: () => historyPush('/result'),
        }}
      >
        Старт
      </Button>
    </section>
  </HomeWrapper>;
};

const mapStateToProps = (state: State) => {
  const {
    numberWords,
    numberLetters,
    speed,
    startingDistance,
    distance,
  } = state;

  return {
    numberWords,
    numberLetters,
    speed,
    startingDistance,
    distance,
  };
};

export default connect(mapStateToProps, fieldOfViewActions)(Home);
