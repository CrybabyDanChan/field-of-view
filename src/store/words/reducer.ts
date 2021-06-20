import {WordsActionTypes} from './types';

export interface HomeState {

}

const initState: HomeState = {

};

const wordsReducer = (
    state = initState,
    action: WordsActionTypes,
): HomeState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default wordsReducer;
