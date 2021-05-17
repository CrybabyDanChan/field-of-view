export const WORDS_START_FETCHING = 'WORDS_START_FETCHING';
type WordsStartFetchingAction = {
    type: typeof WORDS_START_FETCHING;
};

export const WORDS_STOP_FETCHING = 'WORDS_STOP_FETCHING';
type WordsStopFetchingAction = {
    type: typeof WORDS_STOP_FETCHING;
};

export const SET_NUMBER_WORDS = 'SET_NUMBER_WORDS';
export type SetNumberWordsAction = {
    type: typeof SET_NUMBER_WORDS;
    payload: number
};

export const SET_NUMBER_LETTERS = 'SET_NUMBER_LETTERS';
export type SetNumberLettersAction = {
    type: typeof SET_NUMBER_LETTERS;
    payload: number
};

export const SET_SPEED = 'SET_SPEED';
export type SetSpeedAction = {
    type: typeof SET_SPEED;
    payload: number
};

export const SET_INIT_STATE = 'SET_INIT_STATE';
export type SetInitStateAction = {
    type: typeof SET_INIT_STATE;
};

export const SET_STARTING_DISTANCE = 'SET_STARTING_DISTANCE';
export type SetStartingDistanceAction = {
    type: typeof SET_STARTING_DISTANCE;
    payload: number
};

export const SET_DISTANCE = 'SET_DISTANCE';
export type SetDistanceAction = {
    type: typeof SET_DISTANCE;
    payload: number
};

export type FieldOfViewActionTypes =
    | WordsStartFetchingAction
    | WordsStopFetchingAction
    | SetNumberLettersAction
    | SetNumberWordsAction
    | SetSpeedAction
    | SetInitStateAction
    | SetStartingDistanceAction
    | SetDistanceAction;
