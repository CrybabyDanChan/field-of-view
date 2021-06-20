import {combineReducers} from 'redux';
import wordsReducer from '@/store/words/reducer';

export const rootReducer = combineReducers(
    wordsReducer,
);

export type AppState = ReturnType<typeof rootReducer>
