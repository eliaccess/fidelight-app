/**
 *
 * HotDeals
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { generateDuxKey } from 'fs-frontend-commons';

import { HotDealsProps, UseHotDealsProps, StateItem } from './types';
import { selectHotDealsByKey } from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

function getKeyFromProps(props: UseHotDealsProps): string {
  return generateDuxKey(props, ['city'], true);
}

export function useHotDeals(props: UseHotDealsProps): StateItem {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const key = getKeyFromProps(props);
  const dispatch = useDispatch();
  const store: StateItem = useSelector(selectHotDealsByKey(key), shallowEqual);

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

export function HotDeals({ children, ...props }: HotDealsProps) {
  const store = useHotDeals(props);
  return store ? children(store) : null;
}

export default React.memo(HotDeals);
