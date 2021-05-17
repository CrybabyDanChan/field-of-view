import {FieldOfViewActionTypes} from '@/store/types';

export interface State {
  words: string[];
  numberWords: number,
  numberLetters: number,
  speed: number,
  startingDistance: number,
  distance: number,
}

const initState: State = {
  words: ['Человек',
    'год',
    'время',
    'дело',
    'жизнь',
    'день',
    'рука',
    'раз',
    'работа',
    'слово',
    'место',
    'лицо',
    'друг',
    'глаз',
    'вопрос',
    'дом',
    'сторона',
    'страна',
    'мир',
    'случай',
    'голова',
    'ребенок',
    'сила',
    'конец',
    'вид',
    'система',
    'часть',
    'город',
    'отношение',
    'женщина',
    'деньги',
    'земля',
    'машина',
    'вода',
    'отец',
    'проблема',
    'час',
    'право',
    'нога',
    'решение',
    'дверь',
    'образ',
    'история',
    'власть',
    'закон',
    'война',
    'бог',
    'голос',
    'тысяча',
    'книга',
    'возможность',
    'результат',
    'ночь',
    'стол',
    'имя',
    'область',
    'статья',
    'число',
    'компания',
    'народ',
    'жена',
    'группа',
    'развитие',
    'процесс',
    'суд',
    'условие',
    'средство',
    'начало',
    'свет',
    'пора',
    'путь',
    'душа',
    'уровень',
    'форма',
    'связь',
    'минута',
    'улица',
    'вечер',
    'качество',
    'мысль',
    'дорога',
    'мать',
    'действие',
    'месяц',
    'государство',
    'язык',
    'любовь',
    'взгляд',
    'мама',
    'век',
    'школа',
    'цель',
    'общество',
    'деятельнось',
    'организация',
    'президент',
    'комната',
  ],
  numberWords: 7,
  numberLetters: 9,
  speed: 1,
  startingDistance: 25,
  distance: 25,
};

const rootReducer = (
    state = initState,
    action: FieldOfViewActionTypes,
): State => {
  switch (action.type) {
    case 'SET_NUMBER_WORDS': {
      const {payload} = action;

      return {
        ...state,
        numberWords: payload,
      };
    }

    case 'SET_NUMBER_LETTERS': {
      const {payload} = action;

      return {
        ...state,
        numberLetters: payload,
      };
    }

    case 'SET_SPEED': {
      const {payload} = action;

      return {
        ...state,
        speed: payload,
      };
    }

    case 'SET_STARTING_DISTANCE': {
      const {payload} = action;

      return {
        ...state,
        startingDistance: payload,
      };
    }

    case 'SET_DISTANCE': {
      const {payload} = action;

      return {
        ...state,
        distance: payload,
      };
    }

    case 'SET_INIT_STATE': {
      return initState;
    }

    default:
      return state;
  }
};

export default rootReducer;
