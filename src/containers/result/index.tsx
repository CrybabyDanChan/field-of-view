import React, {
  FC,
  useEffect,
  useState,
} from 'react';
import {connect} from 'react-redux';

import ResultWrapper from '@/containers/result/result.style';
import {State} from '@/store/reducer';
import {useRouter} from 'next/router';

type ResultProps = {
  words: string[],
  children?: never,
  numberWords: number,
  numberLetters: number,
  speed: number,
}

const Result: FC<ResultProps> = (props: ResultProps) => {
  const {
    words,
    numberWords,
    numberLetters,
    speed,
  } = props;

  const {push: historyPush} = useRouter();
  const [word, setWord] = useState('');

  const getRandomInteger = (min: number, max: number): number => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const gerRandomWordsOrder = (words: string[]): string[] => {
    const randomWords = [];
    let indexWords = words.map((word, index) => index);

    for (let i = 0; i <= words.length; i++) {
      const randomIndex = indexWords[getRandomInteger(0, indexWords.length)];

      randomWords[randomIndex] = words[i];
      indexWords = indexWords.filter((index) => index !== randomIndex);
    }

    return randomWords;
  };

  const getWordsSortingByNumber = (words: string[]): string[] =>
    words.filter((word, i) => i < numberWords);

  const getWordsSortingByLetters = (words: string[]): string[] =>
    words.filter((word, i) => words.length <= numberLetters);

  useEffect(() => {
    const randomWords = gerRandomWordsOrder(words);
    const wordsWithNumber = getWordsSortingByNumber(randomWords);
    const wordsWithLetters = getWordsSortingByLetters(wordsWithNumber);
    const interval = speed * 1000;
    let index = 0;

    const wordsInterval = setInterval(() => {
      if (wordsWithLetters.length < index) {
        clearInterval(wordsInterval);
        // historyPush('COMPLETED');
      }

      setWord(wordsWithLetters[index]);
      index++;
    }, interval);

    return () => clearInterval(wordsInterval);
  }, []);

  return <ResultWrapper>
    <section className="result">
      <div className="result__word">
        sadsads
      </div>
    </section>
  </ResultWrapper>;
};

const mapStateToProps = (state: State) => {
  const {
    words,
    numberWords,
    numberLetters,
    speed,
  } = state;

  return {
    words,
    numberWords,
    numberLetters,
    speed,
  };
};

export default connect(mapStateToProps)(Result);
