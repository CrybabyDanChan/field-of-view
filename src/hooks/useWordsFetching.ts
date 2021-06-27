import {useEffect} from 'react';
import {WordsState} from '@/store/words/reducer';
import {WordsActionTypes} from '@/store/words/types';
import {useDispatch, useSelector} from 'react-redux';
import {wordsFetchAsync} from '@/store/words/actions';
import {AppState} from '@/store/rootReducer';

export const useWordsFetching = (): WordsState => {
  const dispatch = useDispatch();
  const {
    isFetchingWords,
    words,
    error,
  } = useSelector<AppState, WordsState>((state) => state.words);

  useEffect(() => {
    dispatch(wordsFetchAsync());
  }, [dispatch]);

  return {
    isFetchingWords,
    words,
    error,
  };
};
