import {combineReducers} from 'redux';
import homeReducer from '@/store/home/reducer';

export const rootReducer = combineReducers(
    homeReducer,
);

export type AppState = ReturnType<typeof rootReducer>
