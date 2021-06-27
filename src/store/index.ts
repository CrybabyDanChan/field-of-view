import {
  applyMiddleware,
  createStore,
  Middleware,
  Store,
} from 'redux';
import {createWrapper, Context} from 'next-redux-wrapper';
import {rootReducer} from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '@/store/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [sagaMiddleware];
const makeStore = (context: Context): Store => createStore(
    rootReducer,
    applyMiddleware(...middleware),
);

// sagaMiddleware.run(rootSaga);

export const wrapper = createWrapper<Store<any>>(makeStore);
