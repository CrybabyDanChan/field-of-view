import {
  ErrorHttpAction,
  WORDS_FETCH_ASYNC,
  WORDS_FILL,
  WORDS_SET_FETCHING_ERROR,
  WORDS_START_FETCHING,
  WORDS_STOP_FETCHING,
  WordsActionTypes,
  WordsFetchAsyncAction,
  WordsFillAction,
  WordsSetFetchingErrorAction,
} from '@/store/words/types';

export function wordsStartFetching(): WordsActionTypes {
  return {
    type: WORDS_START_FETCHING,
  };
}

export function wordsStopFetching(): WordsActionTypes {
  return {
    type: WORDS_STOP_FETCHING,
  };
}

export function wordsFill(payload: number[]): WordsFillAction {
  return {
    type: WORDS_FILL,
    payload,
  };
}

export function setFetchingError(payload: ErrorHttpAction): WordsSetFetchingErrorAction {
  return {
    type: WORDS_SET_FETCHING_ERROR,
    error: true,
    payload,
  };
}

export function wordsFetchAsync(): WordsFetchAsyncAction {
  return {
    type: WORDS_FETCH_ASYNC,
  };
}
