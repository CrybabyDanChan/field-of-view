import {
  SET_DISTANCE,
  SET_INIT_STATE,
  SET_NUMBER_LETTERS,
  SET_NUMBER_WORDS,
  SET_SPEED,
  SET_STARTING_DISTANCE,
  SetDistanceAction,
  SetInitStateAction,
  SetNumberLettersAction,
  SetNumberWordsAction,
  SetSpeedAction,
  SetStartingDistanceAction,
} from '@/store/types';

export function setNumberWords(value: number): SetNumberWordsAction {
  return {
    type: SET_NUMBER_WORDS,
    payload: value,
  };
}

export function setNumberLetters(value: number): SetNumberLettersAction {
  return {
    type: SET_NUMBER_LETTERS,
    payload: value,
  };
}

export function setSpeed(value: number): SetSpeedAction {
  return {
    type: SET_SPEED,
    payload: value,
  };
}

export function setDistance(value: number): SetDistanceAction {
  return {
    type: SET_DISTANCE,
    payload: value,
  };
}

export function setStartingDistance(value: number): SetStartingDistanceAction {
  return {
    type: SET_STARTING_DISTANCE,
    payload: value,
  };
}

export function setInitState(): SetInitStateAction {
  return {
    type: SET_INIT_STATE,
  };
}


