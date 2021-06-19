import {HomeActionTypes} from './types';

export interface HomeState {

}

const initState: HomeState = {

};

const homeReducer = (
    state = initState,
    action: HomeActionTypes,
): HomeState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default homeReducer;
