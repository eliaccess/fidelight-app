/**
 *
 * BusinessTransactions
 *
 */

import React, { useCallback, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import {
  BusinessTransactionsProps,
  UseBusinessTransactionsProps,
  State,
  GivePointsAsGiftPayload,
  GivePointsAsPolicyPayload,
  GiveRewardPayload,
} from './types';
import makeSelectBusinessTransactions from './selectors';
import { actions, reducer, name as STORE_KEY } from './slice';
import saga from './saga';

export interface UseBusinessTransactionsReturn extends State {
  givePointsAsGift: (args: GivePointsAsGiftPayload) => void;
  givePointsAsPolicy: (args: GivePointsAsPolicyPayload) => void;
  giveReward: (args: GiveRewardPayload) => void;
  reset: () => void;
}

export function useBusinessTransactions(
  _props?: UseBusinessTransactionsProps,
): UseBusinessTransactionsReturn {
  useInjectReducer({ key: STORE_KEY, reducer });
  useInjectSaga({ key: STORE_KEY, saga });

  const dispatch = useDispatch();
  const store = useSelector(makeSelectBusinessTransactions(), shallowEqual);

  useEffect(() => {
    if (store?.fetching || store?.data?.length > 0) {
      return;
    }
    dispatch(actions.fetch());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const givePointsAsGift = (args: GivePointsAsGiftPayload) => {
    dispatch(
      actions.givePointsAsGift({
        ...args,
      }),
    );
  };

  const givePointsAsPolicy = (args: GivePointsAsPolicyPayload) => {
    dispatch(
      actions.givePointsAsPolicy({
        ...args,
      }),
    );
  };

  const giveReward = (args: GiveRewardPayload) => {
    dispatch(
      actions.giveReward({
        ...args,
      }),
    );
  };

  const reset = useCallback(() => dispatch(actions.reset()), []);

  return {
    ...store,
    givePointsAsGift,
    givePointsAsPolicy,
    giveReward,
    reset,
  };
}

export function BusinessTransactions({
  children,
  ...props
}: BusinessTransactionsProps) {
  const store = useBusinessTransactions(props);
  return store ? children(store) : null;
}

export default React.memo(BusinessTransactions);
