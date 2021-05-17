import {createStore, Store} from 'redux';
import {createWrapper, Context} from 'next-redux-wrapper';
import rootReducer, {State} from './reducer';

const makeStore = (context: Context): Store => createStore(rootReducer);

export const wrapper = createWrapper<Store<State>>(makeStore);
