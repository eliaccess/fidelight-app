/**
 *
 * EntityOffersRewards
 *
 */

import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { generateDuxKey } from 'fs-frontend-commons';

import {
  EntityOffersRewardsProps,
  UseEntityOffersRewardsProps,
  StateItem,
} from './types';
import { selectEntityOffersRewardsByKey } from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

function getKeyFromProps(props: UseEntityOffersRewardsProps): string {
  return generateDuxKey(props, ['entityId'], true);
}

export function useEntityOffersRewards(
  props: UseEntityOffersRewardsProps,
): StateItem {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const key = getKeyFromProps(props);
  const dispatch = useDispatch();
  const store: StateItem = useSelector(
    selectEntityOffersRewardsByKey(key),
    shallowEqual,
  );

  useEffect(() => {
    if (store?.fetching || store?.data?.rewards) {
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

export function EntityOffersRewards({
  children,
  ...props
}: EntityOffersRewardsProps) {
  const store = useEntityOffersRewards(props);
  return store ? children(store) : null;
}

export default React.memo(EntityOffersRewards);
