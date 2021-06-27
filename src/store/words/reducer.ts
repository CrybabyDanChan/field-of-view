import {ErrorHttpAction, WordsActionTypes} from './types';

export interface WordsState {
  words: number[];
  isFetchingWords: boolean;
  error: ErrorHttpAction | false
}

const initState: WordsState = {
  words: [],
  isFetchingWords: false,
  error: false,
};

export const wordsReducer = (
    state = initState,
    action: WordsActionTypes,
): WordsState => {
  switch (action.type) {
    case 'WORDS_START_FETCHING': {
      return {
        ...state,
        isFetchingWords: true,
        error: false,
      };
    }

    case 'WORDS_STOP_FETCHING': {
      return {
        ...state,
        isFetchingWords: false,
        error: false,
      };
    }

    case 'WORDS_FILL': {
      const {payload} = action;

      return {
        ...state,
        words: payload,
        error: false,
      };
    }

    case 'WORDS_SET_FETCHING_ERROR': {
      const {payload} = action;

      return {
        ...state,
        error: payload,
      };
    }

    case 'WORDS_FETCH_ASYNC': {
      return {
        ...state,
        error: false,
      };
    }

    default:
      // eslint-disable-next-line no-unused-vars
      const unknownAction: never = action;
  }

  return state;
};
