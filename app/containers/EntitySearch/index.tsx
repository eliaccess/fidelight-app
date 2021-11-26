/**
 *
 * EntitySearch
 *
 */

import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { EntitySearchProps, State, UseEntitySearchReturn } from './types';
import makeSelectEntitySearch from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export function useEntitySearch(): UseEntitySearchReturn {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store: State = useSelector(makeSelectEntitySearch(), shallowEqual);

  const getData = useCallback(
    (payload: { query: string }) => {
      if (store.query === payload.query) {
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

export function EntitySearch({ children }: EntitySearchProps) {
  const store = useEntitySearch();
  return store ? children(store) : null;
}

export default React.memo(EntitySearch);
