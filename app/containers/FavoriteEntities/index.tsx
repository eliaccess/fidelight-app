/**
 *
 * FavoriteEntities
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { FavoriteEntitiesProps, State } from './types';
import makeSelectFavoriteEntities from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export function useFavoriteEntities(): State {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectFavoriteEntities(), shallowEqual);

  useEffect(() => {
    if (store?.fetching || store?.data?.length > 0) {
      return;
    }
    dispatch(actions.fetch());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return store;
}

export function FavoriteEntities({ children }: FavoriteEntitiesProps) {
  const store = useFavoriteEntities();
  return store ? children(store) : null;
}

export default React.memo(FavoriteEntities);
