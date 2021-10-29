/**
 *
 * Categories
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { CategoriesProps, UseCategoriesProps, State } from './types';
import makeSelectCategories from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export function useCategories(_props?: UseCategoriesProps): State {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectCategories(), shallowEqual);

  useEffect(() => {
    if (store?.fetching || store?.data?.length > 0) {
      return;
    }
    dispatch(actions.fetch());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return store;
}

export function Categories({ children, ...props }: CategoriesProps) {
  const store = useCategories(props);
  return store ? children(store) : null;
}

export default React.memo(Categories);
