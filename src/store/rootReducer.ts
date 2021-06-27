import {combineReducers} from 'redux';

import {wordsReducer as words} from '@/store/words/reducer';

export const rootReducer = combineReducers({
  words,
});

export type AppState = ReturnType<typeof rootReducer>
