export type ErrorHttpAction = {
    status: number
}

export const WORDS_START_FETCHING = 'WORDS_START_FETCHING';
export type WordsStartFetchingAction = {
    type: typeof WORDS_START_FETCHING
}

export const WORDS_STOP_FETCHING = 'WORDS_STOP_FETCHING';
export type WordsStopFetchingAction = {
    type: typeof WORDS_STOP_FETCHING
}

export const WORDS_FILL = 'WORDS_FILL';
export type WordsFillAction = {
    type: typeof WORDS_FILL,
    payload: number[]
}

export const WORDS_SET_FETCHING_ERROR = 'WORDS_SET_FETCHING_ERROR';
export type WordsSetFetchingErrorAction = {
    type: typeof WORDS_SET_FETCHING_ERROR,
    error: true,
    payload: ErrorHttpAction
}

export type WordsActionTypes = WordsStartFetchingAction
    | WordsStopFetchingAction
    | WordsSetFetchingErrorAction
    | WordsFillAction
