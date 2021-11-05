/**
 *
 * CitiesSearch
 *
 */

import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { CitiesSearchProps, State, UseCitiesSearchReturn } from './types';
import makeSelectCitiesSearch from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export function useCitiesSearch(): UseCitiesSearchReturn {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store: State = useSelector(makeSelectCitiesSearch(), shallowEqual);

  const getData = useCallback(
    (payload: { query: string }) => {
      if (store.query === payload.query || payload.query.length < 3) {
        return;
      }
      dispatch(
        actions.fetch({
          query: payload.query,
        }),
      );
    },
    [dispatch, store.query],
  );

  return { ...store, getData };
}

export function CitiesSearch({ children }: CitiesSearchProps) {
  const store = useCitiesSearch();
  return store ? children(store) : null;
}

export default React.memo(CitiesSearch);
