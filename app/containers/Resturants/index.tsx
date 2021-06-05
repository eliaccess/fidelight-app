/**
 *
 * Resturants
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { generateDuxKey } from 'fs-frontend-commons';

import { ResturantsProps, UseResturantsProps, StateItem } from './types';
import { selectResturantsByKey } from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

function getKeyFromProps(props: UseResturantsProps): string {
  return generateDuxKey(props, ['city'], true);
}

export function useResturants(props: UseResturantsProps): StateItem {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const key = getKeyFromProps(props);
  const dispatch = useDispatch();
  const store: StateItem = useSelector(
    selectResturantsByKey(key),
    shallowEqual,
  );

  useEffect(() => {
    if (!props.city || store?.data?.length) {
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

export function Resturants({ children, ...props }: ResturantsProps) {
  const store = useResturants(props);
  return store ? children(store) : null;
}

export default React.memo(Resturants);
