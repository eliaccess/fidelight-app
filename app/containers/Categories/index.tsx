/**
 *
 * Categories
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { generateDuxKey } from 'fs-frontend-commons';

import { CategoriesProps, UseCategoriesProps, StateItem } from './types';
import { selectCategoriesByKey } from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

function getKeyFromProps(props: UseCategoriesProps): string {
  return generateDuxKey(props, ['city', 'country'], true);
}

export function useCategories(props: UseCategoriesProps): StateItem {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const key = getKeyFromProps(props);
  const dispatch = useDispatch();
  const store: StateItem = useSelector(
    selectCategoriesByKey(key),
    shallowEqual,
  );

  useEffect(() => {
    if (
      !props.city ||
      !props?.country ||
      store?.fetching ||
      store?.data?.length
    ) {
      return;
    }
    dispatch(
      actions.fetch({
        ...props,
        key,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return store;
}

export function Categories({ children, ...props }: CategoriesProps) {
  const store = useCategories(props);
  return store ? children(store) : null;
}

export default React.memo(Categories);
