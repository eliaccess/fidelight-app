/**
 *
 * HotDealDetail
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { generateDuxKey } from 'fs-frontend-commons';

import { HotDealDetailProps, UseHotDealDetailProps, StateItem } from './types';
import { selectHotDealDetailByKey } from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

function getKeyFromProps(props: UseHotDealDetailProps): string {
  return generateDuxKey(props, ['dealId'], true);
}

export function useHotDealDetail(props: UseHotDealDetailProps): StateItem {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const key = getKeyFromProps(props);
  const dispatch = useDispatch();
  const store: StateItem = useSelector(
    selectHotDealDetailByKey(key),
    shallowEqual,
  );

  useEffect(() => {
    if (store?.fetching || store?.data?.id || props.dealId === -1) {
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

export function HotDealDetail({ children, ...props }: HotDealDetailProps) {
  const store = useHotDealDetail(props);
  return store ? children(store) : null;
}

export default React.memo(HotDealDetail);
